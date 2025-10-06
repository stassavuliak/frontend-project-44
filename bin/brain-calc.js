#!/usr/bin/env node

import { greetUser } from '../src/cli.js'
import { generateCalcRound } from '../src/games/calc.js'
import { runGame } from '../src/engine.js'

const name = greetUser()
const instructions = 'What is the result of the expression?'

runGame(name, generateCalcRound, instructions)
