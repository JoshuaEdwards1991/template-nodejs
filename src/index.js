import answerQuestions from './modules/inquirer/answerQuestions';

answerQuestions().then(
  (answers) => console.log(JSON.stringify(answers, null, 2)),
  (err) => console.log(err)
);
