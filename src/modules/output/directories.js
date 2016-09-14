import os from 'os';
import path from 'path';

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
