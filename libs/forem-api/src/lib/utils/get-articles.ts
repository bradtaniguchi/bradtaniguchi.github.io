import axios from 'axios';
import { DevToPost, DevToPostSchema } from '../models/post';

/**
 * File level-cache for all articles being requested for.
 */
const articleCache = new Map<string, Promise<Array<DevToPost>>>();

/**
 * Returns the articles for the given username via a cache.
 *
 * This should be used if no pagination/settings are used. Otherwise
 * use `getArticles` directly.
 *
 * **note** this currently only returns the first page of results.
 */
export async function getArticlesFromCache(params: {
  /**
   * The username we are to get articles for.
   */
  username: string;
  /**
   * Skip using cache for this request
   */
  noCache?: boolean;
}): Promise<Array<DevToPost>> {
  const noCache = !!params?.noCache;
  const username = params.username.toLowerCase();

  if (!noCache || !articleCache.has(username)) {
    const request = getArticles({ username });

    articleCache.set(username, request);
  }

  return articleCache.get(username) as Promise<Array<DevToPost>>;
}

/**
 * Returns the list of published articles from dev.to
 *
 * Docs on API:
 * https://developers.forem.com/api/v1#tag/articles/operation/getArticles
 *
 * @returns Array of articles for the given params.
 */
export async function getArticles(params?: {
  page?: number;
  /**
   * Returns 30 by default, should be enough to start, but will need
   * to be expanded on later.
   */
  per_page?: number;
  tag_exclude?: string;
  tag?: string;
  username?: string;
  state?: 'fresh' | 'rising' | 'all';
  top?: number;
  collection_Id?: number;
}): Promise<Array<DevToPost>> {
  const res = await axios.get<Array<DevToPost>>('https://dev.to/api/articles', {
    params,
  });

  return res.data.map((post) => DevToPostSchema.parse(post));
}
