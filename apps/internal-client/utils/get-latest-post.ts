import { DevMigratedPost } from '../models/dev-migrated-post';
import { StaticBlogPost } from '../models/static-blog-post';

/**
 * Returns the latest blog post. This includes posts from dev.to and
 * the internal blog.
 */
export async function getLatestPost(): Promise<
  StaticBlogPost | DevMigratedPost
> {
  // TODO:
  return {
    date: '2022-12-23',
    description:
      'test super long test description that is a test a test a testa testa testa test',
    slug: 'test-slug',
    tags: ['one', 'two'],
    title: 'test title',
  } as StaticBlogPost;
}
