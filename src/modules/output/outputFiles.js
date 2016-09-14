import errorHandler from '../errorHandler';
import { makeDirectories } from './directories';
import { validateFiles } from '../validation';

export default async function outputFiles(files, answers, options) {
  try {
    validateFiles(files);

    for (const file of files) {
      await makeDirectories(options.project, file.path);

      // Resolve questions transformation
      // Handlebars OR JSON
      // Write file
    }
  } catch (err) {
    errorHandler('writing files', err);
  }
}
