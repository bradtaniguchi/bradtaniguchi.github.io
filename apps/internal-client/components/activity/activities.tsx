import { Box, Button, Spinner, Timeline } from '@primer/react';
import { Activity } from '../../models/activity';
import { memo, useState } from 'react';
import { GithubPublicActivity } from './github-public-activity';
import { useHasMounted } from '@bradtaniguchi-dev/common-react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActivitiesProps {
  activities: Activity[];
}

/**
 * The activities shown on the page. Currently only includes github
 * activity.
 */
export const Activities = memo(function Activities(props: ActivitiesProps) {
  const [limit, setLimit] = useState<number>(5);
  const mounted = useHasMounted();

  const handleShowMoreOnClick = () => setLimit(limit + 5);

  // we only want to show this button if the limit is less than the total
  const showShowMore = limit < props.activities.length;

  // when in a server-environment, render a spinner for the quick duration
  // between hydration and rendering
  if (!mounted) return <Spinner />;

  if (!props.activities.length) return <div>No Timeline available</div>;

  return (
    <>
      <Timeline>
        {props.activities
          .map((activity) => (
            <GithubPublicActivity key={activity.id} activity={activity} />
          ))
          .slice(0, limit)}
      </Timeline>
      {showShowMore ? (
        <Box sx={{ margin: '8px' }}>
          <Button
            sx={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
            onClick={handleShowMoreOnClick}
          >
            <Box>{'Show More'}</Box>
          </Button>
        </Box>
      ) : // TODO: add some kind of "continuation" design to
      // show activity doesn't just stop here
      null}
    </>
  );
});
