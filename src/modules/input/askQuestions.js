import errorHandler from '../errorHandler';
import inquirer from 'inquirer';
import { validateQuestions } from '../validation';

export default async function (questions) {
  try {
    validateQuestions(questions);
    return await inquirer.prompt(questions);

  } catch (err) {
    errorHandler('asking questions', err);
  }
}
