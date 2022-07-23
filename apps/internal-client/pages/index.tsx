import { MarkGithubIcon } from '@primer/octicons-react';
import { Box, StyledOcticon, Timeline } from '@primer/react';
import Link from 'next/link';
import { useContext } from 'react';
import { ActivityProject } from '../components/activity/activity-project';
import { Card } from '../components/core/card';
import { GITHUB_URL } from '../constants/github-url';
import { getMarkdown } from '../utils/get-markdown';
import { LoggerProvider } from '../utils/logger';
import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import Image from 'next/image';
import { SiCodewars } from 'react-icons/si';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IndexProps {
  /**
   * The README contents
   */
  readme: string;
  /**
   * The github user data loaded from the API
   */
  user: RestEndpointMethodTypes['users']['getByUsername']['response']['data'];
}

export default function Index(props: IndexProps) {
  const logger = useContext(LoggerProvider);
  logger.log('[Index]', props);
  return (
    <Box display="grid" gridGap={3} gridTemplateColumns="1fr 1fr 1fr">
      <Box>
        <Card>
          <Card.Body>
            <aside>
              <div className="image-wrapper">
                <Image
                  layout="responsive"
                  width={260}
                  height={260}
                  src={props.user.avatar_url}
                  alt="Github profile picture"
                />
              </div>
              <h2>
                <Link
                  href={props.user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Github profile url"
                >
                  Brad Taniguchi
                </Link>
              </h2>
              <p>{props.user.bio}</p>

              <section>
                <h4>Socials</h4>
                <ul>
                  <li>
                    <Link
                      href={props.user.html_url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn url"
                    >
                      <a>
                        <FaGithub /> bradtaniguchi
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/brad_taniguchi"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter handle url"
                    >
                      <a>
                        <FaTwitter /> @brad_taniguchi
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/bradley-taniguchi-62a052104"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile url"
                    >
                      <a>
                        <FaLinkedin /> LinkedIn
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://www.codewars.com/users/bradtaniguchi"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Codewars profile url"
                    >
                      <a>
                        <SiCodewars /> Codewars
                      </a>
                      {/* TODO: add "open new tab" icon */}
                    </Link>
                  </li>
                </ul>
              </section>
            </aside>
          </Card.Body>
        </Card>
      </Box>

      <Box gridColumn="span 2">
        <Box gridColumn="span 2">
          <Box display="grid" gridGap={3}>
            <Card gridColumn="span 2">
              <Card.Header display="flex">README</Card.Header>
              <Card.Body>
                <p>
                  This website acts as my portfolio and blog. Its currently
                  under construction and will be continually updated. This is
                  actually the third version of my portfolio site and is used as
                  a test-bed for developing things with new technologies. To
                  learn more about how this project was built, checkout the{' '}
                  <Link href="/about">about</Link> page.
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
            <Card gridColumn="span 2">
              <Card.Header display="flex">
                <Box flexGrow="100">Github README</Box>
                <Box>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github profile URL"
                  >
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
  const octokit = new Octokit();
  const [readme, { data: user }] = await Promise.all([
    getMarkdown('README.md'),
    octokit.users.getByUsername({
      username: 'bradtaniguchi',
    }),
  ]);
  return {
    props: {
      readme,
      user,
    },
  };
}
