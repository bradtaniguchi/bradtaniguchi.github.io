import { Box, Label, Text } from '@primer/react';
import { DevMigratedPost } from 'apps/internal-client/models/dev-migrated-post';
import Dayjs from 'dayjs';
import Link from 'next/link';
import { memo } from 'react';

export interface DevToPostProps {
  blog: DevMigratedPost;
}

/**
 * Dev Blog UI component
 */
export const DevToPost = memo(function DevToPost(props: DevToPostProps) {
  return (
    <Link
      href={`blog/${props.blog.slug}`}
      style={{ textDecoration: 'inherit' }}
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ gap: '8px' }}
        >
          <Text as="h4">{props.blog.title}</Text>
          <Text as="p">{props.blog.description}</Text>
        </Box>

        <Box display="flex" flexDirection="row" sx={{ gap: '4px' }}>
          {/* Project Tags */}
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
