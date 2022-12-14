import {
  useHasMounted,
  useLocalCollection,
} from '@bradtaniguchi-dev/common-react';
import { Box, Button, Spinner, Text } from '@primer/react';
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

export interface BlogProps {
  posts: Array<Partial<IStaticBlogPost>>;
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
    },
    []
  );

  const handleShowMoreOnClick = () => setLimit(limit + 5);

  // we only want to show this button if the limit is less than the total
  const showShowMore = limit < props.posts.length;

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
    limit,
  });

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
            />
          </div>
        </Box>
      </Card.Header>
      <Card.Body p={0}>
        <ul>
          {posts.map((post) => (
            <Card.Row p={3} key={post.slug}>
              <li>
                <StaticBlogPost
                  blog={post as unknown as IStaticBlogPost}
                ></StaticBlogPost>
              </li>
            </Card.Row>
          ))}
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
              <Box>{'Show More'}</Box>
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

  const blogPostsMetaData = await getBlogPostsMetaData(blogPaths);

  verifyBlogPostMetaData(blogPostsMetaData);

  return {
    props: {
      posts: blogPostsMetaData,
    },
  };
}
