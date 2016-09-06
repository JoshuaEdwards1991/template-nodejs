import inquirer from 'inquirer';
import questions from './questions';

export default function answerQuestions() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(questions)
      .then(
        (answers) => resolve(answers),
        (err) => reject(err)
      );
  });
}
