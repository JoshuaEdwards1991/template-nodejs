import fs from 'fs';
import { logCreate } from './progress';
import path from 'path';
import sanitiseRelativePath from './path';

const mkdir = function mkdir(directory, mode = 0o777) {
  return new Promise((resolve, reject) => {
    fs.mkdir(directory, mode, (err) => {
      err ? reject(err) : resolve();
    });
  });
};

export function getDirectoriesToMake(project, filePath) {
  return sanitiseRelativePath(project, filePath)
    .split(path.sep)
    .slice(0, -1)
    .map((part, index, allParts) => allParts.slice(0, index + 1).join(path.sep));
}

export async function makeDirectories(project, filePath) {
  const directories = getDirectoriesToMake(project, filePath);

  for (const directory of directories) {
    try {
      await mkdir(directory);
      logCreate(directory);
    } catch (err) {
      if (!err.message.startsWith('EEXIST')) throw err;
    }
  }
}
