<<<<<<< HEAD
import { Box, Timeline } from '@primer/react';
import { useContext } from 'react';
import { ActivityProject } from '../components/activity/activity-project';
import { Card } from '../components/core/card';
import { LoggerProvider } from '../utils/logger';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IndexProps {}

export function Index(props: IndexProps) {
  const logger = useContext(LoggerProvider);
  logger.log('[Index]', props);
  return (
    <Box display="grid" gridGap={3} gridTemplateColumns="1fr 1fr 1fr">
      <Box>
        <Box
          borderColor="border.default"
          borderWidth={1}
          borderStyle="solid"
          p={3}
        >
          <aside>Profile info goes here</aside>
        </Box>
      </Box>

      <Box gridColumn="span 2">
        <Box gridColumn="span 2">
          <Box display="grid" gridGap={3} gridTemplateColumns="1fr">
            <Card gridColumn="span 2">
              <Card.Header>README</Card.Header>
              <Card.Body>README goes here</Card.Body>
            </Card>
            <Card>
              <Card.Header display="flex">
                <Box flexGrow="100">Latest Activity</Box>
                {/* TODO: add client-side filtering */}
                {/* TODO: add support for RSS-feed */}
                {/* <Box>
                  <RssIcon></RssIcon>
                </Box> */}
              </Card.Header>
              <Card.Body>
                <Timeline>
                  {/* TODO make dynamic */}
                  <ActivityProject
                    project={{ name: 'Test Project', createdAt: new Date() }}
                  />
                  <ActivityProject
                    project={{ name: 'Test Project', createdAt: new Date() }}
                  />
                  <ActivityProject
                    project={{ name: 'Test Project', createdAt: new Date() }}
                  />
                  <ActivityProject
                    project={{ name: 'Test Project', createdAt: new Date() }}
                  />
                  <ActivityProject
                    project={{ name: 'Test Project', createdAt: new Date() }}
                  />
                  <ActivityProject
                    project={{ name: 'Test Project', createdAt: new Date() }}
                  />
                </Timeline>
              </Card.Body>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
=======
import { getMarkdown } from '../utils/get-markdown';

export function Index(props: { content: string }) {
  console.log('props', props);
  return <div dangerouslySetInnerHTML={{ __html: props.content }}></div>;
>>>>>>> main
}

export default Index;

export async function getStaticProps() {
  const content = await getMarkdown('README.md');
  return {
    props: {
      content,
    },
  };
}
