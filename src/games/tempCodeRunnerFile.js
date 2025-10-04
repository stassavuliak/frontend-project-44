// generate random operator
const generateCalcRound = () => {
  const operations = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operations.length);
  const operator = operations[randomIndex]

  // generate two random numbers
  const a = Math.floor(Math.random() * 100) + 1; 
  const b = Math.floor(Math.random() * 100) + 1;

  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;

    case '-':
      result = a - b;
      break;
      
    case '*':
      result = a * b;
      break;
  }

  return {
    question: `${a} ${operator} ${b}`,
    correctAnswer: result.toString(),
  }
}

generateCalcRound(); 

for (let i = 0; i < 5; i++) {
  const round = generateCalcRound();
  console.log(`Question: ${round.question}, Answer: ${round.correctAnswer}`);
}