import { z } from 'zod';

/**
 * Zod based schema definition for a dev.to organization.
 *
 * @see DevToFlareTagSchema
 */
export const DevToOrganizationSchema = z.object({
  /**
   * The name of the organization
   */
  name: z.string(),
  /**
   * The username of the organization
   */
  username: z.string(),
  /**
   * The slug of the organization
   */
  slug: z.string(),
  /**
   * The profile image URL of the organization
   */
  profile_image: z.string(),
  /**
   * The profile image URL of the organization
   */
  profile_image_90: z.string(),
});

export type DevToOrganization = z.infer<typeof DevToOrganizationSchema>;
