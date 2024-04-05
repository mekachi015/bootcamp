let prompt = require("prompt-sync")();

let age;

age = prompt("enter your age");

function showMovie(){
     while ((checkAge(age)))
     {
       console.log("Playing movie");
     }
}

function forLoops(){
    let d = 0;
    let i = 200000000;
    
    for (i=200000; i > d; i--)
    {
        console.log("Access granted");
        console.log("Playing a movie");
    }
}

function checkAge(age){
    if (age < 18)
    {
        console.log("Access Denied");
    } else {
    console.log("Access Granted");
    }
}

let result = checkAge(age);
showMovie();
console.log(result)