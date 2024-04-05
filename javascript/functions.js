const prompt = require('prompt-sync')();

let a = parseFloat(prompt("Enter number 1:"));

let b = parseFloat(prompt('Enter number 2:'));

let operator = prompt('Select either (+ - * /) opertator');

function calcSum(a,b){
    let string = "The final answer is:";
    let c = a + b;
    return string+ " " + c;
}

function calMultiple(a,b){
    let string = "The final answer is:";
    return string+ " " + a*b;
}


function calDivision(a,b){
    let string = "The final answer is:";
    return string+ " " + a/b;
}

function calMinus (a,b){
    let string = "The final answer is:";
    return string+ " " + a-b;
}
 let result = " ";

switch (operator){
    case "*":
    result = calMultiple(a,b);
    break;

    case "-":
    result = calMinus(a,b);
    break;

    case "/":
    result = calDivision(a,b);
    break;

    case "+":
    result = calcSum(a,b);
    break;

    default:
    result = "You chose the incorrect operator";
}
console.log(result);