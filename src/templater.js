import askQuestions from './modules/input/askQuestions';
import outputFiles from './modules/output/outputFiles';

export default async function (questions, files) {
  const answers = await askQuestions(questions);
  return await outputFiles(files, answers);
}
