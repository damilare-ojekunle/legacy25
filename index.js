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
       if (tasks.length === 0){ 
           console.log("No tasks yet!"); 
           alert("No tasks yet!"); 
       } else {
           const taskListString = tasks.map((t, i) => `${i + 1}. ${t}`).join('\n');
           console.log(taskListString); 
           alert("--- Your To-Do List ---\n" + taskListString); 
       }
       console.log("-----------------------"); 
    };

    alert("Running To-Do List - Open console (F12)");

    while (true) {
        const action = prompt("What would you like to do? (add/view/delete/exit)")?.toLowerCase().trim();

        if (action === 'view') {
            viewTasks();
        } else if (action === 'add') {
            const newTask = prompt("Enter task description:");
            if (newTask !== null && newTask.trim() !== '') {
                tasks.push(newTask.trim());
                console.log(`Added: "${newTask.trim()}"`);
            } else if (newTask === null) {
                 console.log("Add cancelled."); 
            } else {
                 console.log("Task description cannot be empty."); 
            }

        } else if (action === 'delete') {
            viewTasks(); 

            if (tasks.length === 0) { 
                console.log("No tasks to delete.");
                alert("No tasks to delete."); 
                continue; 
            }

            const indexInput = prompt("Enter task number to delete:");

            if (indexInput === null) {
                console.log("Delete cancelled.");
                alert("Delete cancelled.");
                continue;             
            }

            const index = parseInt(indexInput) - 1;

            if (!isNaN(index) && index >= 0 && index < tasks.length) {
                const deletedTaskArray = tasks.splice(index, 1); 
                const deletedTaskDescription = deletedTaskArray[0]; 
                console.log(`Deleted: "${deletedTaskDescription}"`);
                alert(`Deleted: "${deletedTaskDescription}"`); 
            } else {
                console.log("Invalid task number entered.");
                alert("Invalid task number entered.");
            }

        } else if (action === 'exit' || action === null) { 
            console.log("Exiting. Goodbye!");
            alert('Exiting. Goodbye!');
            break;
        } else {
            console.log("Invalid action. Try: add/view/delete/exit");
            alert("Invalid action. Try: add/view/delete/exit");
        }
    }
}``  // --- Section 4: Tip Calculator ---
        function runCalculator() {
            alert("Welcome to the Tip Calculator!");

            const billAmountInput = prompt("Enter the bill amount:");
            if (billAmountInput === null) {
                alert("Tip calculation cancelled!");
                return;
            }

            const billAmount = Number(billAmountInput);
            if (isNaN(billAmount) || billAmount <= 0) {
                alert("Please enter a valid bill amount.");
                return;
            }

            const tipPercentageInput = prompt("Enter the tip percentage (e.g., 15 for 15%):");
            if (tipPercentageInput === null) {
                alert("Tip calculation cancelled!");
                return;
            }

            const tipPercentage = Number(tipPercentageInput);
            if (isNaN(tipPercentage) || tipPercentage < 0) {
                alert("Please enter a valid tip percentage.");
                return;
            }

            const tipAmount = (billAmount * tipPercentage) / 100;
            const totalAmount = billAmount + tipAmount;

            alert(`Bill Amount: $${billAmount.toFixed(2)}\nTip (${tipPercentage}%): $${tipAmount.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}`);
        }
  // --- Section 5: Login Simulation ---
        function LoginSimulation() {
            const users = [
                { username: "admin", password: "admin123" },
                { username: "user", password: "password" },
                { username: "guest", password: "guest123" },
                { username: "john", password: "john2024" },
                { username: "mary", password: "mary456" }
            ];

            alert("Welcome to Login Simulation!\nTry these credentials:\n• admin / admin123\n• user / password\n• guest / guest123");

            const username = prompt("Enter username:");
            if (username === null) {
                alert("Login cancelled!");
                return;
            }

            const password = prompt("Enter password:");
            if (password === null) {
                alert("Login cancelled!");
                return;
            }

            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                alert(`Access Granted! Welcome, ${username}!`);
            } else {
                const userExists = users.find(u => u.username === username);
                if (userExists) {
                    alert("Access Denied! Incorrect password.");
                } else {
                    alert("Access Denied! Username not found.");
                }
            }
        }
         // --- Section 6: Budget Tracker ---
        function BudgetTracker() {
            alert("Welcome to the Budget Tracker!");

            const incomeInput = prompt("Enter your monthly income:");
            if (incomeInput === null) {
                alert("Budget tracking cancelled!");
                return;
            }

            const income = Number(incomeInput);
            if (isNaN(income) || income < 0) {
                alert("Please enter a valid income amount.");
                return;
            }

            const expenses = [];
            let totalExpenses = 0;

            while (true) {
                const expenseInput = prompt("Enter an expense amount (or click Cancel to finish):");
                if (expenseInput === null) break;

                const expense = Number(expenseInput);
                if (isNaN(expense) || expense < 0) {
                    alert("Please enter a valid expense amount.");
                    continue;
                }

                const description = prompt("Enter expense description:");
                if (description === null || description.trim() === "") {
                    expenses.push({ amount: expense, description: "No description" });
                } else {
                    expenses.push({ amount: expense, description: description.trim() });
                }

                totalExpenses += expense;
            }

            const balance = income - totalExpenses;
            let message = `Income: $${income.toFixed(2)}\nTotal Expenses: $${totalExpenses.toFixed(2)}\nBalance: $${balance.toFixed(2)}\n\n`;

            if (balance > 0) {
                message += "You're within budget! ";
            } else if (balance === 0) {
                message += "You've used exactly your budget!";
            } else {
                message += "You are overspending!";
            }

            alert(message);

            if (expenses.length > 0) {
                console.log("--- Expense Breakdown ---");
                expenses.forEach((exp, index) => {
                    console.log(`${index + 1}. ${exp.description}: $${exp.amount.toFixed(2)}`);
                });
            }
        }
   // --- Section 7: Multiplication Game ---
        function MultiplicationGame() {
            alert("Welcome to the Multiplication Game for Kids!");

            const rounds = 5;
            let score = 0;

            for (let round = 1; round <= rounds; round++) {
                const num1 = Math.floor(Math.random() * 10) + 1;
                const num2 = Math.floor(Math.random() * 10) + 1;
                const correctAnswer = num1 * num2;

                const userAnswer = prompt(`Round ${round}/${rounds}: What is ${num1} × ${num2}?`);

                if (userAnswer === null) {
                    alert("Game cancelled!");
                    return;
                }

                const answer = Number(userAnswer);

                if (isNaN(answer)) {
                    alert("Please enter a valid number!");
                    continue;
                }

                if (answer === correctAnswer) {
                    alert("Correct");
                    score++;
                } else {
                    alert(`Incorrect. The correct answer is ${correctAnswer}.`);
                }
            }

            let finalMessage = `Game Over!\nYou got ${score} out of ${rounds} questions correct!\n\n`;

            if (score === rounds) {
                finalMessage += "Perfect score!";
            } else if (score >= rounds * 0.8) {
                finalMessage += "Excellent";
            } else if (score >= rounds * 0.6) {
                finalMessage += "Good";
            } else {
                finalMessage += "Keep practicing";
            }

            alert(finalMessage);
        }