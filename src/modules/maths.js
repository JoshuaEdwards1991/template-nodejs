export function add(...numbers) {
  return numbers.reduce((prev, cur) => prev + cur);
}

export function divide(divideFrom, divideBy) {
  return divideFrom / divideBy;
}

export function multiply(multiplyFirst, multiplySecond) {
  return multiplyFirst * multiplySecond;
}

export function subtract(subtractFrom, subtractAmount) {
  return subtractFrom - subtractAmount;
}
