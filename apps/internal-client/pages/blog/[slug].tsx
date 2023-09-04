import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Link from 'next/link';
import { join } from 'path';
import { FaArrowLeft } from 'react-icons/fa';
import { Card } from '../../components/core/card';
import { BLOG_PATH } from '../../constants/blog-path';
import { StaticBlogPost } from '../../models/static-blog-post';
import {
  getBlogPostMetaData,
  getBlogPostsMetaData,
  verifyBlogPostMetaData,
} from '../../utils/get-blog-post-meta-data';
import { getMarkdown } from '../../utils/get-markdown';
import { getMarkdownFiles } from '../../utils/get-markdown-files';

export interface BlogPostProps {
  blogPost: StaticBlogPost;
  markdown: string;
}

export default function BlogPost({ markdown, blogPost }: BlogPostProps) {
  return (
    <Card>
      <Card.Header
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <span>{blogPost.title}</span>

        <span>
          <Link href="/blog" aria-label="Back to Blog List">
            <FaArrowLeft />
          </Link>
        </span>
      </Card.Header>
      {/* TODO: add meta-data information here in a "sub-card"? */}
      <Card.Body>
        {/* TODO: update/move to about? */}
        <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
      </Card.Body>
      {/* TODO: add social media "shares" here */}
    </Card>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const projectPaths = await getMarkdownFiles(BLOG_PATH);

  const blogPostsMetaData = await getBlogPostsMetaData(projectPaths);

  verifyBlogPostMetaData(blogPostsMetaData);

  return {
    paths: blogPostsMetaData.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext): Promise<GetStaticPropsResult<BlogPostProps>> {
  const { slug } = params as { slug: string };

  const filePath = join(BLOG_PATH, `${slug}.md`);
  const [blogPost, markdown] = await Promise.all([
    getBlogPostMetaData(filePath),
    getMarkdown(filePath),
  ]);

  return {
    props: {
      blogPost,
      markdown,
    },
  };
}
