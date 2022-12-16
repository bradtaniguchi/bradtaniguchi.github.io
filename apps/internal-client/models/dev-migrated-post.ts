import { DevToPost } from '@bradtaniguchi-dev/forem-api';

/**
 * Migrated version of what is returned from the dev API.
 *
 * Works with inter-opt with StaticBlogPost, with support for extras.
 */
export interface DevMigratedPost {
  /**
   * The slug for the blog post, shown in the URL.
   * is re-used for portfolio posts
   */
  slug: DevToPost['slug'];

  /**
   * Title of the blog post
   */
  title: DevToPost['title'];

  /**
   * The description of the project, shown as a summary
   */
  description: DevToPost['description'];

  /**
   * Tags for this post.
   */
  tags: DevToPost['tag_list'];

  /**
   * The date this post was published at
   */
  date: DevToPost['published_at'];

  /**
   * The source of the post
   */
  source: 'dev.to';
}

/**
 * Migrates the given post from dev.to to the internal format.
 */
export const migrateDevPost = (post: DevToPost): DevMigratedPost => ({
  slug: post.slug,
  title: post.title,
  description: post.description,
  tags: post.tag_list,
  date: post.published_at,
  source: 'dev.to',
});
