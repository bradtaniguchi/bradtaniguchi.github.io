import axios from 'axios';
import { DevToPost, DevToPostSchema } from '../models/post';

const articleCache = new Map<number, Promise<DevToPost>>();

/**
 * Returns the article with the given ID.
 *
 * This is a non-documented endpoint from the API, so it might change in the future.
 *
 * @returns Array of articles for the given params.
 */
export async function getArticle(
  id: number,
  options?: {
    /**
     * Skip using cache for this request
     */
    noCache?: boolean;
  }
): Promise<DevToPost> {
  const noCache = !!options?.noCache;

  if (!noCache && articleCache.has(id)) {
    const request = axios
      .get(`https://dev.to/api/articles/${id}`)
      .then((res) => DevToPostSchema.parse(res.data));

    articleCache.set(id, request);
  }

  return articleCache.get(id) as Promise<DevToPost>;
}
