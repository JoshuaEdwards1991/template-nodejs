import os from 'os';
import path from 'path';

export default function (project, filePath) {
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

  return `${project}${path.sep}${absolutePath.slice(currentDirectory.length)}`;
}
