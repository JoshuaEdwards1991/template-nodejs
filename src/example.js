#!/usr/bin/env node

import { add, divide, multiply, subtract } from './modules/maths';

console.log('Let\'s do some maths!');

console.log(`1 + 1 = ${add(1, 1)}`);
console.log(`10 - 2 = ${subtract(10, 2)}`);
console.log(`2 x 2 = ${multiply(2, 2)}`);
console.log(`15 / 3 = ${divide(15, 3)}`);

process.exit(0);
