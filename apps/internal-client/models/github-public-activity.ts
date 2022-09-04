import { RestEndpointMethodTypes } from '@octokit/rest';

type GithubListPublicEventData =
  RestEndpointMethodTypes['activity']['listPublicEvents']['response']['data'][0];

/**
 * Interface representing public github activity
 */
export interface GithubPublicActivity
  extends Pick<
    GithubListPublicEventData,
    'id' | 'type' | 'actor' | 'repo' | 'created_at' | 'payload'
  > {
  internalType: 'github-public-activity' | string;
}
