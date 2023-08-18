// this is your main.js script
// let isLightOn = true;
// let isRaining = false;
// let isHungry = false;
// let isMarried = true;
// let truValue = 4 > 3; // true
// let falseValue = 4 < 3;

// console.log(typeof truValue);
// console.log(truValue);

console.log(3 > 2); // true, because 3 is greater than 2
console.log(3 >= 2); // true, because 3 is greater than 2
console.log(3 < 2); // false,  because 3 is greater than 2
console.log(2 < 3); // true, because 2 is less than 3
console.log(2 <= 3); // true, because 2 is less than 3
console.log(3 == 2); // false, because 3 is not equal to 2
console.log(3 != 2); // true, because 3 is not equal to 2
console.log(3 == "3"); // true, compare only value
console.log(3 === "3"); // false, compare both value and data type
console.log(3 !== "3"); // true, compare both value and data type
console.log(3 != 3); // false, compare only value
console.log(3 !== 3); // false, compare both value and data type
console.log(0 == false); // true, equivalent
console.log(0 === false); // false, not exactly the same
console.log(0 == ""); // true, equivalent
console.log(0 == " "); // true, equivalent
console.log(0 === ""); // false, not exactly the same
console.log(1 == true); // true, equivalent
console.log(1 === true); // false, not exactly the same
console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == NaN); // false, not equal
console.log(NaN === NaN); // false
console.log(typeof NaN); // number

console.log("mango".length == "avocado".length); // false
console.log("mango".length != "avocado".length); // true
console.log("mango".length < "avocado".length); // true
console.log("milk".length == "meat".length); // true
console.log("milk".length != "meat".length); // false
console.log("tomato".length == "potato".length); // true
console.log("python".length > "dragon".length); // false

// && ampersand operator example

const check = 4 > 3 && 10 > 5;
console.log(check);
console.log(4 > 3 && 10 < 5);
console.log(4 < 3 && 10 < 5);

// || pipe or operator, example

console.log(4 > 3 || 10 > 5);
console.log(4 > 3 || 10 < 5);
console.log(4 < 3 || 10 < 5);

let count = 0;
console.log(++count); // 1
console.log(count); // 1

let countNew = 0;
console.log(count++); // 0
console.log(count); // 1

// Ternary Operators

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

let padaKisa = false;
padaKisa
  ? console.log("Treba ti kabanica.")
  : console.log("Ne treba ti kabanica, nisi od šećera.");

// alert("Welcome to 30DaysOfJavaScript");

const now = new Date();
console.log(now);

const nowYear = new Date();
console.log(now.getFullYear()); // 2020

const nowMonth = new Date();
console.log(now.getMonth()); // 0, because the month is January,  month(0-11)

const nowAllTime = new Date(); //
console.log(now.getTime()); // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const nowLive = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`); // 4/1/2020 0:56

// DAY 3 EXERCISES

let firstName = "Andrej";
let lastName = "Jurić";
let country = "Croatia";
let age = 31;
let isMarried = false;

console.log("10" === 10);
console.log(parseInt("9.8") === 10);

console.log(2 < 4);
console.log(10 < 20);
console.log(30 > 15);

console.log(5 < 2);
console.log(6 < 3);
console.log(2 > 3);

console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 != "4");
console.log(4 == "4");
console.log(4 === "4");

let pythonLenght = "Python";
let jargonLenght = "Jargon";
console.log(pythonLenght.length != jargonLenght.length);

console.log(3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(!false);
console.log(!(4 > 3 && 10 < 12));

/* Exercises: Level 2 */

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// b = prompt("Type firsts number");
// h = prompt("Type second number");
// area = 0.5 * b * h;

// result = alert(`Result is: ${area}`);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

// let a = prompt("Enter side a");
// let b = prompt("Enter side b");
// let c = prompt("Enter side c");

// perimeter = Number(a) + Number(b) + Number(c);

// result = alert(`Result is: ${perimeter}`);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// let a = prompt("Enter length");
// let b = prompt("Enter width");

// area = Number(a) * Number(b);
// perimeter = 2 * (Number(a) + Number(b));

// result = alert(
//   `Length and width: ${area}, and perimeter of rectangle is: ${perimeter}.`
// );

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// let r = prompt("Enter radius:");

// area = Math.PI * Number(r) * Number(r);
// circumference = Number(2) * Math.PI * Number(r);
// result = alert(
//   `Area of a circle is ${area} and circumference of a circle is ${circumference}.`
// );

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// SLOPE: y = 2x - 2 odnosno formula je y = mx - 2 (m je slope)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// x1 = 2;
// y1 = 2;
// x2 = 6;
// y2 = 10;
// m = Number(y2 - y1) / Number(x2 - x1);
// slope = `Slope is ${m}.`;
// console.log(slope);

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// a = prompt("Enter hours");
// b = prompt("Enter rate per hour");
// res = Number(a) * Number(b);
// earning = alert(`Your weekly earning is: ${res}.`);

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.
// let myName = "Andrej";
// let nameLength = myName.length;
// if (nameLength > 7) {
//   console.log("Your name is long");
// } else {
//   console.log("Your name is short");
// }

// 11. Compare your first name length and your family name length and you should get this output.
// let myFirstName = "Andrej";
// let myLastName = "Jurić";

// if (myFirstName.length > myLastName.length) {
//   console.log(
//     "Your first name, Andrej is longer than your family name, Jurić."
//   );
// }

// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250;
// let yourAge = 31;

// let older = 250 - yourAge;
// console.log(`I am ${older} older than you.`);

// 13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

// let birthYear = prompt("Enter your birth year:");
// let currentAge = 2023 - birthYear;
// let allowedToDrive = 18 - currentAge;

// if (currentAge >= 18) {
//   console.log(`You are ${currentAge} old. You can drive.`);
// } else {
//   console.log(
//     `You are ${currentAge}. You will be allowed to drive in ${allowedToDrive} years. `
//   );
// }

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let numberOfYears = prompt("Enter number of years you live:");

// let seconds = numberOfYears * Number(31536000);
// console.log(`You live ${seconds} seconds.`);

// const nowLive = new Date();
// const year = now.getFullYear(); // return year
// const month = now.getMonth() + 1; // return month(0 - 11)
// const date = now.getDate(); // return date (1 - 31)
// const hours = now.getHours(); // return number (0 - 23)
// const minutes = now.getMinutes(); // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
