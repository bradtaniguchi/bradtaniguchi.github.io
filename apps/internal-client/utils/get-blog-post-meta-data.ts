import fm from 'front-matter';
import { readFile } from 'fs/promises';

import {
  getInvalidStaticBlogPostProps,
  isStaticBlogPost,
  StaticBlogPost,
} from '../models/static-blog-post';

/**
 * Returns a list of blog post meta-data from their markdown.
 * Will throw if invalid blog post is given
 */
export const getBlogPostMetaData = async (
  path: string
): Promise<StaticBlogPost> => {
  const rawFileContent = await readFile(path);
  const rawAttributes = fm(rawFileContent.toString()).attributes;
  if (!isStaticBlogPost(rawAttributes)) {
    const invalidProps = getInvalidStaticBlogPostProps(rawAttributes);
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
 * Returns all meta-data for the given static blog post paths.
 */
export const getBlogPostsMetaData = (blogPostsPaths: string[]) =>
  Promise.all(
    blogPostsPaths.map((blogPostPath) => getBlogPostMetaData(blogPostPath))
  );

/**
 * Verifies the project meta-data does not include any duplicate slugs.
 */
export const verifyBlogPostMetaData = (
  blogPostMetaData: Array<StaticBlogPost>
): void => {
  if (
    new Set(blogPostMetaData.map(({ slug }) => slug)).size ===
    blogPostMetaData.length
  ) {
    return;
  }

  throw new Error('Duplicate slugs detected');
};
