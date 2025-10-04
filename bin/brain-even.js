#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';
import { generateRound } from '../src/games/even.js';

const name = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const playEvenGame = (name) => {
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const round = generateRound();
    console.log('Question: ' + round.question);

    const userAnswer = readlineSync.question('Your answer: ').trim().toLocaleLowerCase();

    if (userAnswer === round.correctAnswer) {
      console.log('Correct!');
      correctAnswersCount++;
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${round.correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return
    }
  }

  console.log(`Congratulations, ${name}!`);
}

playEvenGame(name);







