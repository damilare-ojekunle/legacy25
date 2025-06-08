let quizFunction = () => {
    const QUESTIONS = [
        "What is the capital of Nigeria", 
        "1 + 1", 
        "What is the capital of Russia"
    ]
    const ANSWERS = [
        'Abuja',
        '2',
        'Moscow'
    ] 
    let scoreTag = document.getElementById('score1');
    let score = 0;
    for (let i = 0; i < QUESTIONS.length; i++){
        let userResponse = prompt(QUESTIONS[i]);
        let isCorrect = userResponse.toLowerCase() == ANSWERS[i].toLowerCase();
        isCorrect ? (() => {
            alert('Correct Answer');
            score++;
            scoreTag.innerHTML = `${score}/${QUESTIONS.length}`;
        })()
        : 
        alert(`Wrong Answer, the correct answer is ${ANSWERS[i]}`);
    }
    scoreTag.innerHTML = `${score}/${QUESTIONS.length}`;
}

let exercise2 = () =>{
    let attempts = 0
    let naNTag = document.getElementById("notaN")
    let attemptsTag = document.getElementById("Attempts")
    const target = Math.floor(Math.random() * 10);

    while (true) {
        const rawInput = prompt("Guess a number between 0 and 9");
        const userGuess = parseInt(rawInput, 10);
      
      
        if (rawInput === null || rawInput.trim() === "" || isNaN(userGuess) || userGuess < 0 || userGuess > 9) {
          naNTag.style.opacity = 1;
          break;
        }
        naNTag.style.opacity = 0;
      
        attempts++;
      
      
        if (userGuess < target) {
          alert(`Too low—try again!`);
        } else if (userGuess > target) {
          alert(`Too high—try again!`);
        } else {
          alert(`You nailed it in ${attempts} attempt${attempts > 1 ? "s" : ""}!`);
          break;
        }
      }
        
    
    attemptsTag.innerText = attempts;
}


// TASK 3
let tasks = [];

let indexes = 0
const addTask = () => {
  const newTask = prompt("Enter a new task:");
  if (newTask && newTask.trim() !== "") {
    const trimmedTask = newTask.trim();
    tasks.push(trimmedTask);
    console.log(`Added: "${trimmedTask}"`);

    const taskDiv = document.getElementById("task");
    const taskP = document.createElement("p");
    taskP.className = "my-5 py-3 px-4 border border-transparent bg-blue-100 rounded-md shadow-md text-gray-600";
    taskP.textContent = `${indexes + 1}. ${trimmedTask}`;
    indexes++
    taskDiv.appendChild(taskP);

  } else {
    console.log("Invalid task. Try again.");
  }
};
const viewTasks = () => {
  if (tasks.length === 0) {
    console.log("No tasks yet.");
  } else {
    console.log("Your tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
};
const deleteTask = () => {
  viewTasks();
  const index = prompt("Enter the task number to delete:");
  const taskIndex = parseInt(index) - 1;

  if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < tasks.length) {
    const removed = tasks.splice(taskIndex, 1);
    console.log(`Deleted: "${removed[0]}"`);

    const taskDiv = document.getElementById("task");
    taskDiv.innerHTML = "";

    tasks.forEach(task => {
      const taskP = document.createElement("p");
      taskP.className = "my-5 py-3 px-4 border border-transparent bg-blue-100 rounded-md shadow-md text-gray-600";
      taskP.textContent = task;
      taskDiv.appendChild(taskP);
    });

  } else {
    console.log("Invalid task number.");
  }
};


// TASK 4
let calcTip = document.getElementById("calculateTip");
let totalTip = (bill, percent) => {
  return (.01 / percent) * bill
}

let totalAmount = (bill, tip=totalTip()) => {
  return bill + tip
}

let calculateTip = () => {
  let billAmount = Number(prompt("Please what is the bill amount"))
  let tipPercentage = Number(prompt("What is the tip percentage"))
  let totalTips = totalTip(billAmount, tipPercentage)
  let totalCost = totalAmount(billAmount, totalTips)
  console.log(`The total cost is: ${totalCost}`)
}

// TASK 5
const USERS = [
  ["levi", "ill"],
  ["praise", "devd"],
  ["pelumi", "fullstack"]
]

let login = () => {
  let usernameInput = prompt("Enter you Username")
  let passwordInput = prompt("Enter your Password")

  for (i=0; i<USERS.length; i++){
    if (usernameInput.toLowerCase() === USERS[i][0] || passwordInput.toLowerCase() === USERS[i][1]){
      alert('Access Granted')
    }
    else {
      alert('Access Denied')
    }
    break
  }
}


// EXERCISE 6
let userBudget = () =>{
  let expenses = 0
  let userIncome = prompt("Input your income: ");
  let userExpense = ""
  while(true){
    userExpense = prompt("Input your expense, type STOP when done")
    if (userExpense.toLowerCase() == "stop"){
      break;
    } else if (userIncome === null || userExpense === null ||  userExpense.trim() === "" || userIncome.trim() === "" || isNaN(userIncome) || isNaN(userExpense)){
      alert("incorrect input");
      continue
    }
    else{
      expenses += Number(userExpense)
    }
  }
  let userProfit = Number(userIncome) - Number(expenses)
  if ( userProfit < 0){
    alert("You are above your budget")
  }else{
    alert("You are good to go")
  }
}

// EXERCISE 7
let childGame = () => {
  const encouragingWords = [
    "Great job! 🌟",
    "You're a math star! ✨",
    "Keep it up, champ! 💪",
    "Awesome work! 🎉",
    "You nailed it! 🏆",
    "That's correct! ✅",
    "You're doing amazing! 🌈",
    "Bravo! 🎊",
    "Super smart! 🧠",
    "Way to go! 🚀",
    "Multiplication master! 👑",
    "Fantastic! 🎯",
    "You rock! 🎸",
    "Math ninja! 🥷",
    "Boom! Correct again! 💥",
    "Crushed it! 💥",
    "High five! 🙌",
    "So proud of you! ❤️",
    "Yes! You got it! 😄",
    "One step closer to genius! 🧠"
  ];
  const encouragingWordsOnMistake = [
    "That's okay! Let's try again. 😊",
    "Mistakes help us learn! 💡",
    "You're getting there, keep going! 🚀",
    "Don't give up! 💪",
    "Almost! You’ve got this! 🎯",
    "Every pro was once a beginner! 🌱",
    "Oops! Let’s fix it together. 🤝",
    "Good effort! Now let's try another. 👍",
    "You’re doing great—just a little more practice! 🧠",
    "Learning takes time. Be proud! ❤️",
    "You're closer than you think! 🕵️",
    "Great try! Keep practicing! 🏋️‍♂️",
    "Mistakes are part of the journey! 🛤️",
    "Don't worry, you'll get it next time! 🔁",
    "You're building brain muscles! 🧠💪",
    "Keep going, math hero! 🦸‍♀️🦸‍♂️",
    "No worries—math is about practice! ✏️",
    "You're learning something new every try! 📘",
    "Each mistake is a step forward! 👣",
    "You're doing better than you think! 🌟"
  ];
  
  function getEncouragement(encouragement) {
    const index = Math.floor(Math.random() * encouragement.length);
    return encouragement[index];
  }
  
  let score = 5
  let rounds = 5
  
  for (i = rounds; i >= 0; i--){
    let NUM1 = Math.floor(Math.random() * 10);
    let NUM2 = Math.floor(Math.random() * 10);
    let ANSWER = Number(NUM1) * Number(NUM2)
    let userCalculationAnswer = prompt(`Hey there. Solve this question please: \n${Number(NUM1)} x ${Number(NUM2)}`)

    if (ANSWER === Number(userCalculationAnswer)){
      alert(`${getEncouragement(encouragingWords)}`)
      continue
    }else{
      alert(`That's wrong\n${getEncouragement(encouragingWordsOnMistake)}\nThe answer is: ${ANSWER}`)
      score--
    }
  }
  alert(`You got ${score}/5`)
}  
