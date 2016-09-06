import getInput from './modules/input/_input';

getInput().then(
  (answers) => console.log(JSON.stringify(answers, null, 2)),
  (err) => console.log(err)
);
