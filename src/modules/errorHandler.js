import chalk from 'chalk';

export default function (task, err) {
  const punctuation = err ? ':' : '.';

  console.log(chalk.red('Oh no, error!'));
  console.log(`Something went wrong while ${context}${punctuation}`);
  if (err) console.log(err);

  process.exit(1);
}
