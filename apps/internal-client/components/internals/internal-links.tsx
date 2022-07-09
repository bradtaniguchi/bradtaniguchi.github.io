import { Box, NavList, Text } from '@primer/react';
import { memo } from 'react';
import { GraphIcon, BookIcon } from '@primer/octicons-react';

/**
 * Display component for the internal-links
 */
export const InternalLinks = memo(function InternalLinks() {
  return (
    <Box borderColor="border.default" borderWidth={1} borderStyle="solid" p={3}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderBottomStyle="solid"
      >
        <Text as="h5" m={0}>
          External Links
        </Text>
      </Box>

      <Text as="p">Statically generated sub-project references.</Text>

      <Text as="div">
        <NavList>
          <NavList.Item href="nx-graph">
            <NavList.LeadingVisual>
              <GraphIcon />
            </NavList.LeadingVisual>
            nx-graph
          </NavList.Item>
          <NavList.Item href="storybooks">
            <NavList.LeadingVisual>
              <BookIcon />
            </NavList.LeadingVisual>
            storybooks
          </NavList.Item>
        </NavList>
      </Text>
    </Box>
  );
});
