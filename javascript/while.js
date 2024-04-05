let prompt = require('prompt-sync')();

let useNum;

let sum;
let num=0;

while (num>=0){
    sum += num;

    num = parseInt(prompt('Enter number: '));
    
    //continue condition NaN = Not a Numbers
    if(isNaN(num)){
        console.log('you entred the wrong kind of number');
        num = 0;
        continue;
    }

}

//display results 
console.log(`The sum is ${sum}`);