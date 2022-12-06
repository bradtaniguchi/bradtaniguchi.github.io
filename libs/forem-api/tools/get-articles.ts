import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;
import { getArticles } from '../src/lib/utils/get-articles';

/**
 * Script that can be used to get the articles from dev.to for
 * the given username.
 */
(async () => {
  try {
    const username = argv.username;

    if (!username) throw new Error('Missing --username arg, please provide it');
    if (typeof username !== 'string')
      throw new Error('--username is not a string');

    const { data } = await getArticles({ username });

    console.log(data);

    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
})();
