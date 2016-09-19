import fs from 'fs';
import Handlebars from 'handlebars';
import { logCreate } from './progress';
import sanitiseRelativePath from './path';

export function createFile(data, templateString) {
  if (templateString) {
    const template = Handlebars.compile(templateString);
    return template(data);
  }

  return `${JSON.stringify(data, null, 2)}\n`;
}

export function writeFile(filePath, data, project) {
  return new Promise((resolve, reject) => {
    const relativePath = sanitiseRelativePath(project, filePath);

    fs.writeFile(relativePath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        logCreate(relativePath);
        resolve();
      }
    });
  });
}
