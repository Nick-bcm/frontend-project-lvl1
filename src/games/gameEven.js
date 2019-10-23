import askQuestion from '..';

const ask = number => {
  console.log(`Question: ${number}`);
  return askQuestion('Your answer: ');
};

const startGame = () => {
  const attemptsCount = 3;

  for (let i = 0; i < attemptsCount; i += 1) {
    const number = Math.round(Math.random() * 100);
    const answer = ask(number);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      return false;
    }

    console.log('Correct!');
  }

  return true;
};

export default startGame;
