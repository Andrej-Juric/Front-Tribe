/*
function functionName() {
  // code goes here
}

functionName();

function printFullName() {
  let firstName = "Andrej";
  let lastName = "Jurić";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}

printFullName(); // calling a function

function sumTwoNumbers(numberOne, numberTwo) {
  let sum = numberOne + numberTwo;
  console.log(sum);
}
sumTwoNumbers(20, 50);

// Let us access the arguments object

// function sumAllNums() {
//   console.log(arguments);
// }
// sumAllNums(1, 2, 3, 4);

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 10, 20));

const square = function (n) {
  return n * n;
};
console.log(square(2));

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};
console.log(changeToUpperCase(countries));

function calculageAge(birthYear, currentYear = 2023) {
  let age = currentYear - birthYear;
  return age;
}
console.log(calculageAge(1991));

// Exercises: Level 1

// 1. Declare a function fullName and it print out your full name.

function fullName() {
  let firstName = "Andrej";
  let space = " ";
  let lastName = "Jurić";
  let printName = firstName + space + lastName;
  console.log(printName);
}
fullName();

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(fullName("Andrej", "Jurić"));

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(firstNumber, secondNumber) {
  return (sum = firstNumber + secondNumber);
}
console.log(addNumbers(2, 8));

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width) {
  return (area = length * width);
}
console.log(areaOfRectangle(5, 5));

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width) {
  return (perimeter = 2 * (length + width));
}
console.log(perimeterOfRectangle(10, 5));

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length, width, height) {
  return (volume = length * width * height);
}
console.log(volumeOfRectPrism(2, 3, 4));

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function areaOfCircle(r) {
  return (area = Math.PI * r * r);
}
console.log(areaOfCircle(2));

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r) {
  return (circumference = 2 * Math.PI * r);
}
console.log(circumOfCircle(2));

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function calculateDensity(mass, volume) {
  return (density = mass / volume);
}
console.log(calculateDensity(50, 20));

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function calculateSpeed(totalDistance, totalAmountOfTime) {
  console.log(
    `If you are driving ${totalAmountOfTime}km/h, you will pass ${totalDistance} km.`
  );
  return (speed = totalDistance / totalAmountOfTime);
}
console.log(calculateSpeed(50, 10));

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculateWeight(mass, gravity) {
  return (weight = mass * gravity);
}
console.log(calculateWeight(25, 5));

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celsius) {
  return (fahrenheit = celsius * (9 / 5) + 32);
}
console.log(convertCelsiusToFahrenheit(27));

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function calculateBMI(weight, height) {
  return (bmi = weight / (height * height));
}
console.log(calculateBMI(85, 1.78));

if (bmi < 18.5) {
  console.log(`Your BMI is ${bmi} and you are underweight.`);
} else if (bmi > 18.5 && bmi < 24.9) {
  console.log(`Your BMI is ${bmi} and you are normal.`);
} else if (bmi > 25 && bmi < 29.9) {
  console.log(`Your BMI is ${bmi} and you are overweight.`);
} else {
  `Your BMI is ${bmi} or more. Eat less.`;
}

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  switch (month) {
    // December ,January, February
    case "december":
    case "january":
    case "february":
      return "Winter";

    // March, April, May
    case "march":
    case "april":
    case "may":
      return "Spring";

    // June, July, August
    case "june":
    case "july":
    case "august":
      return "Summer";

    // October, September, November
    case "october":
    case "september":
    case "november":
      return "Autumn";

    default:
      return "Something went wrong.";
  }
}
console.log(checkSeason("december"));

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(numOne, numTwo, numThree) {
  let largest = 0;
  if (numOne >= numTwo && numOne >= numThree) {
    largest = numOne;
  } else if (numTwo >= numOne && numTwo >= numThree) {
    largest = numTwo;
  } else {
    largest = numThree;
  }
  return largest;
}
console.log(findMax(1, 20, 3));

// Exercises: Level 2

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c) {
  return (equation = a * x + b * y + c);
}

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
let array = [1, 2, 3, 4, 5];
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray(array);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  return (format = `${day}/${month}/${year}  ${hour}:${minutes}`);
}
console.log(showDateTime());

// 5. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(a, b) {
  return ([a, b] = [b, a]);
}
console.log(swapValues(1, 2));

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["andrej", "mihaela", "stipo"]));

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
  let capitalized = [];
  for (let i = 0; i < arr.length; i++) {
    capitalized.push(arr[i].toUpperCase());
  }
  return capitalized;
}
console.log(capitalizeArray(["andrej", "mihaela", "stipo"]));

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(arr) {
  let added = [1, 2, 3];
  for (let i = 0; i < arr.length; i++) {
    added.push(arr[i]);
  }
  return added;
}
console.log(addItem([4]));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(arr, index) {
  if (index >= 0 && index < arr.length) {
    arr.splice(index, 1);
  }
  return arr;
}

let originalArray = [10, 20, 30, 40, 50];
let indexToRemove = 2;
let modifiedArray = removeItem(originalArray, indexToRemove);
console.log(modifiedArray);

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}

console.log(sumAll([1, 5]));

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(arr) {
  let sumOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOdd += arr[i];
    }
  }
  return sumOdd;
}

console.log(sumOfOdds([1, 2, 3, 4, 5, 10]));

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(arr) {
  let sumEven = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEven += arr[i];
    }
  }
  return sumEven;
}
console.log(sumOfEven([1, 2, 3, 4, 5, 10]));

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

function evensAndOdds(arr) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  return { even: even, odd: odd };
}
console.log(evensAndOdds([100]));

//14. Write a function which takes any number of arguments and return the sum of the arguments

function sumNum() {
  let total = Array.prototype.slice.call(arguments).reduce(function (a, b) {
    return a + b;
  }, 0);
  return total;
}
console.log(sumNum(5, 6, 8, 1));

// 15. Write a function which generates a randomUserIp.
let randomNames = [
  "Harry",
  "Ross",
  "Bruce",
  "Cook",
  "Carolyn",
  "Morgan",
  "Albert",
  "Walker",
  "Randy",
  "Reed",
  "Larry",
  "Barnes",
  "Lois",
  "Wilson",
  "Jesse",
  "Campbell",
  "Ernest",
  "Rogers",
  "Theresa",
  "Patterson",
  "Henry",
  "Simmons",
  "Michelle",
  "Perry",
  "Frank",
  "Butler",
  "Shirley",
];
function randomUserIp() {
  let randomUser = [];
  for (let i = 0; i <= 0; i++) {
    let result = randomNames[Math.floor(Math.random() * randomNames.length)];
    randomUser.push(result);
  }
  return randomUser;
}
console.log(randomUserIp());

// 16. Write a function which generates a randomMacAddress

function genMAC() {
  let hexDigits = "0123456789ABCDEF";
  let macAddress = "";
  for (let i = 0; i < 6; i++) {
    macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
    macAddress += hexDigits.charAt(Math.round(Math.random() * 15));
    if (i != 5) macAddress += ":";
  }

  return macAddress;
}
console.log(genMAC());

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
  let hexChar = "0123456789abcdef";
  let hexNumber = "#";
  for (let i = 0; i < 6; i++) {
    hexNumber = hexNumber + hexChar.charAt(Math.round(Math.random() * 15));
  }
  return hexNumber;
}
console.log(randomHexaNumberGenerator());

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function userIdGenerator() {
  let randomCharId =
    "0123456789abcdefghijklmnoprstuvxyzABCDIFGJHKLMNOPQRSTUWXYZ";
  let randomID = "";
  for (let i = 0; i < 7; i++) {
    randomID = randomID + randomCharId.charAt(Math.round(Math.random() * 15));
  }
  return randomID;
}
console.log(userIdGenerator());

// Exercises: Level 3
// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
function usersIdGenerator() {
  let numberOfCharacters = prompt("Enter number of characters");
  let numberOfId = prompt("");
  let arrayId = [];
  // console.log(numberOfCharacters);
  let randomID = " ";
  for (let j = 0; j < numberOfId; j++) {
    // let randomID = "";
    for (let i = 0; i < numberOfCharacters; i++) {
      let hexChar = "0123456789abcdef";
      randomID = randomID + hexChar.charAt(Math.floor(Math.random() * 16));
    }
    arrayId.push(randomID);
  }
  // console.log(randomID, "TEST");
  return randomID;
}
console.log(usersIdGenerator());
*/
// 2. Write a function name rgbColorGenerator and it generates rgb colors.

function rgbColorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r},${g},${b})`;
  return rgb;
}
const RgbColor = rgbColorGenerator();
console.log(RgbColor);

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

let arrayOfHexaColors = [];
function generateRandomHexadecimal() {
  const length = 6;
  let result = "";

  const characters = "0123456789ABCDEF";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  arrayOfHexaColors.push(result);
  return "#" + result;
}

const randomHexadecimal = generateRandomHexadecimal();
console.log(randomHexadecimal);
console.log(arrayOfHexaColors);

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
let arrayOfRgbColors = [];

function randomColorGenerator() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = `rgb(${r},${g},${b})`;
  let rgbArray = rgb;
  arrayOfRgbColors.push(rgbArray);

  return rgb;
}
console.log(randomColorGenerator());
console.log(arrayOfRgbColors);

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
// #C9143C
// C je u tablici 12 * 16 = 192 i + 9 = prvi par u rgb (ide se dva po dva)
// rgb(201,20,60)

function convertHexaToRgb(hex) {
  let A = 10;
  let B = 11;
  let C = 12;
  let D = 13;
  let E = 14;
  let F = 15;

  let hex = hex.substring(0, 2);
  console.log(hex);
  return hex;
}

console.log(convertHexaToRgb("C9143C"));
