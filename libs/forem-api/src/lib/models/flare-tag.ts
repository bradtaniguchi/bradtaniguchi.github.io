import { z } from 'zod';

/**
 * TODO:???
 */
export const DevToFlareTagSchema = z.object({
  /**
   * The name of the flare tag
   */
  name: z.string(),
  /**
   * The bg color of the flare tag
   */
  bg_color_hex: z.string(),
  /**
   * The text color of the flare tag
   */
  text_color_hex: z.string(),
});

export type DevToFlareTag = z.infer<typeof DevToFlareTagSchema>;
