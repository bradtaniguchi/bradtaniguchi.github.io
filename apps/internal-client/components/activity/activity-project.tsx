import { ProjectIcon } from '@primer/octicons-react';
import { Box, StyledOcticon, Timeline } from '@primer/react';
import { memo } from 'react';
import { DateTime } from 'luxon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActivityProjectProps {
  project: {
    name: string;
    createdAt: Date;
  };
}

/**
 * An "created project" activity. Represents
 * the creation of a new github project/repo.
 */
export const ActivityProject = memo(function ActivityProject(
  props: ActivityProjectProps
) {
  return (
    <Timeline.Item>
      <Timeline.Badge>
        <StyledOcticon icon={ProjectIcon} />
      </Timeline.Badge>
      <Timeline.Body>
        <Box sx={{ display: 'inline' }}>
          <Box
            as="span"
            sx={{
              fontWeight: 'bold',
              color: 'fg.default',
              mr: 1,
            }}
          >
            Brad
          </Box>
          created a new {/* TODO: make a link to the actual project post */}
          <Box
            as="span"
            sx={{
              fontWeight: 'bold',
              color: 'fg.default',
              mr: 1,
            }}
          >
            project {props.project.name}
          </Box>
          <Box as="span" color="fg.muted">
            on{' '}
            {DateTime.fromJSDate(props.project.createdAt).toFormat(
              'yyyy-mm-dd'
            )}
          </Box>
        </Box>
      </Timeline.Body>
    </Timeline.Item>
  );
});
