import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { Card } from '../../components/core/card';
import { StaticBlogPost } from '../../models/static-blog-post';

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
          <Link href="/projects" aria-label="Back to Projects List">
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
