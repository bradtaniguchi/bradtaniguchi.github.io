import { getArticlesFromCache } from '@bradtaniguchi-dev/forem-api';
import { DevMigratedPost, migrateDevPost } from '../models/dev-migrated-post';
import { StaticBlogPost } from '../models/static-blog-post';
import {
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from './get-blog-post-meta-data';
import { getMarkdownFiles } from './get-markdown-files';
import { join } from 'path';

type LatestPost = StaticBlogPost | DevMigratedPost;

/**
 * Returns the latest blog post. This includes posts from dev.to and
 * the internal blog.
 *
 * @deprecated move to getLatestPosts, which returns 5 posts.
 */
export async function getLatestPost(): Promise<LatestPost> {
  const blogPaths = await getMarkdownFiles(join(process.cwd(), 'static/blog/'));

  const [blogPostsMetaData, devToPosts] = await Promise.all([
    getBlogPostsMetaData(blogPaths),
    // get all blog posts from dev.to
    getArticlesFromCache({
      username: 'bradtaniguchi',
    }),
  ]);

  const allPosts: Array<LatestPost> = [
    ...blogPostsMetaData,
    ...devToPosts.map(migrateDevPost),
  ];

  verifyBlogPostMetaData(allPosts);

  const latestPost = allPosts.reduce((latest, post) => {
    if (post.date > latest.date) return post;
    return latest;
  });

  return latestPost;
}

/**
 * Returns the latest 5 blog posts. This includes posts from dev.to and
 * the internal blog.
 *
 * @returns the 5 latest blog posts.
 */
export async function getLatestPosts(): Promise<LatestPost[]> {
  const blogPaths = await getMarkdownFiles(join(process.cwd(), 'static/blog/'));

  const [blogPostsMetaData, devToPosts] = await Promise.all([
    getBlogPostsMetaData(blogPaths),
    // get all blog posts from dev.to
    getArticlesFromCache({
      username: 'bradtaniguchi',
    }),
  ]);

  const allPosts: Array<StaticBlogPost | DevMigratedPost> = [
    ...blogPostsMetaData,
    ...devToPosts.map(migrateDevPost),
  ];

  verifyBlogPostMetaData(allPosts);

  const sortedPosts = allPosts.sort((a, b) => {
    return a.date > b.date ? -1 : 1;
  });

  const latestPosts: LatestPost[] = [];

  if (sortedPosts.length < 5) {
    return sortedPosts;
  }

  // TODO: check order
  for (const latestPost of allPosts) {
    const length = latestPosts.length;
    if (length < 5) {
      latestPosts.push(latestPost);
      continue;
    }
  }

  return latestPosts;
}
