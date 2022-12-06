import { z } from 'zod';

/**
 * Zod based schema definition for a dev.to post.
 * Returned from getArticles.
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

  // TODO: Add more fields
});

// DevToPostSchema.parse({ username: 'Ludwig' });

export type DevToPost = z.infer<typeof DevToPostSchema>;
