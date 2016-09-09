import askQuestions from './modules/input/askQuestions';

export default async function (questions, files) {
  const answers = await askQuestions(questions);

  console.log(answers);
  console.log(files);
}
