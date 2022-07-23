import { RestEndpointMethodTypes } from '@octokit/rest';

type GithubListPublicEventData =
  RestEndpointMethodTypes['activity']['listPublicEvents']['response']['data'][0];

/**
 * Interface representing public github activity
 */
export interface GithubPublicActivity extends GithubListPublicEventData {
  type: 'github-public-activity';
}
