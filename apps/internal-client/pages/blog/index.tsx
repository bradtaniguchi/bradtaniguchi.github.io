import {
  useHasMounted,
  useLocalCollection,
} from '@bradtaniguchi-dev/common-react';
import { getArticles } from '@bradtaniguchi-dev/forem-api';
import { Box, Button, Spinner, Text } from '@primer/react';
import {
  DevMigratedPost,
  migrateDevPost,
} from '../../models/dev-migrated-post';
import { GetStaticPropsResult } from 'next';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { StaticBlogPost } from '../../components/blog/static-blog-post';
import { Card } from '../../components/core/card';
import {
  ListFilterProps,
  ListFilters,
} from '../../components/projects/list-filters';
import { BLOG_PATH } from '../../constants/blog-path';
import { StaticBlogPost as IStaticBlogPost } from '../../models/static-blog-post';
import {
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from '../../utils/get-blog-post-meta-data';
import { getMarkdownFiles } from '../../utils/get-markdown-files';
import { DevToPost } from '../../components/blog/dev-to-post';

export interface BlogProps {
  posts: Array<IStaticBlogPost | DevMigratedPost>;
}

export default function Blog(props: BlogProps) {
  const router = useRouter();
  const mounted = useHasMounted();

  const defaultSearchValue = Array.isArray(router.query.q)
    ? router.query.q.join(' ')
    : router.query.q;

  const [searchValue, setSearchValue] = useState<string>('');
  const [limit, setLimit] = useState<number>(5);

  const handleSearchChange: ListFilterProps['onSearchChange'] = useCallback(
    (searchValue) => {
      setSearchValue(searchValue);
      setLimit(5);
    },
    []
  );

  const handleSearchClose = useCallback(() => {
    setLimit(5);
  }, []);

  const handleShowMoreOnClick = () => setLimit(limit + 5);

  const { results: posts } = useLocalCollection({
    elements: props.posts,
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
              onSearchChange={handleSearchChange}
              onClear={handleSearchClose}
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
                    // TODO: add type-guard
                    if ((post as DevMigratedPost).source === 'dev.to')
                      return <DevToPost blog={post as DevMigratedPost} />;

                    return (
                      <StaticBlogPost
                        blog={post as IStaticBlogPost}
                      ></StaticBlogPost>
                    );
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
    getArticles({
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
