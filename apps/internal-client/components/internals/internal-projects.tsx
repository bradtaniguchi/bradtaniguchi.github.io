import { getProjectsByTarget } from '@bradtaniguchi-dev/common-react';
import { Box, NavList, Spinner, Text } from '@primer/react';
import { ProjectGraph } from 'nx/src/config/project-graph';
import { FileIcon } from '@primer/octicons-react';
import { memo, useMemo } from 'react';

export const InternalProjects = memo(function InternalProjects({
  nxGraphLoading,
  nxGraphError,
  nxGraph,
}: {
  nxGraphLoading?: boolean;
  nxGraphError: unknown;
  nxGraph: ProjectGraph;
}) {
  const projects = useMemo(
    () =>
      nxGraph
        ? getProjectsByTarget({ graph: nxGraph, target: 'typedoc' })
        : ['test'],
    [nxGraph]
  );

  return (
    <Box borderColor="border.default" borderWidth={1} borderStyle="solid" p={3}>
      <Box
        borderColor="border.default"
        borderWidth={1}
        borderBottomStyle="solid"
      >
        <Text as="h5" m={0}>
          Project Documentation
        </Text>
      </Box>
      <Text as="p">
        TypeDoc generated documentation for the different parts of the codebase
      </Text>
      <Text as="div">
        {(() => {
          if (nxGraphLoading) return <Spinner />;
          if (nxGraphError) return <Text>Error Loading nx-graph</Text>;
          return (
            <NavList>
              {projects.map((project) => (
                <NavList.Item href={`docs/${project}`} key={project}>
                  <NavList.LeadingVisual>
                    <FileIcon />
                  </NavList.LeadingVisual>
                  {`${project} TypeDocs`}
                </NavList.Item>
              ))}
            </NavList>
          );
        })()}
      </Text>
    </Box>
  );
});
