#!/usr/bin/env node

import { greetUser } from '../src/cli.js';
import { generatePrimeRound } from '../src/games/prime.js';
import { runGame } from '../src/engine.js';

const name = greetUser();
const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".'

runGame(name, generatePrimeRound, instructions);
