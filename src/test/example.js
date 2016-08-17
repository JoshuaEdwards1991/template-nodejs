import { add, divide, multiply, subtract } from '../modules/maths';
import { expect } from 'chai';

describe('Maths', () => {
  specify('add', () => {
    expect(add(1, 1)).to.equal(2);
    expect(add(5, -3)).to.equal(2);
    expect(add(0, 0)).to.equal(0);
    expect(add(1, 2, 3)).to.equal(6);
  });

  specify('divide', () => {
    expect(divide(15, 5)).to.equal(3);
    expect(divide(1000, 1)).to.equal(1000);
    expect(divide(1, 5)).to.equal(0.2);
    expect(divide(12, -2)).to.equal(-6);
    expect(divide(10, 0)).to.equal(Infinity);
  });

  specify('multiply', () => {
    expect(multiply(2, 2)).to.equal(4);
    expect(multiply(20, 5)).to.equal(100);
    expect(multiply(5, -7)).to.equal(-35);
  });

  specify('subtract', () => {
    expect(subtract(10, 1)).to.equal(9);
    expect(subtract(2, 20)).to.equal(-18);
    expect(subtract(0, 0)).to.equal(0);
  });
});
