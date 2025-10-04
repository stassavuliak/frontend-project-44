import readLineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const name = greetUser();
console.log('What is the result of the expression?');