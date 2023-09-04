import { join } from 'path';

/**
 * Path to the static blog files. Relies on relative
 * import path from the root of this nx-project.
 */
export const BLOG_PATH = join(process.cwd(), 'static/blog/');
