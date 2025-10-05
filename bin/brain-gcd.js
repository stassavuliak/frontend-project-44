#!/usr/bin/env node

import { greetUser } from '../src/cli.js';
import { generateGcdRound } from '../src/games/gcd.js';
import { runGame } from '../src/engine.js';

const name = greetUser();
const instructions = 'Find the greatest common divisor of given numbers.';

runGame(name, generateGcdRound, instructions);