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

  // front-matter auto-parses iso dates, but we don't want that
  // we so cast it if its parsed as a Date object back to an ISO string
  if (
    rawAttributes.date &&
    (rawAttributes.date as unknown as Date) instanceof Date
  )
    rawAttributes.date = (rawAttributes.date as unknown as Date).toISOString();

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
