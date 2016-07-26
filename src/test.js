const foo = 'bar';
const arr = ['one', 'two', 'three'];

console.log(`foo is ${foo}`);

arr
  .map(i => i.toUpperCase())
  .forEach(i => console.log(i));
