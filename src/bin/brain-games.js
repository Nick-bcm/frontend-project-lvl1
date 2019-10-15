#!/usr/bin/env node
import askQuestion from '..';

const name = askQuestion('May I have your name? ');
console.log(`Hello, ${name}!`);
