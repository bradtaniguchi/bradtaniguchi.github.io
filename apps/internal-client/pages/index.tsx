import { Box } from '@primer/react';

export function Index() {
  return (
    <Box display="grid" gridGap={3} gridTemplateColumns="1fr 1fr 1fr">
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        p={3}
      >
        <aside>Profile info goes here</aside>
      </Box>

      <Box gridColumn="span 2">
        <Box gridColumn="span 2">
          <Box display="grid" gridGap={3} gridTemplateColumns="1fr 1fr">
            <Box
              borderColor="border.default"
              borderWidth={1}
              borderStyle="solid"
              p={3}
              gridColumn="span 2"
            >
              README goes here
            </Box>
            <Box
              borderColor="border.default"
              borderWidth={1}
              borderStyle="solid"
              p={3}
            >
              Projects
            </Box>
            <Box
              borderColor="border.default"
              borderWidth={1}
              borderStyle="solid"
              p={3}
            >
              Snippets
            </Box>
            <Box
              borderColor="border.default"
              borderWidth={1}
              borderStyle="solid"
              p={3}
            >
              Blog
            </Box>
            <Box
              borderColor="border.default"
              borderWidth={1}
              borderStyle="solid"
              p={3}
            >
              About
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Index;
