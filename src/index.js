import readlineSync from 'readline-sync';

const askQuestion = question => readlineSync.question(question);

export default askQuestion;
