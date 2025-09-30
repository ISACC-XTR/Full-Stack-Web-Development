

// JAVASCRIPT LEARNING PATH

// Module 1: Core Conceppts
// 1. Variable and Data types
// 2. Operators and Expressions
// 3. Condtional Statements
// 4. Loops
// 5 Functions

// 1. Variable are containers for storing data.
// There are three ways to declare variables:
let name = "Isaac"; //variable can be reassigned
const age = 23;
var university = "Starz"; // older way (avoid in modern JS)

// 2. Data types:
// There are two types of data types
// i. Primitive Types
const string = "Hello World!";      //String
const number = 50;                  // Number
const boolean = true;               // Boolean
const empty = null;                 // Null
const notDefined = undefined;       // Undefined

// ii. Reference Types
const array = [1, 2, 3];
const object = {
    name: "Isaac Sayeh",
    age: 24
}

// Exercise One:
/*#######
    1. Create a variable for your name using const
    2. Create a variablel for your age using let
    3. Create an object with your favorite hobbies
########*/


// 1. 
const myName = "Isaac Sayeh";
let myAge = 24;
const myHobbies = {
    hobby1: "Playing games",
    hobby2: "Learning programming languages",
    hobby3: "listening to music"
}


// 2. OPERATORS
// Arithmatic operators
let sum = 10 + 5;                // 15
let difference = 10 - 5;        // 5
let product = 10 * 5;           // 50
let quotient = 10 / 5;          // 2

// Comparison operators
console.log(10 > 5);            // true
console.log(10 === 10);         // true (strict equality)
console.log(10 != 5);           // true

//Logical operator
console.log(true && false);         // AND - false
console.log(true || false);         // OR - true
console.log(!true);                 // NOT - false

// 3. Condittional Statements
// Conditional statements let your code make decisions.
// if/else

let temperature = 25;
if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature > 20) {
    console.log("It's warm outside!");
} else {
    console.log("It's cold outside!");
}


// 4. Loops
// Loops let you execute the same code multiple times.
// The three main types of loops

// 1. for loop
// for (initialization; condition; increment){
//     // code to repeat
// }




//Example: Counting from 1 to 5

for (let i = 1; i < 5; i++){
    console.log("Count: " + i);
}


//while loop - repeats while a condition is true.
// Example: Count from 1 to 4.
let count = 1;
while (count <= 4){
    console.log("While count: " + count);
    count++; 
}

// 3. do...while loop: Runs aat least oce, then repeats while condition is true.
// Example: 
let num = 10;
do {
    console.log("Number: " + num);
    num++;
} while(num < 14);


//Exercise

for(let result = 0; result <= 4; result++){
    console.log("This is the result: " + result);
}

let even = 2;
 while(even <= 10){
    console.log("This number is even:" + even);
    even += 2;
 }

 let countDown = 5;
 do {
    console.log("Count Down:" + countDown);
    countDown--;
 } while (countDown >= 1);

 for(let odd = 1; odd <= 9; odd += 2){
    console.log("Odd numbers: "+ odd)
 }

 const clients = ["Alice", "Bob", "Charlie", "Diana"];
 for(let i = 0; i < clients.length; i++){
    console.log(`Hello ${clients[i]}!`);
 }


 // Array
 // Arrays are ordered lists of data.

 const fruit = ["apple", "banana", "orange"];
 const integers = [1, 2, 3, 4, 5];
 console.log(integers[0]+integers[1])
 const mixed = ["hello", 34, true, null];

 //accessing arrays of loop method
 for (let lenght = 0; length < fruit.length; length++){
    console.log(fruit[length])
 }

 //for...of loop
 for (fruits of fruit){
    console.log("fruit: " + fruits)
 }

 let sum2 = 0;
 for (let i = 0; i < integers.length; i++){
    sum += integers[i];
    console.log(sum)
 }



//  const average = sum/integers.length;
//  console.log(average)