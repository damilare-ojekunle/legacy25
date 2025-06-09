console.log("Hello World");

// interactive quiz
function loadQuiz(){
    const questions=[
        {question:"who was the president of Nigeria in 2019 ?", answer:"Mohammed Buhari"},
        {question:"what is a black man called in the states ?", answer:"nigga"},
        {question:"how many centimeters are there in a metre ?",answer:"100"},
        {question:"how many days makes february in a leap year ?", answer:"29"},
        {question:"at what degree centigrade/celsius does water boil ?", answer:"100"},
        {question:"how many days make a year ?", answer:"365"},
    ];
    let name=prompt("what is your name");
    let score=0;
    for (i=0;i<questions.length;i++) {
        let userAns=prompt(questions[i].question);
        if((userAns.trim()==questions[i].answer) )
            (score+=1, alert("correct"))
        else if (userAns.trim()!==questions[i].question)
            (alert("incorrect answer") );
            

        
    };
    
    
    let score1=(score/questions.length) * 100;
    alert(`${name} your scored ${score1}% in this quiz`);


    return 0

}

// Number Guessing Game
function clearOutput2() {
    result = document.getElementById("GuessingGameOutput");
    if (result.innerHTML === "Attempts: ") {
        alert("The guessing game output is already clear.");
        return;
    } else {
        document.getElementById("GuessingGameOutput").innerHTML = "Attempts: ";
    }
}
function loadGuess(){
    console.log("Starting the guessing game...");
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Random number is: " + randomNumber); 
    let attempts = 0;

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

    result = document.getElementById("GuessingGameOutput");
    result.innerHTML = "Attempts: " + attempts + "<br>Random Number: " + randomNumber;
}


// to-do list
  'use strict'

    let my_list=[];
    let current_task,task_no, task_index,attempts,max_attempts;
    
    const create_list= () => {
        max_attempts=100;
        for (attempts=0;attempts<max_attempts;attempts++){
            current_task=prompt("what do u want to add to your list");
            if (!current_task) break;
            my_list.push(current_task);
            
        };
        // console.log(my_list);
    };

    const add_list=()=>{
        max_attempts=10;
        for (attempts=0;attempts<max_attempts;attempts++){
        current_task=prompt("what do u want to add to your list");
        task_no= +prompt("what is the position of the task you are adding");
            // alert(typeof(task_no));
            task_index= task_no - 1;
            if (!task_no) break;
            
            my_list.splice(task_index,1,current_task);
        }
        console.log(my_list)
    }
    
    // alert(`${typeof(my_list)}`)
    const del_list= () =>{
            task_no= +prompt("what is the position of the task you want to delete");
            // alert(typeof(task_no))
            task_index= task_no - 1;
            my_list.splice(task_index,1);
            view_list();
    }


    const view_list=()=>{
        
            alert(`this is your list:${my_list}`);
            console.log(my_list);
    }
    const main=()=>{
        let choice;
        do{
            choice=prompt("what do you want to do? \n1. create tasks\n2. delete task\n3. view list\n4. add task\n5. exit");
            switch (choice) {
                case "1":
                    create_list();
                    break;
                case "2":
                    del_list();
                    break;
                case "3":
                    view_list();
                    break;
                case "4":
                    add_list();
                    break;
                case "5":
                    alert("Goodbye");
                    break;
                default:
                    alert("invalid choice.please choose 1, 2, 3, 4 or 5");

            }
        } while(choice!="5");
    };
    main();


    // bill-tip calculator

    function calc(){
        let totalBill;
        let Name= prompt("fill in your name")
        let bill=Number(prompt("enter your bill amount:"));
        let tip=Number(prompt("enter your tip percentage (%):"));
        let tipValue= tip/100 * bill;
        // let currency=prompt("what currency?");

        // do{
        //     currency=prompt("what currency? \n1. $\n2. £ \n3. € \n4. none of the above ")
        //     switch (currency){
        //          case "1":
        //             "$";
        //             break;
        //         case "2":
        //             "£";
        //             break;
        //         case "3":
        //             "€";
        //             break;
        //         case "4":
        //             alert("exiting");
        //             break;
        //         default:
        //             alert("invalid choice,please choose from the options");
        //     }
        // } while(currency!="4");
        
        totalBill= bill + tipValue;
        alert(`${Name}, \n Totalbill is: ${totalBill}`);
        console.log(`${Name}, \n Totalbill is:${totalBill}`);
        let result = document.getElementById("calcdisplay");
        result.innerHTML = Name + ", your total bill is " + totalBill;                                                                                                                                                                                                                                                                                                                                                            

    }

    
    function siteAccess(){
        let userDetails=[
            {username:"israelite" , answer:"power17"},
            {username:"gordon" , answer:"extercy"},
            {username:"deborah" , answer:"girlpower17"},
        ];
        alert("To login enter the foloing details \n1. username \n2. password");
        let Username=prompt("Enter your username");
        let Password=prompt("Enter your password");

        for (i=0;i< userDetails.length;i++){
            if ((Username===userDetails[i].username) && (Password===userDetails[i].answer))
                (alert("acces granted"))
            else if((Username!==userDetails[i].username) || (Password!==userDetails[i].answer))
                    (alert("check your username or password and try again"));
        };
        


    }
    

