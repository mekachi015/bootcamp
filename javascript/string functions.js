let userName = "Alice";
let message =" ";
let from = " ";



function sendMsg(){
    let message = "Welcome, " + userName;
    console.log(message);
}

sendMsg();

function showMessage (){
    let message ="Welcome," + userName
    userName = "mellisa";
    console.log(message + userName);
}

showMessage();
console.log(message, userName);


function sendMsg(from, text)
{
    from = "Unnonymous";
    text = "Hello world";

    return form + text;
}

