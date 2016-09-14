import askQuestions from './modules/input/askQuestions';
import outputFiles from './modules/output/outputFiles';
import { validateOptions } from './modules/valiation';

export default async function (questions, files, options) {
  validateOptions(options);

  const answers = await askQuestions(questions);
  return await outputFiles(files, answers);
}
