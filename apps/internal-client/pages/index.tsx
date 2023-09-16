import { Octokit, RestEndpointMethodTypes } from '@octokit/rest';
import { MarkGithubIcon, TabExternalIcon } from '@primer/octicons-react';
import { Box, LinkButton, StyledOcticon } from '@primer/react';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiCodewars, SiReplit } from 'react-icons/si';
import { Activities } from '../components/activity/activities';
import { DevToPost } from '../components/blog/dev-to-post';
import { StaticBlogPost } from '../components/blog/static-blog-post';
import { Card } from '../components/core/card';
import { GITHUB_URL } from '../constants/github-url';
import { Activity } from '../models/activity';
import {
  DevMigratedPost,
  isMigratedDevPost,
} from '../models/dev-migrated-post';
import { StaticBlogPost as IStaticBlogPost } from '../models/static-blog-post';
import { getLatestPosts } from '../utils/get-latest-post';
import { getMarkdown } from '../utils/get-markdown';
import { withHeaders } from '../utils/with-headers';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IndexProps {
  /**
   * The README contents
   */
  readme: string;
  /**
   * The list of activities to show
   */
  activities: Activity[];
  /**
   * The github user data loaded from the API
   */
  user: RestEndpointMethodTypes['users']['getByUsername']['response']['data'];
  /**
   * The latest 5 blog posts
   */
  latestPosts: Array<IStaticBlogPost | DevMigratedPost>;
}

export default function Index(props: IndexProps) {
  return (
    <Box
      display="grid"
      gridGap={3}
      gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
    >
      <Box
        display="flex"
        gridColumn={['span 1', 'span 2', 'span 1']}
        flexDirection="column"
        sx={{ gap: '3' }}
      >
        <Card>
          <Card.Body>
            <aside>
              <div className="image-wrapper">
                <Image
                  width={260}
                  height={260}
                  src="/img/github-avatar.jpg"
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
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{ gap: '2' }}
                      >
                        <FaGithub /> <div>bradtaniguchi</div>
                        <TabExternalIcon />
                      </Box>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/brad_taniguchi"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter handle url"
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{ gap: '2' }}
                      >
                        <FaTwitter />
                        <div>@brad_taniguchi</div>
                        <TabExternalIcon />
                      </Box>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/bradley-taniguchi-62a052104"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn profile url"
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{ gap: '2' }}
                      >
                        <FaLinkedin /> <div>LinkedIn</div>
                        <TabExternalIcon />
                      </Box>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://www.codewars.com/users/bradtaniguchi"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Codewars profile url"
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{ gap: '2' }}
                      >
                        <SiCodewars /> <div>Codewars</div>
                        <TabExternalIcon />
                      </Box>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://replit.com/@bradtaniguchi"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Replit profile url"
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        sx={{ gap: '2' }}
                      >
                        <SiReplit /> <div>Replit</div>
                        <TabExternalIcon />
                      </Box>
                    </Link>
                  </li>
                </ul>
              </section>
            </aside>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header display="flex">
            <Box flexGrow="100">Latest Blog Post</Box>
            <Box>
              <LinkButton href="/blog">All Posts</LinkButton>
            </Box>
          </Card.Header>
          <Card.Body>
            <Box
              display="flex"
              flexDirection={['column']}
              alignItems="center"
              sx={{ gap: '6' }}
            >
              {props.latestPosts.map((post) =>
                isMigratedDevPost(post) ? (
                  <div key={post.slug}>
                    <DevToPost blog={post} displayMode="column" />
                  </div>
                ) : (
                  <div key={post.slug}>
                    <StaticBlogPost blog={post} displayMode="column" />
                  </div>
                )
              )}
            </Box>
          </Card.Body>
        </Card>
      </Box>

      <Box gridColumn={['span 1', 'span 2', 'span 2']}>
        <Box gridColumn="span 2">
          <Box display="grid" gridGap={3}>
            <Card gridColumn="span 2">
              <Card.Header display="flex">README</Card.Header>
              <Card.Body>
                <div>
                  This website acts as my portfolio and blog. It is currently
                  under construction and will be continually updated. This is
                  actually the third version of my portfolio site and is used as
                  a test-bed for developing things with new technologies. To
                  learn more about how this project was built, checkout the{' '}
                  <Link href="/about">about</Link> page.
                </div>
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
                <div dangerouslySetInnerHTML={{ __html: props.readme }}></div>
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

  const [readme, { data: user }, githubActivities, latestPosts] =
    await Promise.all([
      getMarkdown('README.md'),
      octokit.users.getByUsername({
        headers: withHeaders(),
        username: 'bradtaniguchi',
      }),
      octokit.activity
        .listPublicEventsForUser({
          headers: withHeaders(),
          username: 'bradtaniguchi',
        })
        .then(({ data }) =>
          data
            .map(({ id, type, actor, repo, created_at, payload }) => ({
              // explicitly provide properties to save on some data sending over to the
              // client
              id,
              type,
              actor,
              repo,
              created_at,
              payload,
              internalType: 'github-public-activity' as const,
            }))
            .sort((a, b) => {
              if (!a.created_at || !b.created_at) return 0;
              return a.created_at > b.created_at ? -1 : 1;
            })
        ),

      getLatestPosts(),
    ]);

  return {
    props: {
      readme,
      activities: [...githubActivities],
      user,
      latestPosts,
    },
  };
}
