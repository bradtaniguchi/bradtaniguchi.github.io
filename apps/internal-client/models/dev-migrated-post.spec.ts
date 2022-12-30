import { isMigratedDevPost } from './dev-migrated-post';

describe('isMigratedDevPost', () => {
  test('returns true', () => {
    expect(
      isMigratedDevPost({
        id: 1300005,
        slug: 'using-the-forem-api-for-cross-posting-1i1e',
        title: 'Using the forem-api for cross-posting',
        description:
          'I\'ve been redoing my portfolio/blog/website project using some newer technology. One "advanced"...',
        tags: ['webdev', 'nextjs', 'forem'],
        date: '2022-12-23T20:45:14Z',
        source: 'dev.to',
      })
    ).toEqual(true);
    expect(
      isMigratedDevPost({
        id: 1003715,
        slug: 'weird-and-interesting-places-to-remote-work-from-5g22',
        title: 'Weird and interesting places to remote work from?',
        description:
          'Due to the increase in opportunities that provide remote work, I was wondering if anyone ever tried...',
        // this is changed from the actual data for this test.
        tags: 'remote',
        date: '2022-02-28T05:32:23Z',
        source: 'dev.to',
      })
    ).toEqual(true);
  });

  test('returns false', () => {
    // basic sanity tests
    expect(isMigratedDevPost({})).toEqual(false);
    expect(isMigratedDevPost({ id: 1 })).toEqual(false);
  });
});
