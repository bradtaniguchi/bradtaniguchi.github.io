import { getArticlesFromCache } from '@bradtaniguchi-dev/forem-api';
import { DevMigratedPost, migrateDevPost } from '../models/dev-migrated-post';
import { StaticBlogPost } from '../models/static-blog-post';
import {
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from './get-blog-post-meta-data';
import { getMarkdownFiles } from './get-markdown-files';
import { join } from 'path';

/**
 * Returns the latest blog post. This includes posts from dev.to and
 * the internal blog.
 */
export async function getLatestPost(): Promise<
  StaticBlogPost | DevMigratedPost
> {
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

  const latestPost = allPosts.reduce((latest, post) => {
    if (post.date > latest.date) return post;
    return latest;
  });

  return latestPost;
}
