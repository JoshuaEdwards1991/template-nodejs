import chalk from 'chalk';

export function logStatus(status) {
  const chalkedSymbol = chalk.green('!');
  const chalkedStatus = chalk.bold(status);

  console.log(`${chalkedSymbol} ${chalkedStatus}`);
}

export function logCreate(path) {
  const chalkedSymbol = chalk.green('>');
  const chalkedCreate = chalk.bold('Create:');
  const chalkedPath = chalk.cyan(path);

  console.log(`${chalkedSymbol} ${chalkedCreate} ${chalkedPath}`);
}
