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
   * The github URL, usually something like:
   * `bradtaniguchi/my-repo`.
   *
   * This will be used to combine entires later when the project
   * makes direct github calls to get public projects.
   */
  github?: string;
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
 * Returns a list of invalid static project properties.
 * Used for debugging invalid static files.
 */
export const getInvalidStaticProjectProps = (
  data: unknown
): Array<keyof StaticProject> => {
  const castData = data as Partial<StaticProject>;
  const propsAndValidators: Array<[keyof StaticProject, () => boolean]> = [
    ['slug', () => typeof castData.slug === 'string'],
    ['title', () => typeof castData.title === 'string'],
    [
      'description',
      () =>
        castData.description ? typeof castData.description === 'string' : true,
    ],
    [
      'date',
      () =>
        (castData.date &&
          typeof castData.date === 'string' &&
          DateTime.fromISO(castData.date).isValid) ||
        // this is cast at another level automatically
        (castData.date as unknown as Date) instanceof Date,
    ],
    [
      'published',
      () => {
        if (castData.published === undefined || castData.published === null)
          return true;
        if (typeof castData.published === 'boolean') return true;
        return false;
      },
    ],
    [
      'github',
      () => {
        if (!castData.github) return true;
        if (typeof castData.github === 'string') return true;
        return false;
      },
    ],
    [
      'tags',
      () => {
        if (!castData.tags) return true;
        if (Array.isArray(castData.tags))
          return castData.tags.every((tag) => typeof tag === 'string');
        return typeof castData.tags === 'string';
      },
    ],
  ];

  const invalidPropsWithValidators = propsAndValidators.filter(
    ([, validatorFn]) => !validatorFn()
  );
  return invalidPropsWithValidators.map(([prop]) => prop);
};
/**
 * Type guard that returns if the given data is a
 * valid static-project.
 */
export const isStaticProject = (data: unknown): data is StaticProject => {
  return getInvalidStaticProjectProps(data).length === 0;
};
