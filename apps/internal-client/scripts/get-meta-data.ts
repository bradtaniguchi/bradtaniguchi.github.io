import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;
import { getProjectMetaData } from '../utils/get-project-meta-data';

(async () => {
  try {
    const path = argv.path;

    if (!path) throw new Error('Missing --path arg, please path is');
    if (typeof path !== 'string') throw new Error('--path is not a string');

    console.log('');

    const metaData = await getProjectMetaData(path);

    console.log(metaData);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
