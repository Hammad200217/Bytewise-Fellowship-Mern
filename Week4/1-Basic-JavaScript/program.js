// Some practics related variables, data types, operators, and control structures in JavaScript
// vaiable declaration
let age = 20;
age = age + 2; 
// operator and operation
let a=10;
let b=2;
sum=a+b;
sub=a-b;
mul=a*b;
div=a/b
modulo= a%b;
exponention= a**b;
console.log(mul);
//NaN
// 0/0 is NaN Number, we doesn't add , subtract, multiply, or other operation

// Assignment operator
let n = 20;
 n += 1;
 n -=2;
n *= 2;
 console.log(n);
// uninary operator
let year= 2000;
year++; //icrement
year--; //decrement
    
// string
let name = "Hammad ALi";
role = 'WEB-Developer';
empty = '';
num = "2";
char= "m";

let firtname= "Hammad";
let lastname= "Ali";
 fullname= firtname + " " + lastname;

// Templete literals
let c=2;
d=14;
// console.log("total" + (c+d )+ "Rupees");
 console.log('total', ${c+d});

 // Control flow
//  conditional statemnet (if ,nested if-else, els,else-if)
// if 

let voter_age = 25;
if (voter-age >= 18){
    console.log("you can vote")
}
if(voter-age < 18){
    console.log(" You cannot vote");
}

// else and else if 

let voter1_age = 25;
if (voter-age >= 18){
    console.log("you can vote")
}
else if(voter1-age < 18){
    console.log(" You cannot vote");
}

// grading system example
let marks=70;

if(marks>=80){
    console.log("A+ grade");
}

else if(marks>=70){
    console.log("A+ grade");
}

else if(marks>=33){
    console.log(" you fail");
}
//  nested if else 
let number=70;

if(number>=33){
    console.log("you are pass");
    if(number>=80){
        console.log("you are A+ grade");
    }
    else if(number>=70){
        console.log("you are A grade");
    }
    else if(number>=60){
        console.log("you are B grade");
    }
    else if(number>=50){
        console.log("you are C grade");
    }
    else if(number>=40){
        console.log("you are D grade");
    }
    else if(number>=33){
        console.log("you are E grade");
    }
}

else if(number < 33){
    console.log("you ar failed");
}

// switch case
let day = 5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// loop (for, while, do-while)
// for loop
for(let i=1; i<=10; i++){
    console.log(i);
}
// while loop
let j=1;
while(j<=10){
    console.log(j);
    j++;
}
// do-while loop
let k=1;
do{
    console.log(k);
    k++;
}  
while(k<=10);

// alert and prompt
// alert
alert("Hello World");
// prompt
let entername = prompt("Enter your name");
console.log(entername);
//  basic DOM
// document.getElementById
let heading = document.getElementById("heading");
heading.style.color = "red";
heading.style.fontSize = "50px";
heading.style.fontFamily = "Arial";
// document.getElementsByClassName
let paragraph = document.getElementsByClassName("paragraph");
paragraph[0].style.color = "blue";
paragraph[0].style.fontSize = "20px";
paragraph[0].style.fontFamily = "Arial";
// document.getElementsByTagName
let heading2 = document.getElementsByTagName("h2");
heading2[0].style.color = "green";
heading2[0].style.fontSize = "30px";
heading2[0].style.fontFamily = "Arial";
// document.querySelector
let heading3 = document.querySelector("#heading3");
heading3.style.color = "orange";
heading3.style.fontSize = "40px";
heading3.style.fontFamily = "Arial";
// document.querySelectorAll
let paragraph2 = document.querySelectorAll(".paragraph2");
paragraph2[0].style.color = "purple";
paragraph2[0].style.fontSize = "20px";
paragraph2[0].style.fontFamily = "Arial";
// function
function greet(){
    console.log("Hello World");
}
greet();
// function with parameter
function greet2(name){
    console.log("Hello " + name);
}
greet2("Hammad");
// function with return
function add(a,b){
    return a+b;
}
let result = add(2,3);
console.log(result);
// function with return
function add(a,b){
    return a+b;
}





