const min = 1;
const max = 100;

// get the random number
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get the answer
export const generateRound = () => {
  const randomNumber = getRandomNumber(min, max);
  const result = {};

  result.question = randomNumber.toString();
  result.correctAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

  return result
}

console.log(generateRound());