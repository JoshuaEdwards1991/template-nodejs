import fs from 'fs';

export function writeFile(file, data, options = {}) {
  return new Promise((resolve) => {
    fs.writeFile(file, data, options, err => resolve(err));
  });
}

export function mkdir(path, mode = 0o777) {
  return new Promise((resolve) => {
    fs.mkdir(path, mode, err => resolve(err));
  });
}
