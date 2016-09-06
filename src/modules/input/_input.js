import inquirer from 'inquirer';
import questions from './questions';

export default function readInput() {
  return new Promise((resolve) => resolve(inquirer.prompt(questions)));
}
