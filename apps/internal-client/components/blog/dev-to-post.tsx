import { Box, Label, Text } from '@primer/react';
import { DevMigratedPost } from '../../models/dev-migrated-post';
import Dayjs from 'dayjs';
import Link from 'next/link';
import { memo } from 'react';
import { BlogPostDisplayMode } from './blog-post-display-mode';

export interface DevToPostProps {
  blog: DevMigratedPost;
  /**
   * The display mode to show the card with.
   * Defaults to row.
   */
  displayMode?: BlogPostDisplayMode;
}

/**
 * Dev Blog UI component
 */
export const DevToPost = memo(function DevToPost(props: DevToPostProps) {
  const displayMode = props.displayMode || 'row';

  return (
    <Link
      href={`blog/dev/${props.blog.id}?slug=${props.blog.slug}`}
      style={{ textDecoration: 'inherit' }}
    >
      <Box
        display="flex"
        flexDirection={displayMode}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection={displayMode}
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
          flexDirection={displayMode}
          alignItems="center"
          sx={{ gap: '4px' }}
        >
          <Box
            display="flex"
            flexDirection={['column', 'row']}
            alignItems="center"
            sx={{ gap: '4px' }}
          >
            {(props.blog.tags || []).map((tag) => (
              <Label variant="accent" key={tag}>
                {tag}
              </Label>
            ))}
            <Label variant="success">dev.to</Label>
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
