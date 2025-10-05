import { getRandomNumber } from '../utils/random.js';

// helper function for finding the greatest common divisor (Euclidean algorithm)
const getGcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

export const generateGcdRound = () => {
  // with a 70% probability we create "friendly" numbers
  const shouldShareFactor = Math.random() < 0.7;

  let num1;
  let num2;

  if (shouldShareFactor) {
    const factor = getRandomNumber(2, 5);
    num1 = factor * getRandomNumber(1, 25);
    num2 = factor * getRandomNumber(1, 25);
  } else {
    num1 = getRandomNumber(1, 50);
    num2 = getRandomNumber(1, 50);
  }

  const correctAnswer = getGcd(num1, num2).toString();

  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  };
};
