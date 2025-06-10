// Exercise 1 - Quiz
function startQuiz() {
  const questions = [
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is 5 + 7?', answer: '12' },
    { question: 'What language is used for web development alongside HTML and CSS?', answer: 'JavaScript' },
    { question: "Who wrote 'Hamlet'?", answer: 'Shakespeare' },
    { question: 'What is the boiling point of water in Celsius?', answer: '100' },
  ];
  let score = 0;
  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question)?.trim() ?? 'No answer provided';
    if (userAnswer.toLowerCase() === questions[i].answer.toLowerCase()) {
      alert('Correct!');
      score++;
    } else {
      alert(`Wrong. Correct answer: ${questions[i].answer}. You said: ${userAnswer || 'No answer provided'}`);
    }
  }
  alert(`Quiz complete! Your final score is ${score}/${questions.length}`);
}

// Exercise 2 - Guess the number
function startGuessingGame() {
  const targetNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  let guessedCorrectly = false;

  while (!guessedCorrectly) {
    let guess = prompt('Guess a number between 1 and 10:')?.trim() ?? 'No input';
    if (guess === 'No input' || guess === '') {
      alert('Please enter a number.');
      continue;
    }
    const userGuess = parseInt(guess);
    attempts++;
    if (isNaN(userGuess)) {
      alert("That's not a number. Try again.");
    } else if (userGuess < targetNumber) {
      alert('Too low. Try again.');
    } else if (userGuess > targetNumber) {
      alert('Too high. Try again.');
    } else {
      alert(`Correct! You guessed it in ${attempts} attempt(s).`);
      guessedCorrectly = true;
    }
  }
}

// Exercise 3 - Task Manager
function startTaskManager() {
  let tasks = [];

  const addTask = () => {
    const task = prompt('Enter a task to add:');
    if (task) tasks.push(task);
  };

  const viewTasks = () => {
    console.log('📋 Your Tasks:');
    tasks.forEach((task, index) => console.log(`${index + 1}: ${task}`));
  };

  const deleteTask = () => {
    const index = Number(prompt('Enter task number to delete:')) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      alert('Task deleted.');
    } else {
      alert('Invalid task number.');
    }
  };

  let running = true;
  while (running) {
    const action = prompt('Choose: add, view, delete, exit')?.toLowerCase();
    switch (action) {
      case 'add':
        addTask();
        break;
      case 'view':
        viewTasks();
        break;
      case 'delete':
        deleteTask();
        break;
      case 'exit':
        running = false;
        break;
      default:
        alert('Unknown command.');
    }
  }
}

// Exercise 4 - Tip Calculator
function startTipCalculator() {
  const bill = Number(prompt('Enter bill amount:'));
  const tipPercent = Number(prompt('Enter tip percentage (e.g., 15):'));
  if (isNaN(bill) || isNaN(tipPercent)) {
    alert('Invalid input.');
    return;
  }
  const tip = (bill * tipPercent) / 100;
  const total = bill + tip;
  alert(`Tip: $${tip.toFixed(2)}\nTotal Bill: $${total.toFixed(2)}`);
}

// Exercise 5 - Login Simulation
function startLogin() {
  const users = [
    { username: 'admin', password: '1234' },
    { username: 'guest', password: 'guest' },
  ];
  const username = prompt('Username:');
  const password = prompt('Password:');

  const validUser = users.find(
    (u) => (u.username === username && u.password === password) || (u.username === 'guest' && username === 'guest')
  );

  if (validUser && username === validUser.username && password === validUser.password) {
    alert('Access granted!');
  } else {
    alert('Access denied!');
  }
}

// Exercise 6 - Budget Tracker
function startBudgetTracker() {
  const income = Number(prompt('Enter your income:'));
  if (isNaN(income)) {
    alert('Invalid income.');
    return;
  }

  const expenses = [];
  let adding = true;

  while (adding) {
    const expense = prompt("Enter an expense amount (or type 'done' to finish):");
    if (expense?.toLowerCase() === 'done') {
      adding = false;
    } else {
      const num = Number(expense);
      if (!isNaN(num)) expenses.push(num);
      else alert('Invalid amount.');
    }
  }

  const totalExpenses = expenses.reduce((sum, e) => sum + e, 0);
  const balance = income - totalExpenses;
  console.log(`Income: $${income}\nExpenses: $${totalExpenses}\nBalance: $${balance}`);
  alert(balance < 0 ? 'You are overspending!' : "You're within budget!");
}

// Exercise 7 - Multiplication Game
function startMultiplicationGame() {
  const rounds = 5;
  let score = 0;

  for (let i = 1; i <= rounds; i++) {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = num1 * num2;

    const userInput = prompt(`Round ${i}: What is ${num1} x ${num2}?`);
    const userAnswer = Number(userInput);

    if (isNaN(userAnswer)) {
      alert('Please enter a valid number.');
      i--; // repeat this round
    } else if (userAnswer === correctAnswer) {
      alert('Correct!');
      score++;
    } else {
      alert(`Wrong. The correct answer is ${correctAnswer}.`);
    }
  }

  alert(`Game Over! Your score is ${score}/${rounds}`);
}
