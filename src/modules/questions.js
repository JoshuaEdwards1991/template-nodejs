import { validateName, validateVersion } from './validation';
import inquirer from 'inquirer';

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
    validate: (value) => validateVersion(value),
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
