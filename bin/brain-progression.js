#!/usr/bin/env node

import { greetUser } from '../src/cli.js';
import { generateProgressionRound } from '../src/games/progression.js';
import { runGame } from '../src/engine.js';

const name = greetUser();
const instructions = 'What number is missing in the progression?';

runGame(name, generateProgressionRound, instructions);