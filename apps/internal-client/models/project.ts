import { LabelColorOptions } from '@primer/react/lib/Label';

export type Project = StaticProject;

/**
 * A static project is the UI displayed for a "static" definition
 * of a project. This is used in place of the official README, probably
 * because the project is **really old**.
 */
export interface StaticProject {
  /**
   * Unique ID of the project, used for URL.
   * The previous version could accept multiple, but we will be
   * only using a single one instead.
   */
  slug: string;
  /**
   * The name of the project post
   */
  title: string;
  /**
   * The description of the project
   */
  description: string;
  /**
   * If the article is published or not.
   * If it isn't then it wont be loaded as a staticProp to save on build memory
   */
  published?: boolean;
  /**
   * The date time this was "published", should be in ISO format
   */
  date: string;

  /**
   * List of tags. Defaults to accent color, but can be over-written
   */
  tags: Array<
    | string
    | {
        /**
         * The name of the tag
         */
        name: string;
        /**
         * The color tag override
         */
        color: LabelColorOptions;
      }
  >;
}
