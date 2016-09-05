import answerQuestions from './modules/questions';

answerQuestions().then(
  (answers) => console.log(JSON.stringify(answers, null, 2)),
  (err) => console.log(err)
);
