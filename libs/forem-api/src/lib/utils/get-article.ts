import axios from 'axios';
import { DevToPost } from '../models/post';

/**
 * Returns the article with the given ID.
 *
 * This is a non-documented endpoint from the API, so it might change in the future.
 *
 * @returns Array of articles for the given params.
 */
export async function getArticle(id: number): Promise<DevToPost> {
  const res = await axios.get<DevToPost>(`https://dev.to/api/articles/${id}`);

  // return DevToPostSchema.parse(res.data);
  return res.data;
}
