import inquirer from 'inquirer';

export default async function (questions) {
  return await inquirer.prompt(questions);
}
