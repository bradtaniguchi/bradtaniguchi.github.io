import { CommonLogger } from '@bradtaniguchi-dev/common';
import { GetStaticPropsResult } from 'next';
import { StaticBlogPost } from '../../components/blog/static-blog-post';
import { Card } from '../../components/core/card';
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
  return (
    <Card>
      <Card.Header>Posts</Card.Header>
      <Card.Body p={0}>
        {props.posts.map((post) => (
          <Card.Row p={3} key={post.slug}>
            <StaticBlogPost
              blog={post as unknown as IStaticBlogPost}
            ></StaticBlogPost>
          </Card.Row>
        ))}
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
