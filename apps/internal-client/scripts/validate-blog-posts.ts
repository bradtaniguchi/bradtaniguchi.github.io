/* eslint-disable no-console */
import { stat } from 'fs-extra';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
const argv = yargs(hideBin(process.argv)).argv;
import {
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from '../utils/get-blog-post-meta-data';
import { getMarkdownFiles } from '../utils/get-markdown-files';
import { getInvalidStaticBlogPostProps } from '../models/static-blog-post';

(async () => {
  try {
    const path = argv.path;

    if (!path) throw new Error('Missing --path arg, please path is');
    if (typeof path !== 'string') throw new Error('--path is not a string');

    const pathStat = await stat(path);

    if (!pathStat.isDirectory()) throw new Error('Path is not a directory');

    const blogPostPaths = await getMarkdownFiles(path);

    if (!blogPostPaths.length)
      throw new Error('No Projects found at path ' + path);

    const projectsMetaData = await getBlogPostsMetaData(blogPostPaths);

    console.log('blogs found ', {
      num: projectsMetaData.length,
      slugs: projectsMetaData.map(({ slug }) => slug),
    });

    // const invalidBlogPosts = projectsMetaData.filter((blogPostMetaData) =>
    //   isStaticProject(blogPostMetaData)
    // );
    // TODO:
    const invalidBlogPosts = [];

    console.log(
      'invalid-projects: ',
      invalidBlogPosts.map((invalidBlogPost) => ({
        title: invalidBlogPost.title,
        invalidProps: getInvalidStaticBlogPostProps(invalidBlogPost),
      }))
    );

    if (invalidBlogPosts.length) throw new Error('Invalid projects found');

    // check for duplicate slugs
    verifyBlogPostMetaData(projectsMetaData); // this throws internally

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
