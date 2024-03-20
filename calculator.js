//Declaring variables
let num1 = 2, num2 = 4;
let continueCalc = true;
// Importing the prompt-sync module
const prompt = require('prompt-sync')();

//Creating arithmetic functions
//Addition function
function add(num1, num2) {
    return `${num1} plus ${num2} equals ${num1 + num2}`;
}

//Subtraction function
function subtract(num1, num2) {
    return `${num1} minus ${num2} equals ${num1 - num2}`;
}

//Multiplication function
function multiply(num1, num2) {
    return `${num1} times ${num2} equals ${num1 * num2}`;
}

//Division function
function divide(num1, num2) {
    return `${num1} divided by ${num2} equals ${num1 / num2}`;
}


//Designing magic operation function using switch statement
function magicOp(num){
    switch (true){
        case num < 10:
            return "Magic dust makes the number grow: " + (num * 10);
        case num >= 10 && num <= 100:
            return "A magic gnome doubles the number: " + (num * 2);
        default:
            return "The number is too mighty for magic remains unchanged";
    }
}

//Integrating all together
console.log("Welcome to the Magic Calculator!");


//Looping for continuing
while (continueCalc) {
    let operation = prompt("Choose an operation: add, subtract, multiply, divide, magic, or exit : ");
    
//If the user chooses to exit
    if (operation === "exit") {
        console.log("Goodbye! Please do come again!");
        continueCalc = false;
    }

 //Handling normal operations
        if (operation !== "magic") {
            num1 = parseInt(prompt("Add first number : "));
            num2 = parseInt(prompt("Add second number : "));
    
//Validating input numbers
            if (isNaN(num1) || isNaN(num2)) {
                console.log("Evil wizard stole the numbers");
                continue;
            } else if (num2 === 0 && operation === "divide") {
                console.log("Cannot divide by zero. Try another operation");
                continue;
            }
        } else {
    
//Validating for magic operation
            num1 = parseInt(prompt("Enter your number : "));
            if (isNaN(num1)) {
                console.log("You need to enter a valid number");
                continue;
            }
        }
    

//Executing operations
    switch (operation) {
        case "add":
            console.log(add(num1, num2));
            break;
        case "subtract":
            console.log(subtract(num1, num2));
            break;
        case "multiply":
            console.log(multiply(num1, num2));
            break;
        case "divide":
            console.log(divide(num1, num2));
            break;
        case "magic":
            console.log(magicOp(num1));
            break;
        default:
            console.log("Please try again my friend!");
    }
}