import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { Card } from '../../../components/core/card';
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import {
  DevToPost,
  getArticle,
  getArticlesFromCache,
} from '@bradtaniguchi-dev/forem-api';
import { Box, LinkButton, Text } from '@primer/react';

export interface DevToBlogPostProps {
  blogPost: DevToPost;
}

/**
 * Page shown for an individual blog post, but from the dev.to API.
 */
export default function DevToBlogPost({ blogPost }: DevToBlogPostProps) {
  return (
    <Card>
      <Card.Header
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Text as="h2" fontSize="inherit" margin={0}>
          {blogPost.title}
        </Text>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ gap: '16px' }}
        >
          <LinkButton
            href={blogPost.url}
            target="_blank"
            rel="noreferrer"
            aria-label="dev.to article"
          >
            Read on dev.to
          </LinkButton>
          <Link href="/blog" aria-label="Back to Blog List">
            <FaArrowLeft />
          </Link>
        </Box>
      </Card.Header>
      <Card.Body>
        <div dangerouslySetInnerHTML={{ __html: blogPost.body_html }}></div>
      </Card.Body>
      <Card.Body></Card.Body>
    </Card>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const devToPosts = await getArticlesFromCache({
    username: 'bradtaniguchi',
  });

  return {
    // sanity casting, as the API shouldn't be able to get through with a string
    paths: devToPosts
      .map(({ id }) => String(id))
      .map((id) => ({
        params: {
          id,
        },
      })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<DevToBlogPostProps>> {
  const { id: idStr } = params;

  if (Array.isArray(idStr)) return;

  const id = Number(idStr);
  if (isNaN(id)) return;

  const blogPost = await getArticle(id);

  return {
    props: {
      blogPost,
    },
  };
}
