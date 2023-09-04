import { join } from 'path';

/**
 * Path to the static project files. Relies on relative
 * import path from the root of this nx-project.
 */
export const PROJECTS_PATH = join(process.cwd(), 'static/projects/');
