import { getArticlesFromCache } from '@bradtaniguchi-dev/forem-api';
import { BLOG_PATH } from '../constants/blog-path';
import { DevMigratedPost, migrateDevPost } from '../models/dev-migrated-post';
import { StaticBlogPost } from '../models/static-blog-post';
import {
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from './get-blog-post-meta-data';
import { getMarkdownFiles } from './get-markdown-files';

/**
 * Returns the latest blog post. This includes posts from dev.to and
 * the internal blog.
 */
export async function getLatestPost(): Promise<
  StaticBlogPost | DevMigratedPost
> {
  const blogPaths = await getMarkdownFiles(BLOG_PATH);

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
