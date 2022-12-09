import { CommonLogger } from '@bradtaniguchi-dev/common';
import { useLocalCollection } from '@bradtaniguchi-dev/common-react';
import { Box, Button } from '@primer/react';
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
        keys: ['name', 'description', 'tags'] as Array<keyof IStaticBlogPost>,
        distance: 0.8,
      }),
      []
    ),
    search: searchValue,
    limit,
  });
  return (
    <Card>
      <Card.Header>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <div>Posts</div>
          <div>
            <ListFilters
              defaultSearchValue={defaultSearchValue}
              onSearchChange={handleSearchChange}
            />
          </div>
        </Box>
      </Card.Header>
      <Card.Body p={0}>
        {posts.map((post) => (
          <Card.Row p={3} key={post.slug}>
            <StaticBlogPost
              blog={post as unknown as IStaticBlogPost}
            ></StaticBlogPost>
          </Card.Row>
        ))}
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
  const logger = new CommonLogger();

  const blogPaths = await getMarkdownFiles(BLOG_PATH);

  logger.log('blog-paths: ', blogPaths);

  const blogPostsMetaData = await getBlogPostsMetaData(blogPaths);

  verifyBlogPostMetaData(blogPostsMetaData);

  return {
    props: {
      posts: blogPostsMetaData,
    },
  };
}
