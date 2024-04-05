let courses = ["Javascript", "Java", "Angular", "React"];

//courses.length = 10;

courses[4] = "Typescript";
courses[5] = "Vue";

console.log("number of courses available " + courses.length); 

console.log(typeof courses);

//injecting multiple values 
courses.push("C++", "flutter", "C#", "Python");
console.log(courses);

let faculty= courses.toString();

console.log(typeof faculty);
console.log("courses as a string " + faculty);

console.log(faculty.toUpperCase());

console.log(`courses are : ${courses instanceof Array}`)