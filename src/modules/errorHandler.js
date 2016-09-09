import chalk from 'chalk';

export default function (message, err) {
  const oops = chalk.red('Oops!');
  const punctuation = err ? ':' : '.';

  console.log(`${oops} Something went wrong when ${message}${punctuation}`);
  if (err) console.log(err);
  process.exit(1);
}
