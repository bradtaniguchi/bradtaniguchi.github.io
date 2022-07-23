import { MarkGithubIcon } from '@primer/octicons-react';
import { Box, StyledOcticon, Timeline } from '@primer/react';
import { GithubPublicActivity as GithubPublicActivityType } from 'apps/internal-client/models/github-public-activity';
import { memo } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GithubPublicActivityProps {
  activity: GithubPublicActivityType;
}

/**
 * A component representing github public activity.
 */
export const GithubPublicActivity = memo(function GithubPublicActivity(
  props: GithubPublicActivityProps
) {
  return (
    <Timeline.Item>
      <Timeline.Badge>
        <StyledOcticon icon={MarkGithubIcon} />
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
            {props.activity.actor.login}
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
            project {props.activity.repo.name}
          </Box>
          <Box as="span" color="fg.muted">
            on {props.activity.created_at}
          </Box>
        </Box>
      </Timeline.Body>
    </Timeline.Item>
  );
});
