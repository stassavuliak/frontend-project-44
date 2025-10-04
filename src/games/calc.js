import { getRandomNumber } from '../utils/random.js';

const operators = ['+', '-', '*'];

export const generateCalcRound = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
  }

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: correctAnswer.toString(),
  };
};
