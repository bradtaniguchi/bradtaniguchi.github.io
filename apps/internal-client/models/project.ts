export type Project = StaticProject;

/**
 * A static project is the UI displayed for a "static" definition
 * of a project. This is used in place of the official README, probably
 * because the project is **really old**.
 */
export interface StaticProject {
  /**
   * Unique ID of the project, used for URL
   */
  slug: string;
  // TODO
}
