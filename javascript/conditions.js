const gpa = 100;

pass_mark = 50;

const exp = 70;
const dist =85;
const avg = 50;
const fail = 49;
const dnw = 0;

if (gpa<= dnw)
{
    console.log("Do not write");
} else if (gpa<= fail){
    console.log("You failed to achieve the pass mark");
} else if (gpa >= avg && gpa <= exp){
    console.log("You have gotten an average mark")
} else if (gpa >= exp && gpa <dist){
    console.log("you have gotten exemption");
}else
{console.log("youve got a distinction")};