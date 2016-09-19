import { createFile, writeFile } from './file';
import errorHandler from '../errorHandler';
import { makeDirectories } from './directories';
import { validateFiles } from '../validation';

export default async function outputFiles(files, answers, options) {
  try {
    validateFiles(files);

    for (const file of files) {
      if (file.when !== undefined) {
        const when = typeof file.when === 'function' ? file.when(answers) : file.when;
        if (!when) continue;
      }

      console.log(`Processing ${file.path}`);
      console.dir(file.when);

      const data = file.filter ? file.filter(answers) : answers;
      const content = createFile(data, file.template);

      await makeDirectories(options.project, file.path);
      await writeFile(file.path, content, options.project);
    }

  } catch (err) {
    errorHandler('writing files', err);
  }
}
