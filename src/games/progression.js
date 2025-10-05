import { getRandomNumber } from "../utils/random.js";

export const generateProgressionRound = () => {
  const arrayOfNumbers = [];

  let stepOfProgression = Math.floor(Math.random() * 10 + 1);
  let quantity = getRandomNumber(5, 10);
  let startOfCount = getRandomNumber(1, 100);
  
  for (let i = startOfCount; arrayOfNumbers.length < quantity; i += stepOfProgression) {
    arrayOfNumbers.push(i);
  }

  const index = Math.floor(Math.random() * arrayOfNumbers.length);
  const correctNumber = arrayOfNumbers[index];
  arrayOfNumbers[index] = '..';

  return {
    question: `${arrayOfNumbers.join(' ')}`,
    correctAnswer: `${correctNumber}`,
  }
}





