import { RequestParameters } from '@octokit/auth-token/dist-types/types';

/**
 * Returns common headers using a PAT token for github
 */
export function withHeaders(): Partial<RequestParameters['headers']> {
  return {
    authorization: `token: ${process.env.GH_PRIVATE_KEY}`,
  };
}
