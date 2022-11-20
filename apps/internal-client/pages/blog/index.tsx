import { CommonLogger } from '@bradtaniguchi-dev/common';
import { GetStaticPropsResult } from 'next';
import { Card } from '../../components/core/card';
import { BLOG_PATH } from '../../constants/blog-path';
import {
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from '../../utils/get-blog-post-meta-data';
import { getMarkdownFiles } from '../../utils/get-markdown-files';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogProps {}

export default function Blog(props: BlogProps) {
  return (
    <Card>
      <Card.Header>Projects</Card.Header>
      <Card.Body>
        <p>
          Blog is not available yet! I will be migrating over previous posts and
          adding a few new ones over time.
        </p>
        <pre>{JSON.stringify(props, null, 2)}</pre>
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
      projects: blogPostsMetaData,
    },
  };
}
