import { getRandomNumber } from '../utils/random.js';

export const generateDivisorRound = () => {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);

  let copyNum1 = num1;
  let copyNum2 = num2;

  while (copyNum2 !== 0) {
    let temp = copyNum2;
    copyNum2 = copyNum1 % copyNum2;
    copyNum1 = temp;
  }

  return {
    question: `${num1} ${num2}`,
    correctAnswer: `${copyNum1}`
  };


};

console.log(generateDivisorRound());