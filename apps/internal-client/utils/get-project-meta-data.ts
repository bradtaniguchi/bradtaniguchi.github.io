import fm from 'front-matter';
import { readFile } from 'fs/promises';
import {
  getInvalidStaticProjectProps,
  isStaticProject,
  StaticProject,
} from '../models/project';

/**
 * Returns a list of project meta-data from their markdown.
 * Will throw if invalid project is given
 */
export const getProjectMetaData = async (
  path: string
): Promise<StaticProject> => {
  const rawFileContent = await readFile(path);
  const rawAttributes = fm(rawFileContent.toString()).attributes;
  if (!isStaticProject(rawAttributes)) {
    const invalidProps = getInvalidStaticProjectProps(rawAttributes);
    throw new Error(
      'Invalid project at path ' +
        path +
        '\n with invalid props: \n' +
        JSON.stringify(invalidProps, null, 2)
    );
  }
  return rawAttributes;
};

/**
 * Returns all the metadata for the given project paths.
 *
 */
export const getProjectsMetaData = (
  projectPaths: string[]
): Promise<Array<StaticProject>> =>
  Promise.all(
    projectPaths.map((projectPath) => getProjectMetaData(projectPath))
  );
