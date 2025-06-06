// const { use } = require("react");

// Excercise one Solution
function clearOutput() {
    const result = document.getElementById("excercise1Output");
    if (result.innerHTML === "Your Score: ") {
        alert("Your score is already clear.");
        return;
    } else {
        document.getElementById("excercise1Output").innerHTML = "Your Score: ";
    }
}

function quiz() {
    const Questions = ["what is the capital of France?", "what is 2+2?", "what is the capital of Japan?"];
    const Answers = ["Paris", "4", "Tokyo"];
    let Score = 0;
    for (let i = 0; i < Questions.length; i++) {
        let userAnswer = prompt(Questions[i]);
        if (userAnswer === "") {
            alert("Please answer the question.");
            i--;
            continue;
        }
        if (userAnswer.toLowerCase() === Answers[i].toLowerCase()) {
            Score++;
            alert("Correct!");
        } else {
            alert("Incorrect! The correct answer is " + Answers[i]);
        }
    }
    const result = document.getElementById("excercise1Output");
    result.innerHTML = "Your score is: " + Score + "/" + Questions.length;
}

// Excercise two Solution
function clearOutput2() {
    const result = document.getElementById("GuessingGameOutput");
    if (result.innerHTML === "Attempts: ") {
        alert("The guessing game output is already clear.");
        return;
    } else {
        document.getElementById("GuessingGameOutput").innerHTML = "Attempts: ";
    }
}

function startGuessingGame() {
    console.log("Starting the guessing game...");
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Random number is: " + randomNumber);
    let attempts = 0;
    let input;

    while (true) {
        input = prompt("Guess a number between 1 and 10:");
        input = Number(input);
        if (input === null) {
            alert("Game Cancelled");
            return;
        }
        if (typeof input !== 'number' || input < 1 || input > 10) {
            alert("Please enter a valid number between 1 and 10.");
            continue;
        }
        if (input === randomNumber) {
            attempts++;
            alert("Congratulations! You guessed the number correctly");
            break;
        }
        if (input < randomNumber) {
            alert("Too low! Try again.");
        }
        if (input > randomNumber) {
            alert("Too high! Try again.");
        }
        if (input !== randomNumber) {
            attempts++;
        }
    }

    const result = document.getElementById("GuessingGameOutput");
    result.innerHTML = "Attempts: " + attempts + "<br>Random Number: " + randomNumber;
}

// Excercise three Solution
let todo = [];
addTask = () => {
    const task = prompt("Enter a task:").toLocaleLowerCase();
    if (task === null) {
        alert("Task input cancelled.");
        return;
    }
    if (task.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    if (todo.includes(task)) {
        alert("This task already exists in your todo list.");
        return;
    }

    todo.push(task);
    console.log("Task added: " + task);
    console.log("Your Todolist items: " + todo.join(", "));
};

const deleteTask = () => {
    const tasktodelete = prompt("Enter the task you want to delete:").toLocaleLowerCase();
    if (tasktodelete === null) {
        alert("Task deletion cancelled.");
        return;
    }
    if (tasktodelete.trim() === "") {
        alert("Please enter a task to delete.");
        return;
    }
    if (!todo.includes(tasktodelete)) {
        alert("This task does not exist in your todo list.");
        return;
    }
    const indexofitem = todo.indexOf(tasktodelete);
    todo.splice(indexofitem, 1);
    alert(`Task "${tasktodelete}" removed.`);
    console.log("Updated Todolist:", todo);
};

const displayTasks = () => {
    if (todo.length === 0) {
        alert("Your todo list is empty.");
        console.log("Todo list is empty.");
        return;
    }
    let taskList = "Your Todo List:\n";
    todo.forEach((task, index) => {
        taskList += `${index + 1}. ${task}\n`;
    });
    alert(taskList);
    console.log("Your Todo list:", todo.toString());
};

const ClearTodo = () => {
    if (todo.length === 0) {
        console.log("Todo list is empty.");
        alert("Your todo list is already empty.");
        return;
    }
    todo.length = 0;
    alert("Your todo list has been cleared.");
    console.log("Todo list cleared.");
};

// Excercise 4 Solution
function startTip() {
    const bill = prompt("Enter your bill amount");
    if (isNaN(bill) || bill.trim() === "") {
        console.log("Enter a valid number");
        alert("Enter a valid number");
        return;
    }
    const tippercentage = prompt("Enter Tip Percentage (0 - 100%)");
    if (isNaN(tippercentage) || tippercentage.trim() === "") {
        console.log("Enter a valid number");
        alert("Enter a valid number");
        return;
    }

    const newbill = Number(bill);
    const tip = Number(tippercentage);
    if (tip > 100) {
        alert("Tip value Exceeded");
        return;
    }

    const tip_amount = (tip * 0.01) * newbill;
    const total_amount = newbill + tip_amount;
    alert("Tip amount is: " + tip_amount + "\n" + "Your Total amount is: " + total_amount);
}

// Excercise 5 solution
function loginSimulation() {
    const credentials = [
        {
            username: "user1",
            password: "password1"
        },
        {
            username: "user2",
            password: "password2"
        },
        {
            username: "user3",
            password: "password3"
        },
        {
            username: "user4",
            password: "password4"
        }
    ];

    console.log("Login info" + credentials);

    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    if (username === null || password === null) {
        alert("Login cancelled.");
        return;
    }

    if (username.trim() === "" || password.trim() === "") {
        alert("Please enter both username and password.");
        return;
    }

    let userFound = false;
    for (let i = 0; i < credentials.length; i++) {
        if (credentials[i].username === username && credentials[i].password === password) {
            userFound = true;
            alert("Access Granted! Welcome " + username + "!");
            console.log("Access Granted for user: " + username);
            break;
        } else {
            userFound = false;
            console.log("Access Granted for user: " + username);
            alert("Login failed! Incorrect username or password.");
            break;
        }
    }
}

// Excercise 6 Solutions
function startBudgetTracker() {
    const income = prompt("Enter your monthly income:");
    if (isNaN(income) || income.trim() === "") {
        alert("Please enter a valid income amount.");
        return;
    }

    const items_number = prompt("How many items do you want to add to your budget tracker?");
    if (isNaN(items_number) || items_number <= 0) {
        alert("Please enter a valid number of items.");
        return;
    }

    let total = 0;

    for (let i = 0; i < items_number; i++) {
        const items = prompt(`Enter your Item ${i + 1} Price: `);
        if (isNaN(items) || items.trim() === "") {
            alert("Please enter a valid item price.");
            i--;
            continue;
        }
        total += Number(items);
    }

    if (total > income) {
        alert(
            `Your income: ${income}` + "\n" +
            `Your expenditure: ${total}` + "\n" +
            "Your total expenses exceed your income. Please review your budget." + "\n" +
            `You are over budget by: ${total - income}`
        );
    } else {
        alert(`Your total expenses are: ${total}. You have ${income - total} left from your income.`);
    }
}
