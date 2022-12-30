import { Box, Label, Text } from '@primer/react';
import Dayjs from 'dayjs';
import Link from 'next/link';
import { memo } from 'react';
import { StaticBlogPost as IStaticBlogPost } from '../../models/static-blog-post';
import { BlogPostDisplayMode } from './blog-post-display-mode';

export interface StaticBlogPostProps {
  blog: IStaticBlogPost;
  /**
   * The display mode to show the card with.
   * Defaults to row.
   */
  displayMode?: BlogPostDisplayMode;
}

/**
 * Static blog UI component
 */
export const StaticBlogPost = memo(function StaticBlogPost(
  props: StaticBlogPostProps
) {
  const displayMode = props.displayMode || 'row';

  return (
    <Link
      href={`blog/${props.blog.slug}`}
      style={{ textDecoration: 'inherit' }}
    >
      <Box
        display="flex"
        flexDirection={['column', 'column', displayMode]}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection={['column', 'column', displayMode]}
          alignItems="center"
          sx={{ gap: '8px' }}
        >
          <Text as="h4" margin={0}>
            {props.blog.title}
          </Text>
          <Text as="p">{props.blog.description}</Text>
        </Box>

        <Box
          display="flex"
          flexDirection={['column', 'column', displayMode]}
          alignItems="center"
          sx={{ gap: '4px' }}
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            sx={{ gap: '4px' }}
          >
            {(props.blog.tags || []).map((tag) => (
              <Label variant="accent" key={tag}>
                {tag}
              </Label>
            ))}
          </Box>

          {props.blog.date && (
            <Box title={props.blog.date}>
              {Dayjs(props.blog.date).format('YYYY-MM-DD')}
            </Box>
          )}
        </Box>
      </Box>
    </Link>
  );
});
