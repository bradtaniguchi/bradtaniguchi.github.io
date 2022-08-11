import { LabelColorOptions } from '@primer/react/lib/Label';
import { DateTime } from 'luxon';

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

/**
 * Type guard that returns if the given data is a
 * valid static-project.
 */
export const isStaticProject = (data: unknown): data is StaticProject => {
  const castData = data as Partial<StaticProject>;
  return (
    typeof castData.slug === 'string' &&
    typeof castData.title === 'string' &&
    (castData.description ? typeof castData.description === 'string' : true) &&
    (castData.published === undefined ||
      typeof castData.published === 'boolean') &&
    castData.date &&
    typeof castData.date === 'string' &&
    DateTime.fromISO(castData.date).isValid &&
    (() => {
      if (!castData.tags) return true;
      if (Array.isArray(castData.tags))
        return castData.tags.every((tag) => typeof tag === 'string');
      return typeof castData.tags === 'string';
    })()
  );
};
