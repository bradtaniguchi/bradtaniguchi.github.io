import {
  useHasMounted,
  useLocalCollection,
  useTagFilter,
} from '@bradtaniguchi-dev/common-react';
import { getArticlesFromCache } from '@bradtaniguchi-dev/forem-api';
import { Box, Button, Spinner, Text } from '@primer/react';
import { GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { DevToPost } from '../../components/blog/dev-to-post';
import { StaticBlogPost } from '../../components/blog/static-blog-post';
import { Card } from '../../components/core/card';
import {
  ListFilterProps,
  ListFilters,
} from '../../components/projects/list-filters';
import { BLOG_PATH } from '../../constants/blog-path';
import {
  DevMigratedPost,
  isMigratedDevPost,
  migrateDevPost,
} from '../../models/dev-migrated-post';
import { StaticBlogPost as IStaticBlogPost } from '../../models/static-blog-post';
import {
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from '../../utils/get-blog-post-meta-data';
import { getMarkdownFiles } from '../../utils/get-markdown-files';

export interface BlogProps {
  posts: Array<IStaticBlogPost | DevMigratedPost>;
}

export default function Blog(props: BlogProps) {
  const router = useRouter();
  const mounted = useHasMounted();

  const defaultSearchValue = Array.isArray(router.query.q)
    ? router.query.q.join(' ')
    : router.query.q;

  const defaultTags = (
    Array.isArray(router.query.tags) ? router.query.tags : [router.query.tags]
  ).filter((tag) => typeof tag === 'string' && tag) as string[];

  const [searchValue, setSearchValue] = useState<string>('');
  const [limit, setLimit] = useState<number>(5);

  const handleSearchChange: ListFilterProps['onSearchChange'] = useCallback(
    (searchValue: string) => {
      setSearchValue(searchValue);
      setLimit(5);
    },
    []
  );

  const handleSearchClose = useCallback(() => {
    setLimit(5);
  }, []);

  const handleShowMoreOnClick = () => setLimit(limit + 5);

  /**
   * Tag filter custom hook.
   */
  const { selectableTags, selectedTags, setSelectedTags } = useTagFilter({
    elements: props.posts,
  });

  /**
   * Filters for the useLocalCollection.
   * These keep track of the selectedTags from the useTagFilter custom hook.
   */
  const filters = useMemo(() => {
    return [
      // only show posts that match the tag value if there is one
      (post: IStaticBlogPost | DevMigratedPost) =>
        selectedTags.length
          ? selectedTags.some((tag) => (post.tags || []).includes(tag))
          : true,
    ];
  }, [selectedTags]);

  /**
   * Runtime effect that is ran initially when the defaultTags are calculated.
   * This needs to be ran here as the useTagFilter custom hook is not available
   * on the server-side during render.
   */
  useEffect(() => {
    if (defaultTags && defaultTags.length) setSelectedTags(defaultTags);
  }, [defaultTags, setSelectedTags]);

  /**
   * Custom hook to manage a collection of posts. Handles filtering, and auto-sorting
   */
  const { results: posts } = useLocalCollection({
    elements: props.posts,
    filters,
    searchOptions: useMemo(
      () => ({
        keys: ['title', 'description', 'tags'] as Array<keyof IStaticBlogPost>,
        distance: 0.8,
      }),
      []
    ),
    search: searchValue,
    sortBy: 'date',
    sortDir: 'dsc',
  });

  // we only want to show this button if the limit is less than the total
  const showShowMore = limit < posts.length;

  // when in a server-environment, render a spinner for the quick duration
  // between hydration and rendering
  if (!mounted) return <Spinner />;

  return (
    <Card>
      <Card.Header>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Text as="h2" fontSize={'inherit'} margin={0}>
            Posts
          </Text>
          <div>
            <ListFilters
              defaultSearchValue={defaultSearchValue}
              selectableTags={selectableTags}
              selectedTags={selectedTags}
              onSearchChange={handleSearchChange}
              onSearchClear={handleSearchClose}
              onTagChange={setSelectedTags}
            />
          </div>
        </Box>
      </Card.Header>
      <Card.Body p={0}>
        <ul>
          {posts
            .map((post) => (
              <Card.Row p={3} key={post.slug}>
                <li>
                  {(() => {
                    if (isMigratedDevPost(post))
                      return <DevToPost blog={post} />;
                    // can support other types here.
                    return <StaticBlogPost blog={post}></StaticBlogPost>;
                  })()}
                </li>
              </Card.Row>
            ))
            .slice(0, limit)}
        </ul>
        {showShowMore ? (
          <Box sx={{ margin: '8px' }}>
            <Button
              sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
              }}
              onClick={handleShowMoreOnClick}
            >
              Show More
            </Button>
          </Box>
        ) : null}
      </Card.Body>
    </Card>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<BlogProps>
> {
  const blogPaths = await getMarkdownFiles(BLOG_PATH);

  const [blogPostsMetaData, devToPosts] = await Promise.all([
    getBlogPostsMetaData(blogPaths),
    // get all blog posts from dev.to
    getArticlesFromCache({
      username: 'bradtaniguchi',
    }),
  ]);

  const allPosts: Array<IStaticBlogPost | DevMigratedPost> = [
    ...blogPostsMetaData,
    ...devToPosts.map(migrateDevPost),
  ];

  verifyBlogPostMetaData(allPosts);

  return {
    props: {
      posts: allPosts,
    },
    // set as high number to prevent extra hits against
    // the forem api.
    // 10k seconds
    revalidate: 10_000,
  };
}
