let quizFunction = () => {
  const QUESTIONS = [
    "What is house made of",
    "What is paper made from",
    "What was the capital of Nigeria in the year 1990",
  ];
  const ANSWERS = ["Blocks", "Wood", "Lagos"];
  let scoreTag = document.getElementById("score1");
  let score = 0;
  for (i = 0; i < QUESTIONS.length; i++) {
    let useranswer = prompt(QUESTIONS[i]);
    if (useranswer.toLowerCase() == ANSWERS[i].toLowerCase()) {
      alert("Correct Answer");
      score++;
    } else {
      alert(`Wrong Answer, The correct answer is ${ANSWERS[i]}`);
    }
  }
  scoreTag.innerHTML = `${score}/${QUESTIONS.length}`;
};

// EXERCISE 2
let exercise2 = () => {
  attempts = 0;
  let notNan = document.getElementById("noTag");
  let userAttempt = document.getElementById("attemptTag");
  const randomNumber = Math.floor(Math.random() * 10);
  while (true) {
    const rawInput = prompt("Guess a number between 0 and 10");
    const userGuess = parseInt(rawInput, 10);

    if (
      rawInput === null ||
      rawInput.trim() === "" ||
      isNaN(userGuess) ||
      userGuess < 0 ||
      userGuess > 9
    ) {
      notNan.style.opacity = 1;
      break;
    }
    notNan.style.opacity = 0;
    attempts++;

    if (userGuess > randomNumber) {
      alert("too high");
    } else if (userGuess < randomNumber) {
      alert("too low");
    } else {
      alert(correct);
      break;
    }
    userAttempt.innerText = attempts;
  }
};

// EXERCISE 3

let task = [];
let userArray = document.getElementById("userTask");

const renderTasks = () => {
  userArray.innerHTML = ""; // clear old list
  task.forEach((item, index) => {
    userArray.innerHTML += `${index}: ${item} <br>`;
  });
};

let AddTask = () => {
  let userInput = prompt("Enter your To-do List");
  if (userInput === null || userInput.trim() === "") {
    console.log("Invalid input");
    return;
  }
  task.push(userInput);
  renderTasks();
};

let DeleteTask = () => {
  let index = Number(prompt("Enter the index of the task to delete"));
  if (isNaN(index) || index < 0 || index >= task.length) {
    alert("Invalid index");
    return;
  }
  console.log(task);
  task.splice(index, 1);
  renderTasks();
};

// EXERXIDE 4

let userInput = document.getElementById("userCalc");

let userTip = (tip, bill) => {
  let totalTip = (tip / 100) * bill;
  return totalTip;
};

let userCalc = () => {
  let bill = Number(prompt("what is the bill amount"));
  let tip = Number(prompt("what is the tip percentage"));
  let totalBill = userTip(tip, bill) + bill;
  console.log(totalBill);
};

// EXERCISE 5

const Users = [
  ["levi", "udoh"],
  ["pelumi", "fs"],
  ["ini", "ful"],
];

let userLogin = () => {
  let usernameInput = prompt("Enter your username");
  let userpasswordInput = prompt("Enter your password");
  for (i = 0; i < Users.length; i++) {
    if (
      usernameInput.toLowerCase() === Users[i][0] ||
      userpasswordInput.toLowerCase() === Users[i][1]
    ) {
      alert("Access Granted");
    } else {
      alert("Access Denied");
      alert("You are a scammer!!")
    }
    break;
  }
};

// EXERCISE 6
let userbudget = () => {
  let userIncome = prompt("Enter your Income");
  let expenses = 0;
  while (true) {
    let userExpense = prompt("Enter your Expense, send exit when done");
    if (userExpense.toLowerCase() === "exit") {
      break;
    } else {
      expenses += Number(userExpense);
    }
  }

  let userProfit = Number(userIncome) - Number(expenses);
  if (userProfit < 0) {
    alert("You are overspending");
  } else if (userProfit > 0) {
    alert("You're within budget");
  } else {
    alert("You're above budget");
  }
};

// EXECISE 7

const startQuiz = () => {
  const rounds = 5;
  let score = 0;

  for (let i = 1; i <= rounds; i++) {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const answer = prompt(`Round ${i}: What is ${num1} x ${num2}?`);
    console.log(answer)

    if (answer === null) {
      alert("Quiz cancelled.");
      break;
    }

    if (parseInt(answer) === num1 * num2) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is ${num1 * num2}.`);
    }
  }

  alert(`Quiz finished! Your score: ${score} out of ${rounds}`);
}
