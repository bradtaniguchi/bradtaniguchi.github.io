import { MarkGithubIcon } from '@primer/octicons-react';
import { Box, StyledOcticon } from '@primer/react';
import Link from 'next/link';
import { useContext } from 'react';
import { Activities } from '../components/activity/activities';
import { Card } from '../components/core/card';
import { GITHUB_URL } from '../constants/github-url';
import { Activity } from '../models/activity';
import { getMarkdown } from '../utils/get-markdown';
import { LoggerProvider } from '../utils/logger';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IndexProps {
  /**
   * The README contents
   */
  readme: string;

  activities: Activity[];
}

export default function Index(props: IndexProps) {
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
              <Card.Header display="flex">README</Card.Header>
              <Card.Body>
                <p>
                  This website acts as my portfolio and blog. Its currently
                  under construction and will be continually updated. This is
                  actually the third version of my portfolio site and is used as
                  a test-bed for developing things with new technologies. To
                  learn more about how this project was built, checkout the{' '}
                  <Link href="about">about</Link> page.
                </p>
              </Card.Body>
            </Card>
            <Card gridColumn="span 2">
              <Card.Header display="flex">
                <Box flexGrow="100">Latest Activity</Box>
                {/* TODO: add client-side filtering */}
                {/* TODO: add support for RSS-feed */}
                {/* <Box>
                  <RssIcon></RssIcon>
                </Box> */}
              </Card.Header>
              <Card.Body>
                <Activities activities={props.activities} />
              </Card.Body>
            </Card>
            <Card gridColumn="span 2">
              <Card.Header display="flex">
                <Box flexGrow="100">Github README</Box>
                <Box>
                  <a href={GITHUB_URL}>
                    <StyledOcticon
                      icon={MarkGithubIcon}
                      size={16}
                      sx={{ mr: 2 }}
                    />
                  </a>
                </Box>
              </Card.Header>
              <Card.Body>
                {/* TODO: update/move to about? */}
                <div dangerouslySetInnerHTML={{ __html: props.readme }}></div>
              </Card.Body>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export async function getStaticProps(): Promise<{
  props: IndexProps;
}> {
  const readme = await getMarkdown('README.md');
  return {
    props: {
      readme,
      activities: [],
    },
  };
}
