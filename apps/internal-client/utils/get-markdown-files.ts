import { readdir } from 'fs-extra';

/**
 * Returns an array of strings, represent the list of markdown files.
 * Will automatically add the directoryPath to the front of the filename
 */
export const getMarkdownFiles = (directoryPath: string): Promise<string[]> =>
  readdir(directoryPath).then((fileName) =>
    fileName
      .filter((fileName) => fileName.endsWith('.md'))
      .map((fileName) => `${directoryPath}${fileName}`)
  );
