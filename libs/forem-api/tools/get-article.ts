import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;
import { getArticle } from '../src/lib/utils/get-article';
import { ZodError } from 'zod';

/**
 * Script that can be used to get an article by id from dev.to
 * Example article:
 * 1003715
 */
(async () => {
  try {
    const id = argv.id;
    const html = argv.html;

    if (!id) throw new Error('Missing --id arg, please provide it');
    if (typeof id !== 'number') throw new Error('--id is not a number');

    if (html !== undefined) {
      if (typeof html !== 'boolean') {
        throw new Error('--html is not a boolean');
      }
    }

    const article = await getArticle(id);
    console.log(article);

    process.exit(0);
  } catch (err) {
    if (err instanceof ZodError) {
      console.error('zod parsing error:', err.issues);
    } else {
      console.error(err);
    }

    process.exit(1);
  }
})();
