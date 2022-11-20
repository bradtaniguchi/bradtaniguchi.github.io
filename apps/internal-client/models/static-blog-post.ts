import { getInvalidProps } from '../utils/props-and-validators';

export interface StaticBlogPost {
  slug: string;

  /**
   * The title of the blog post
   */
  title: string;
  /**
   * The description of the project, shown as a summary
   */
  description: string;
}

export const getInvalidStaticBlogPostProps = (
  data: unknown
): Array<keyof StaticBlogPost> =>
  getInvalidProps(
    [
      ['slug', (data) => typeof data.slug === 'string'],
      ['title', (data) => typeof data.title === 'string'],
      ['description', (data) => typeof data.description === 'string'],
    ],
    data as StaticBlogPost
  );
