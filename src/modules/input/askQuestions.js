import errorHandler from '../errorHandler';
import inquirer from 'inquirer';

export default async function (questions) {
  try {
    return await inquirer.prompt(questions);
  } catch (err) {
    errorHandler('asking questions', err);
  }
}
