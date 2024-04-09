const Person={ //object definition

    //left = key : right = vaule
    firstName : 'Alice', //data property

    
    get getName (){ //accessor property (getter)
        return this.firstName;
        //getters always return
    }, 
    
    //there must be a commor in between the accesors 

    //set method need a parameter
    set changeName(newName){

        this.firstName = newName; // assigning to new variable to newName
    }

   
}

Person.changeName = 'David';   //notice the the singal inverted comma

console.log(Person); // accessing the entire object
console.log(Person.firstName); // this is accessing data property
console.log(Person.getName);// accessing using getter methods

//console.log(Person.getName()) will return error because it is not a function
