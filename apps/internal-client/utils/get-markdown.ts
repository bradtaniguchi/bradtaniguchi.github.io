import createDOMPurify from 'dompurify';
import { readFile } from 'fs/promises';
import { JSDOM } from 'jsdom';
import { marked } from 'marked';

/**
 * Returns the parsed markdown as an HTML string from the given path.
 */
export const getMarkdown = async (path: string) => {
  const rawFileContent = await readFile(path);
  const unsafeMarkdown = marked.parse(rawFileContent.toString());
  const DOMPurify = createDOMPurify(new JSDOM().window as unknown as Window);
  return DOMPurify.sanitize(unsafeMarkdown);
};
