/* eslint-disable no-console */
import { stat } from 'fs-extra';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;
import {
  getProjectsMetaData,
  verifyProjectsMetaData,
} from '../utils/get-project-meta-data';
import { getMarkdownFiles } from '../utils/get-markdown-files';
import {
  getInvalidStaticProjectProps,
  isStaticProject,
} from '../models/project';

(async () => {
  try {
    const path = argv.path;

    if (!path) throw new Error('Missing --path arg, please path is');
    if (typeof path !== 'string') throw new Error('--path is not a string');

    const pathStat = await stat(path);

    if (!pathStat.isDirectory()) throw new Error('Path is not a directory');

    const projectPaths = await getMarkdownFiles(path);

    if (!projectPaths.length)
      throw new Error('No Projects found at path ' + path);

    const projectsMetaData = await getProjectsMetaData(projectPaths);

    console.log('projects found ', {
      num: projectsMetaData.length,
      slugs: projectsMetaData.map(({ slug }) => slug),
    });

    const invalidProjects = projectsMetaData.filter(
      (projectsMetaData) => !isStaticProject(projectsMetaData)
    );

    console.log(
      'invalid-projects: ',
      invalidProjects.map((invalidProject) => ({
        title: invalidProject.title,
        invalidProps: getInvalidStaticProjectProps(invalidProject),
      }))
    );

    if (invalidProjects.length) throw new Error('Invalid projects found');

    // check for duplicate slugs
    verifyProjectsMetaData(projectsMetaData); // this throws internally

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
