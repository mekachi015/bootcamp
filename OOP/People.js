let people = {
    gender: 'male'
}

let person = Object(people);

person.name = "John";
person.age = '22'
person.nationality = "South African";


//now we use th key (from attributes) to get all properties
for (let key in person) //fetches all the contents of the class
{
    console.log(key); //prints the attribute of the class

    console.log(person[key]) //displaying the contents of said class
}