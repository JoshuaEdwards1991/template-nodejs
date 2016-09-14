import fs from 'fs';
import { logCreate } from './progress';
import os from 'os';
import path from 'path';

const mkdir = function mkdir(directory, mode = 0o777) {
  return new Promise((resolve, reject) => {
    fs.mkdir(directory, mode, (err) => {
      err ? reject(err) : resolve();
    });
  });
};

export function getDirectoriesToMake(project, filePath) {
  let absolutePath;
  let currentDirectory;

  switch (os.platform) {
    case 'win32':
      absolutePath = path.win32.resolve(filePath);
      currentDirectory = `${path.win32.resolve()}${path.sep}`;
      break;
    default:
      absolutePath = path.resolve(filePath);
      currentDirectory = `${path.resolve()}${path.sep}`;
  }

  if (!absolutePath.includes(currentDirectory)) {
    throw new Error('file relative "path" parameter must be on or below the current directory.');
  }

  const pathParts = [project].concat(
    absolutePath
      .slice(currentDirectory.length)
      .split(path.sep)
      .slice(0, -1)
  );

  return pathParts.map((part, index, allParts) => allParts.slice(0, index + 1).join(path.sep));
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
