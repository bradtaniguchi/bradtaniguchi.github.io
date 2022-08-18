import { stat } from 'fs-extra';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;
import {
  getProjectMetaData,
  getProjectsMetaData,
} from '../utils/get-project-meta-data';
import { getMarkdownFiles } from '../utils/get-markdown-files';

(async () => {
  try {
    const path = argv.path;

    if (!path) throw new Error('Missing --path arg, please path is');
    if (typeof path !== 'string') throw new Error('--path is not a string');

    const pathStat = await stat(path);

    if (!pathStat.isDirectory()) {
      const metaData = await getProjectMetaData(path);

      console.log(metaData);
      return;
    }

    const projectPaths = await getMarkdownFiles(path);
    const projectsMetaData = await getProjectsMetaData(projectPaths);

    console.log(projectsMetaData);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
