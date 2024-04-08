let school = {
    name: "Secunda Secondary School",
    established : "1999",
    location: "Mpumalanga",
    learners: 10000,

    //start of display function
    displayinfo : function (){ //backticks so that you do not need concatenation
        console.log(`The name of the school is ${school.name} ${"\n"}
        located at: ${school.location} ${"\n"}
        established in: ${school.established} ${"\n"} 
        number of learners: ${school.learners}`);// ${"\n"} was used to break lines within the backticks
    },//end of display function - dont forget the comma

    //Calling the school name a different way - hard coding
    hardData: function(){
        console.log("The name of the school is " +school.name + "\n")
        console.log("The year it was established is:" + school.established + "\n ")
        console.log("And it is located: " + school.established +"\n" +
    " With a number of " + school.learners + " Total");
    }, //end of hard coding data

    notationData: function() {
        console.log ("The name of the school is: " + school['name'] );
    }

}

//access functions 
school.displayinfo() //fucntion call
school.hardData()
school.notationData()
