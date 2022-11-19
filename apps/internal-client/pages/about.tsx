import { useConfig, useNxGraph } from '@bradtaniguchi-dev/common-react';
import { Box, Text } from '@primer/react';
import { InternalConfig } from '../components/internals/internal-config';
import { InternalLinks } from '../components/internals/internal-links';
import { InternalProjects } from '../components/internals/internal-projects';

export default function About() {
  const { config, configError, configLoading } = useConfig({
    path: 'config.json',
  });
  const { nxGraph, nxGraphError, nxGraphLoading } = useNxGraph({
    path: 'nx-graph/graph.json',
  });

  return (
    <Box
      display="grid"
      gridGap={3}
      gridTemplateColumns={['1fr', '1fr', '1fr 1fr']}
    >
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderStyle="solid"
        p={3}
      >
        <Box
          borderColor="border.default"
          borderWidth={1}
          borderBottomStyle="solid"
        >
          <Text as="h5" m={0}>
            About
          </Text>
        </Box>
        <p>
          This project is a next.js based app, primarily made to learn more
          about React, and improve SEO compared to the previous versions, built
          on Angular and Angular.js respectively.
        </p>
      </Box>

      <InternalConfig
        config={config}
        configError={configError}
        configLoading={configLoading}
      ></InternalConfig>

      <InternalLinks></InternalLinks>

      <InternalProjects
        nxGraphError={nxGraphError}
        nxGraphLoading={nxGraphLoading}
        nxGraph={nxGraph}
      ></InternalProjects>
    </Box>
  );
}
