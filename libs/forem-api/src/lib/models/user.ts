import { z } from 'zod';

/**
 * Zod based schema definition for a dev.to user.
 *
 * @see DevToFlareTagSchema
 */
export const DevToUserSchema = z.object({
  /**
   * The unique id of the user, int32
   */
  user_id: z.number(),
  /**
   * The username of the user
   */
  name: z.string(),
  /**
   * The username of the user
   */
  username: z.string(),
  /**
   * The twitter username of the user
   */
  twitter_username: z.string().optional(),
  /**
   * The github username of the user
   */
  github_username: z.string().optional(),
  /**
   * The website URL of the user
   */
  website_url: z.string().optional(),
  /**
   * The profile image URL of the user
   */
  profile_image: z.string(),
  /**
   * The profile image URL of the user
   */
  profile_image_90: z.string(),
});
