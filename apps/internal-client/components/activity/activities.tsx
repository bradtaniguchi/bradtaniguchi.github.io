import { Timeline } from '@primer/react';
import { Activity } from 'apps/internal-client/models/activity';
import { memo } from 'react';
import { GithubPublicActivity } from './github-public-activity';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActivitiesProps {
  activities: Activity[];
}

export const Activities = memo(function Activities(props: ActivitiesProps) {
  if (!props.activities.length) return <div>No Timeline available</div>;
  return (
    <Timeline>
      {props.activities.map((activity) => (
        // TODO: add mapping for different types of activity
        <GithubPublicActivity key={activity.id} activity={activity} />
      ))}
    </Timeline>
  );
});
