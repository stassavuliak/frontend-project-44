import { getRandomNumber } from '../utils/random.js'
import { isPrime } from '../utils/primeNumber.js'

export const generatePrimeRound = () => {
  const randomNumber = getRandomNumber(1, 100)
  const result = {}

  result.question = randomNumber.toString()
  result.correctAnswer = isPrime(randomNumber)

  return result
}
