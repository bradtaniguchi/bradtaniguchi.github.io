import { MarkGithubIcon } from '@primer/octicons-react';
import { Box, StyledOcticon, Timeline } from '@primer/react';
import { GithubPublicActivity as GithubPublicActivityType } from '../../models/github-public-activity';
import { memo } from 'react';
import { DateTime } from 'luxon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GithubPublicActivityProps {
  activity: GithubPublicActivityType;
}

const GithubPublicActivityLogin = (props: GithubPublicActivityProps) => (
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
);

const GithubPublicActivityRepo = (props: GithubPublicActivityProps) => (
  <Box
    as="span"
    sx={{
      fontWeight: 'bold',
      color: 'fg.default',
      mr: 1,
    }}
  >
    {props.activity.repo.name}
  </Box>
);

const GithubPublicActivityTime = (props: GithubPublicActivityProps) => (
  <Box as="span" color="fg.muted">
    <span title={props.activity.created_at}>
      on{' '}
      {DateTime.fromISO(props.activity.created_at).toFormat(
        // TODO: local format
        'yyyy-MM-dd'
      )}
    </span>
  </Box>
);
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
        {(() => {
          switch (props.activity.type) {
            case 'CreateEvent':
              return (
                <Box sx={{ display: 'inline' }}>
                  <GithubPublicActivityLogin activity={props.activity} />
                  {(() => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if ((props.activity.payload as any).ref_type === 'branch')
                      return 'created branch on ';
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if ((props.activity.payload as any).ref_type === 'branch')
                      return 'created tag on ';
                    return 'updated ';
                  })()}
                  <GithubPublicActivityRepo activity={props.activity} />
                  <GithubPublicActivityTime activity={props.activity} />
                </Box>
              );
            case 'DeleteEvent':
              return (
                <Box sx={{ display: 'inline' }}>
                  <GithubPublicActivityLogin activity={props.activity} />
                  {(() => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if ((props.activity.payload as any).ref_type === 'branch')
                      return 'deleted branch on ';
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    if ((props.activity.payload as any).ref_type === 'branch')
                      return 'deleted tag on ';
                    return 'deleted ';
                  })()}
                  <GithubPublicActivityRepo activity={props.activity} />
                  <GithubPublicActivityTime activity={props.activity} />
                </Box>
              );
            case 'PushEvent':
              return (
                <Box sx={{ display: 'inline' }}>
                  <GithubPublicActivityLogin activity={props.activity} />
                  pushed to{' '}
                  <GithubPublicActivityRepo activity={props.activity} />
                  <GithubPublicActivityTime activity={props.activity} />
                </Box>
              );
            case 'PullRequestEvent':
              return (
                <Box sx={{ display: 'inline' }}>
                  <GithubPublicActivityLogin activity={props.activity} />
                  pushed to{' '}
                  <GithubPublicActivityRepo activity={props.activity} />
                  <GithubPublicActivityTime activity={props.activity} />
                </Box>
              );
            default:
              // TODO: add types
              return (
                <Box sx={{ display: 'inline' }}>Unknown activity given</Box>
              );
          }
        })()}
      </Timeline.Body>
    </Timeline.Item>
  );
});
