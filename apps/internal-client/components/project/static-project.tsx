import { Box, Label, Text } from '@primer/react';
import { StaticProject as IStaticProject } from '../../models/project';
import { memo } from 'react';
import { DateTime } from 'luxon';

export interface StaticProjectProps {
  project: IStaticProject;
}

/**
 * Static project UI component
 */
export const StaticProject = memo(function StaticProject(
  props: StaticProjectProps
) {
  return (
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
        <Text as="h4">{props.project.title}</Text>
        <Text as="p">{props.project.description}</Text>
      </Box>

      <Box display="flex" flexDirection="row" sx={{ gap: '4px' }}>
        {/* Project Tags */}
        <Box
          display="flex"
          flexDirection={['column', 'row']}
          alignItems="center"
          sx={{ gap: '4px' }}
        >
          {(props.project.tags || []).map((tag) =>
            // TODO: Make clickable for filtering updates
            typeof tag === 'string' ? (
              <Label variant="accent" key={tag}>
                {tag}
              </Label>
            ) : (
              <Label variant={tag.color} key={tag.name}>
                {tag.name}
              </Label>
            )
          )}
        </Box>

        {props.project.date && (
          <Box title={props.project.date}>
            {DateTime.fromISO(props.project.date).toFormat(
              // TODO: local format
              'yyyy-MM-dd'
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
});
