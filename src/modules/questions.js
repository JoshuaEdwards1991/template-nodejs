import inquirer from 'inquirer';
import { validateName } from './validation';

const questions = [
  {
    default: 'nodejs',
    message: 'Project name:',
    name: 'name',
    type: 'input',
    validate: (value) => validateName(value),
  },
  {
    default: '0.1.0',
    message: 'Version:',
    name: 'version',
    type: 'input',
  },
  {
    message: 'Description:',
    name: 'description',
    type: 'input',
  },
];

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