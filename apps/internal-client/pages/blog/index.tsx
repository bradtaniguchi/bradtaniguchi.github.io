import { CommonLogger } from '@bradtaniguchi-dev/common';
import { GetStaticPropsResult } from 'next';
import { Card } from '../../components/core/card';
import { BLOG_PATH } from '../../constants/blog-path';
import {
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from '../../utils/get-blog-post-meta-data';
import { getMarkdownFiles } from '../../utils/get-markdown-files';
import { StaticBlogPost as IStaticBlogPost } from '../../models/static-blog-post';
import { StaticBlogPost } from '../../components/blog/static-blog-post';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BlogProps {
  blogPosts: Array<Partial<IStaticBlogPost>>;
}

export default function Blog(props: BlogProps) {
  return (
    <Card>
      <Card.Header>Projects</Card.Header>
      <Card.Body p={0}>
        {props.blogPosts.map((project) => (
          <Card.Row p={3} key={project.slug}>
            <StaticBlogPost
              blog={project as unknown as IStaticBlogPost}
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
      blogPosts: blogPostsMetaData,
    },
  };
}
