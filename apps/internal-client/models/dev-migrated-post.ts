import { DevToPost } from '@bradtaniguchi-dev/forem-api';
import * as z from 'zod';

/**
 * Migrated version of what is returned from the dev API.
 *
 * Works with inter-opt with StaticBlogPost, with support for extras.
 */
export interface DevMigratedPost {
  /**
   * The id to identify this post.
   * Used for direct lookups for the post.
   */
  id: number;
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
   * **note** this is always migrated, as the API seems to return
   * a string or an array of strings in different situations for some reason.
   */
  tags: string[];

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
  id: post.id,
  slug: post.slug,
  title: post.title,
  description: post.description,
  tags: Array.isArray(post.tag_list)
    ? post.tag_list
    : post.tag_list.split(',').map((tag) => tag.trim()),
  date: post.published_at,
  source: 'dev.to',
});
/**
 * Zod based validation schema used to test if the given data
 * is a migratedDevPost.
 */
export const migratedDevPostSchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  tags: z.union([z.array(z.string()), z.string()]),
  date: z.string(),
  source: z.literal('dev.to'),
});

/**
 * Type-guard for the MigratedDevPost type.
 *
 * Internally uses the `migratedDevPostSchema` to validate the given data.
 */
export const isMigratedDevPost = (post: unknown): post is DevMigratedPost => {
  if (!post) return false;
  try {
    migratedDevPostSchema.parse(post);
    return true;
  } catch (err) {
    return false;
  }
};
