import { Box } from '@primer/react';

export interface BlogLayoutProps {
  aside: React.ReactNode;
  children: React.ReactNode;
}

/**
 * The BlogLayout component handles displaying blog posts
 * in a sensible page format that also handles responsiveness.
 */
export const BlogLayout = function BlogLayout(props: BlogLayoutProps) {
  return (
    <Box
      display="grid"
      gridGap={3}
      gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
    >
      <Box gridColumn={['span 1', 'span 2', 'span 1']}>{props.aside}</Box>

      <Box gridColumn="span 2">{props.children}</Box>
    </Box>
  );
};
