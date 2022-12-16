import axios from 'axios';
import { DevToPost, DevToPostSchema } from '../models/post';

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
