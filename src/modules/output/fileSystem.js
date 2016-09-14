import fs from 'fs';

export function writeFile(file, data, options = {}) {
  return new Promise((resolve) => {
    fs.writeFile(file, data, options, err => resolve(err));
  });
}
