import readlineSync from 'readline-sync'

export const runGame = (name, generateRound, instructions) => {
  console.log(instructions)

  let correctAnswersCount = 0

  while (correctAnswersCount < 3) {
    const round = generateRound()
    console.log(`Question: ${round.question}`)

    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

    if (userAnswer === round.correctAnswer) {
      console.log('Correct!')
      correctAnswersCount++
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
