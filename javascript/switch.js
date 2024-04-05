const prompt = require('prompt-sync')();
const operator = prompt('Enter either  (+ * - /)');

let results ;

const  num1 = parseFloat (prompt('Enter the first number'));
const  num2 = parseFloat (prompt('Enter the second number'));

switch (operator){

    case '+':
    result = num1 + num2;
    console.log(`${num1} + ${num2} = ${result}`);
    break;

    case '-':
    result = num1 - num2;
    console.log(`${num1} - ${num2} = ${result}`);
    break;

    case '/':
    result = num1 / num2;
    console.log(`${num1} / ${num2} = ${result}`);
    break;

    case '*':
    result = num1 * num2;
    console.log(`${num1} * ${num2} = ${result}`);
    break;

    case '^':
    result = num1 ** num2;
    console.log(`$(num1) ** ${num2} = ${result}`);
    break;
    
}
