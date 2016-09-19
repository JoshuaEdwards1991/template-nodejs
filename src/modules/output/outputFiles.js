import { createFile, writeFile } from './file';
import errorHandler from '../errorHandler';
import { makeDirectories } from './directories';
import { validateFiles } from '../validation';

const skipFile = function skipFile(when, answers) {
  if (when === undefined) return false;
  else if (typeof when === 'function') return !when(answers);
  return !when;
};

export default async function outputFiles(files, answers, options) {
  try {
    validateFiles(files);

    for (const file of files) {
      if (skipFile(file.when, answers)) continue;

      const data = file.filter ? file.filter(answers) : answers;
      const content = createFile(data, file.template);

      await makeDirectories(options.project, file.path);
      await writeFile(file.path, content, options.project);
    }

  } catch (err) {
    errorHandler('writing files', err);
  }
}
