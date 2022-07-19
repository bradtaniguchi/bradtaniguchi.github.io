import { Box, Text } from '@primer/react';

/**
 * The profile component is shown on
 * the index page, on the left, and
 * follows a similar design as the actual
 * github profile.
 *
 * 1. Shows profile picture
 * 2. Provides links to other sites
 */
export default function Profile() {
  return (
    <Box display="flex">
      <div>Image goes here</div>
      <Text as="h5" m={0}>
        Brad Taniguchi
      </Text>
      <Text as="p">
        {/* TODO: get from github profile */}
        TypeScript developer, always trying to learn new things.
      </Text>
    </Box>
  );
}
