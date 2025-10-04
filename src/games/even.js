import { getRandomNumber } from "../utils/random";

// get the answer
export const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const result = {};

  result.question = randomNumber.toString();
  result.correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

  return result
}




