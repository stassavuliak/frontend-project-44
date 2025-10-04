import { getRandomNumber } from "../utils/random";

const min = 1;
const max = 100;

// get the answer
export const generateRound = () => {
  const randomNumber = getRandomNumber(min, max);
  const result = {};

  result.question = randomNumber.toString();
  result.correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

  return result
}




