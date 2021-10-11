function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let numberOne = getNumber('enter the first number: ');
let numberTwo = getNumber('enter the second number: ');
console.log(`${numberOne} * ${numberTwo} = ${multiply(numberOne, numberTwo)}`);