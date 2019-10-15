import readlineSync from 'readline-sync';

export const askQuestion = question => readlineSync.question(question);
