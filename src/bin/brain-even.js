#!/usr/bin/env node
import askQuestion from '..';
import startGame from '../games/gameEven';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const name = askQuestion('May I have your name? ');
console.log(`Hello, ${name}!`);

const gameResult = startGame();

if (gameResult) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
