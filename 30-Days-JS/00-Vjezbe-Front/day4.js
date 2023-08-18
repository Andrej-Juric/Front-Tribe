// this is your main.js script

//alert("Open the browser console whenever you work on JavaScript");
/*
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}

let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

// Switch More Examples
let dayUserInput = prompt("What day is today ?");
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}


// Exercises: Level 1

// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
let yourAge = prompt("Enter your age:");
let birthYear = 2023 - yourAge;
let isOldEnough = 18 - yourAge;

if (yourAge >= 18) {
  console.log("You are old enough to drive.");
} else {
  console.log(`You have to wait ${isOldEnough} years to drive.`);
}


// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

const myAge = 31;
const yourAge = prompt("Enter your age:");
let older = yourAge - myAge;
let younger = myAge - yourAge;

if (yourAge > myAge) {
  console.log(`You are ${older} years older than me.`);
} else if (yourAge < myAge) {
  console.log(`I am ${younger} years older than you.`);
} else {
  console.log("We are the same age.");
}

3. // If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways using if else ternary operator.



let a = 4;
let b = 3;

if (a > b) {
  console.log(`${a} is greater than ${b}.`);
} else if (a < b) {
  console.log(`${a} is less than ${b}`);
} else if ((a = b)) {
  console.log(`${a} is equal to ${b}`);
}

let c = 4;
let d = 3;

c > d
  ? console.log(`${c} is greater than ${d}.`)
  : console.log(`${c} is less than ${d}`);


// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = prompt("Enter a number");

if (number % 2 == 0) {
  console.log("The numer is even.");
} else {
  console.log("The number is odd.");
}


// Exercise Level 2

// Write a code which can give grades to students according to theirs scores:

let userInput = prompt("Enter student score:");

switch (true) {
  case userInput >= 80:
    console.log("Your grade is A. Congratulations!");
    break;

  case userInput >=70:
    console.log("Your grade is B.");
    break;

  case userInput >=60:
    console.log("Your grade is C.");
    break;

  case userInput >=50:
    console.log("Your grade is D.");
    break;

  case userInput >=0:
    console.log("Your grade is F. That is sad :( ");
    break;
}



// Check if the season is Autumn, Winter, Spring or Summer. If the user input is

let seasonInput = prompt("Enter month:");
let month = seasonInput.toLowerCase();

switch (month) {
  // December ,January, February
  case "december":
  case "january":
  case "february":
    console.log("Winter");
    break;
  // March, April, May
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  // June, July, August
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  // October, September, November
  case "october":
  case "september":
  case "november":
    console.log("Autumn");
    break;
  default:
    console.log("Something went wrong.");
}

// Exercises: Level 3

// Write a program which tells the number of days in a month.

let monthInput = prompt("Enter month:");
let month = monthInput.toLowerCase();

switch (month) {
  case "january":
    console.log("January has 31 days");
    break;

  case "february":
    console.log("February has 28 days");
    break;
}

*/

let inputName = prompt("Unesi svoje ime");
let firstName =
  inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();

let inputAge = prompt("Koliko imaš godina?");
let isOldEnough = 18 - inputAge;

if (inputAge >= 18) {
  console.log(`Hi ${firstName}. You are old enough to drive.`);
} else {
  console.log(`${firstName}, you have to wait ${isOldEnough} years to drive.`);
}
