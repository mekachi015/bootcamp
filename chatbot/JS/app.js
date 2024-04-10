function talk(){
//Think about key : value

    var know = {
        "Hello" : "Hi there &#128540", //check hexahtml - emoji to hexadecimal
        "Who are you?" : "My name is Alice",
        "How are you?" : "I am good :-)",
        "What can i do for you" : "Give us a follow and like!",
        "Your followers?" : "I have a 1000 more than you do :-)",
        "Okay" : "Thanks for the conversation",
        "Bye" :"Okay, Meet again soon, nice chattiing to you"
    }

    var user =document.getElementById('userBox').value; ///get user input

    document.getElementById('ChatLog').innerHTML = user + "<br>"

    if (user in know)
    {
        document.getElementById('ChatLog').innerHTML = know[user] + "<br>"
    }

    else {
        document.getElementById('ChatLog').innerHTML = "Sorry I dont  understand what you mean <br>"
    }
}