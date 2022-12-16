import { z } from 'zod';
import { DevToFlareTagSchema } from './flare-tag';
import { DevToOrganizationSchema } from './organization';
import { DevToUserSchema } from './user';

/**
 * Zod based schema definition for a dev.to post.
 * Returned from getArticles.
 *
 * See:
 * https://developers.forem.com/api/v1#tag/articles/operation/getArticles
 *
 * for docs.
 */
export const DevToPostSchema = z.object({
  /**
   * The type of data, usually article
   */
  type_of: z.enum(['article']),
  /**
   * The unique id of the article, int32
   */
  id: z.number(),
  /**
   * The title of the article
   */
  title: z.string(),
  /**
   * The description of the article
   */
  description: z.string(),
  /**
   * Unique slug on dev.to platform, will be re-used for
   * this platform.
   */
  slug: z.string(),
  /**
   * The http path to the article on dev.to
   */
  url: z.string(),
  /**
   * The number of comments received.
   */
  comments_count: z.number(),
  /**
   * The number of reactions received.
   */
  public_reactions_count: z.number(),
  /**
   * URL of the cover image, this probably wont be loadable
   * from the local page, so don't try to use it.
   */
  cover_image: z.union([z.string().optional(), z.null()]),
  /**
   * URL of the social image, this probably wont be loadable
   * from the local page, so don't try to use it.
   */
  social_image: z.string(),
  /**
   * The canonical URL of the article, this is the URL of the
   * original article on the original platform.
   */
  canonical_url: z.string(),
  /**
   * Time formatted as ISO date-time
   * ex: 2021-03-01T00:00:00Z
   */
  created_at: z.string(),
  /**
   * Time formatted as ISO date-time
   * ex: 2021-03-01T00:00:00Z
   */
  edited_at: z.string().optional(),
  /**
   * TODO: ???
   */
  crossposted_at: z.unknown(),
  /**
   * Time formatted as ISO date-time when article was published
   * ex: 2021-03-01T00:00:00Z
   */
  published_at: z.string(),
  /**
   * Time formatted as ISO date-time when article was last commented on
   * ex: 2021-03-01T00:00:00Z
   *
   * I assume this is optional
   */
  last_comment_at: z.string().optional(),
  /**
   * The number of minutes it takes to read the article
   */
  reading_time_minutes: z.number(),
  /**
   * The list of tags for the article
   */
  tag_list: z.array(z.string()),
  /**
   * Comma separated list of tags for the article
   * TODO: ???
   */
  tags: z.string(),
  /**
   * The user who made the post
   */
  user: DevToUserSchema,
  /**
   * The organization who made the post
   */
  organization: DevToOrganizationSchema.optional(),
  /**
   * TODO: ???
   */
  flare_tag: DevToFlareTagSchema.optional(),
});

/**
 * Type for a DevToPost
 */
export type DevToPost = z.infer<typeof DevToPostSchema>;
