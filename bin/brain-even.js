#!/usr/bin/env node

import { greetUser } from '../src/cli.js'
import { generateRound } from '../src/games/even.js'
import { runGame } from '../src/engine.js'

const name = greetUser()
const instructions = 'Answer "yes" if the number is even, otherwise answer "no".'

runGame(name, generateRound, instructions)
