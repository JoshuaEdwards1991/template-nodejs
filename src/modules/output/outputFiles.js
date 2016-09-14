import errorHandler from '../errorHandler';
import path from 'path';
import { validateFiles } from '../validation';
import { writeFile } from './fileSystem';

export default async function writeFiles(files) {
  try {
    validateFiles(files);

    for (const file of files) {
      await writeFile(path.resolve(file.path), file.content);
    }

  } catch (err) {
    errorHandler('writing files', err);
  }
}
