//INTRODUCTION TO JAVASCRIPT ASSIGNMENT 1 - BY ISAAC SAYEH

// 1. Creating variables to store my information
let myName = "Isaac Sayeh";
const myAge = 23;
let occupation = "Student";

// Displaying the above data in the console.
console.log(myName);                        // Isaac Sayeh
console.log(myAge);                         // 23
console.log(occupation === "Student");      // True



// 2. Arithmetic Operators... Mathematics is my favorite subject tho.
let firstNumber = 100;
let secondNumber = 50;

let sum = firstNumber + secondNumber;
let difference = firstNumber - secondNumber;
let product = firstNumber * secondNumber;
let quotient = firstNumber / secondNumber;

console.log("Sum: " + sum);                         // Sum: 150
console.log("Difference: " + difference);           // Difference: 50
console.log("Product: " + product);                 // Product: 5000
console.log("Quotient: " + quotient);               // Quotient: 2

// 3 & 4 Condtional Statements
// User should enter a number, if it is EVEN or ODD, a pop-up window will EVEN or ODD.


let randomNumber = document.getElementById("randomNumber");
let submitBTN = document.getElementById("submitBTN");

submitBTN.addEventListener("click", ()=>{
    
    // removing white space from the input value
   const inputValue = randomNumber.value.trim();
   console.log("Your input is " + inputValue);



   if(!isNaN(inputValue) && inputValue !== "") {
        console.log("Your input " + inputValue+ ", is a number");

        let isEven;
        isEven = inputValue % 2;
        console.log(inputValue + " divided by 2, remainder is " + isEven);

        if(isEven == 0){
            console.log("Your input is an EVEN number");
        } else {
            console.log("Your input is an ODD number")
        }
        // resetting the input field
        randomNumber.value = "";
   } else{
    console.log("Opps! Your input is not a number")
   }
});


// 5. Printing numbers with FOR LOOP
console.log("Printing with FOR LOOP")
for(let number = 1; number <= 10; number++){
    console.log(number);
}

// 6. Printing using WHILE LOOP
console.log("Printing with WHILE LOOP")
let countDown = 11;
while(countDown > 1){
    countDown--;
    console.log(countDown);
}

// ######## THIS SECTION WAS A BIT CHALLENGING ##############

// 7. Using FUNCTION to return squre values

function squareNumber(){
    let randNumb = document.getElementById("randNumb");
    console.log(randNumb.value);

    // removing white space from the input value
   const inputValue = randNumb.value.trim();
   console.log("Your input is " + inputValue);



   if(!isNaN(inputValue) && inputValue !== "") {
        console.log("Your input " + inputValue + ", is a number");

        // Declaring and multiplying the value
        let squareNum;
        squareNum = inputValue * inputValue;
        console.log("The square of " + inputValue + " is " + squareNum);

        randNumb.value = "";
   } else{
    console.log("Opps! Your input is not a number")
   }
};

// 8. Using Arrow Function
const inputONE = document.getElementById("inputONE");
const inputTWO = document.getElementById("inputTWO");
const viewAnswer = document.getElementById("viewAnswer");

function isANumber(value){
    return !isNaN(value) && value.trim() !== "";
}

viewAnswer.addEventListener("click", ()=>{
    
//     removing white space from the input value
const value1 = inputONE.value;
const value2 = inputTWO.value;

    if(isANumber(value1) && isANumber(value2)) {
        const product = value1 * value2;
        console.log(`The product of ${value1} and ${value2} is ${product}`);
    } else {
        console.log("Error! Make sure both inputs are number")
    }

});

// 9. Array
console.log("Looping through ARRAYS");
const fruits = ["Apple", "Grape", "Banana", "Orange", "Pearl"];
for(let i = 0; i < fruits.length; i++){
    console.log("Fruit: " + fruits[i]);
}

// JSON Parsing

console.log("OBJECTS")
const courseInfo = {
    "course": "JavaScript",
    "duration": 4,
    "intermediate": true
};

console.log("Course: " + courseInfo.course);
console.log("Duration: " + courseInfo.duration);

// ###############################################################

