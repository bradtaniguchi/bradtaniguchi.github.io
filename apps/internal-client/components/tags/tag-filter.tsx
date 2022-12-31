import { Box, Label } from '@primer/react';
import Link from 'next/link';
import { memo } from 'react';

/**
 * Props for the tag-filter component
 */
export interface TagFilterProps {
  /**
   * The array of tags for the current page.
   *
   * Must be unique.
   */
  tags: string[];
  /**
   * The relative base URL to use for the tag links.
   * Will apply the query-param `tag` with the selected tag.
   */
  baseUrl: string;
}

/**
 * Tag filter component displays the given tags and allows the user to filter
 * against the list of tags. The component will update the URL with the selected
 * tag.
 */
export const TagFilter = memo(function TagFilter(props: TagFilterProps) {
  const { tags, baseUrl } = props;

  if (!tags || !tags.length) return null;

  return (
    <Box display="flex" sx={{ gap: '2' }}>
      {tags.map((tag) => {
        const url = `${baseUrl}?tag=${tag}`;
        return (
          <Link href={url.toString()} key={tag}>
            <Label variant="accent" size="large">
              {tag}
            </Label>
          </Link>
        );
      })}
    </Box>
  );
});
