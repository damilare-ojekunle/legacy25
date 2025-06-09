  // --- Section 1---
  function startQuiz() {
    alert("Welcome to the Interactive Quiz App!");

    const questions = [
       { question: "who is the current president of the US?", answer: "Joe Biden" },
       { question: "What is 2 + 2?", answer: "4" },
       { question: "Which planet is known as the Red Planet?", answer: "Mars" },
       { question: "What is the largest ocean on Earth?", answer: "Pacific Ocean" },
       { question: "who is the first man on the moon?", answer: "Neil Armstrong" },
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is the chemical symbol for water?", answer: "H2O" },
        { question: "Who wrote 'The lion and the jewel'?", answer: "Wole Soyinka" },
        { question: "What is the largest mammal?", answer: "Blue Whale" },
        { question: "What is the main ingredient in jollof rice?", answer: "Rice" }
    ];

    let score = 0;
    const totalQuestions = questions.length;

    for (let i = 0; i < totalQuestions; i++) {
        const q = questions[i];

        let userAnswer = prompt(`${q.question}`); 

       
        if (userAnswer === null) {
            alert("You cancelled this question.");
            
        } else {
            const inputOrDefault = userAnswer.trim() || 'NO_ANSWER'; // Provides a default if input is empty or just whitespace

            if (inputOrDefault === 'NO_ANSWER') { // Covers empty string after trim
                alert("You skipped this question.");
                // Score doesn't change
            } else if (inputOrDefault.toLowerCase() === q.answer.toLowerCase()) {
                alert("Correct!");
                score++;
            } else {
                alert(`Incorrect. The correct answer was: ${q.answer}`);
            }
        }
    }

    alert(` Quiz Finished \nYou got ${score} out of ${totalQuestions} questions correct.`);
}

// Section 2
"use strict"; 
    function startGame() {
    alert("Welcome to the Number Guessing Game!");
    alert("I'm thinking of a number between 1 and 100.");

    const secretNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;
    let guess = null;

    while (guess !== secretNumber) {
        attempts++;

        const userInput = prompt(`Attempt ${attempts}: Guess the number (1-100):`);

        if (userInput === null) {
            alert("Game cancelled!");
            return;
        }

        guess = Number(userInput);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter a number between 1 and 100.");
            attempts--; 
        } else if (guess < secretNumber) {
            alert("Too low! Try again.");
        } else if (guess > secretNumber) {
            alert("Too high! Try again.");
        } else {
            alert(`Congratulations! You guessed the number ${secretNumber} `);
            alert(`It took you ${attempts} attempts.`);
        }
    }
}


// Section 3
"use strict";
function runList() {
    const tasks = [];

    const viewTasks = () => {
        console.log("--- Your To-Do List ---");
        if (tasks.length === 0) {
            console.log("No tasks yet!");
        } else {
            tasks.forEach((task, index) => {
                console.log(`${index + 1}. ${task}`);
            });
        }
        console.log("-----------------------");
    };

    const addTask = (taskDescription) => {
        if (taskDescription) {
            tasks.push(taskDescription);
            console.log(`Added: "${taskDescription}"`);
        } else {
            console.log("Task description cannot be empty.");
        }
    };

    const deleteTask = (taskIndex) => {
        if (taskIndex >= 0 && taskIndex < tasks.length) {
            const deletedTask = tasks.splice(taskIndex, 1);
            console.log(`Deleted: "${deletedTask[0]}"`);
        } else {
            console.log("Invalid task number.");
        }
    };

    alert("Running To-Do List in the Console! Please open your developer console (F12).");
    while (true) {
        const action = prompt("What would you like to do? (add, view, delete, exit)").toLowerCase().trim();

        if (action === 'view') {
            viewTasks();
        } else if (action === 'add') {
            const newTask = prompt("Enter the new task description:");
            if (newTask !== null && newTask.trim() !== '') {
                 addTask(newTask.trim());
            } else if (newTask !== null) { 
                console.log("Task description cannot be empty.");
            } else { 
                 console.log("Add task cancelled.");
            }

        } else if (action === 'delete') {
            viewTasks();
            if (tasks.length > 0) {
                const indexInput = prompt("Enter the number of the task to delete:");
                 if (indexInput !== null && indexInput.trim() !== '') {
                    const indexToDelete = Number(indexInput) - 1;
                    deleteTask(indexToDelete);
                 } else if (indexInput !== null) { 
                    console.log("Please enter a task number.");
                 } else { 
                    console.log("Delete task cancelled.");
                 }
            } else {
                console.log("No tasks to delete.");
            }


        } else if (action === 'exit') {
            console.log("Exiting To-Do List. Goodbye!");
            break;

        } else if (action !== null) { 
            console.log("Invalid action. Please type 'add', 'view', 'delete', or 'exit'.");
        } else { 
             console.log("Exiting To-Do List. Goodbye!");
             break;
        }
    }
}

``