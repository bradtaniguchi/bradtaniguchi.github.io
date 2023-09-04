import { readdir } from 'fs-extra';
import { join } from 'path';

/**
 * Returns an array of strings, represent the list of markdown files.
 * Will automatically add the directoryPath to the front of the filename
 */
export const getMarkdownFiles = (directoryPath: string): Promise<string[]> =>
  readdir(directoryPath).then((fileName) =>
    fileName
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => join(directoryPath, fileName))
  );
