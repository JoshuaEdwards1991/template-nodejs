import { validateLicense, validateName, validateVersion } from './validation';
import inquirer from 'inquirer';

const addFilters = function addFilters(questions) {
  return questions.map((question) => {
    if (question.type === 'input') {
      question.filter = question.filter || ((answer) => answer.trim());
    }

    return question;
  });
};

const questions = [
  {
    default: 'nodejs',
    message: 'Project name:',
    name: 'name',
    type: 'input',
    validate: (answer) => validateName(answer),
  },
  {
    default: '0.1.0',
    message: 'Version:',
    name: 'version',
    type: 'input',
    validate: (answer) => validateVersion(answer),
  },
  {
    message: 'Description:',
    name: 'description',
    type: 'input',
  },
  {
    default: 'MIT',
    message: 'License:',
    name: 'license',
    type: 'input',
    validate: (answer) => validateLicense(answer),
  },
];

export default function answerQuestions() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(addFilters(questions))
      .then(
        (answers) => resolve(answers),
        (err) => reject(err)
      );
  });
}
