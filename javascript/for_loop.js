let courses = ["Javascript", "Java", "Angular", "React"];

let len = courses.length;
let space = " ";

for (let i = 0; i < len; i++ )
{
   courses[i]+= space;
}

console.log(courses);

const days = 5;

for (let i = 1; i < days; i++)
{
    for (let p= 0 ; p < len; p++)
    {
        console.log(courses[p])
    }

    console.log(courses[i]);
}