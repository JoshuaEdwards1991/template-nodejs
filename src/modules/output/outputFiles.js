import errorHandler from '../errorHandler';
import { makeDirectories } from './directories';
import { validateFiles } from '../validation';

export default async function outputFiles(files, answers, options) {
  try {
    validateFiles(files);

    for (const file of files) {
      const data = file.filter ? file.filter(answers) : answers;
      console.log(data);

      await makeDirectories(options.project, file.path);

      // Handlebars OR JSON
      // Write file
    }
  } catch (err) {
    errorHandler('writing files', err);
  }
}
