let callback = (n) => {
  return n ** 2;
};

function cube(callback, n) {
  return callback(n) * n;
}
console.log(cube(callback, 5));

// Higher order function returning an other function
// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };
//   return doSomething;
// };
// console.log(higherOrder(2)(3)(10));
//

// function sayHello() {
//   return "Hello,";
// }
// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");

// // Higher order function returning an other function
// const higherOrder = (n) => {
//   const doSomething = (m) => {
//     const doWhatEver = (t) => {
//       return 2 * n + 3 * m + t;
//     };
//     return doWhatEver;
//   };
//   return doSomething;
// };
// console.log(higherOrder(2)(3)(10));

// const numbers = [1, 2, 3, 4];

// const sumArray = (arr) => {
//   let sum = 0;
//   arr.forEach(function (element) {
//     sum += element;
//   });
//   return sum;
// };
// console.log(sumArray(numbers));
// syntax
// function callback() {
//   // code goes here
// }
// setTimeout(callback, duration); // duration in milliseconds

// function sayHello() {
//   console.log("Hello");
// }
// setTimeout(sayHello, 2000); // it prints hello after it waits for 2 seconds.
/*
let bookings = [];

let createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  let booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);

let flight = "LH234";
let andrej = {
  name: "Andrej Jurić",
  passport: 24659895,
};

let checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  if ((passenger.name = "Mr." + passenger.name)) {
    alert("Check in");
  } else {
    alert("Wrong passport");
  }
};
checkIn(flight, andrej);
console.log(flight);
console.log(andrej);
*/
// forEach
let arr = [1, 2, 3, 4, 5];
arr.forEach(function (element, index, arr) {
  console.log(index, element, arr);
});
// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(`Element: ${element}, Index: ${index}, Array: ${arr}`);
});
// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(element));

// suma
let sum = 0;
arr.forEach((element) => (sum = sum + element));
console.log(sum);

// forEach
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countries.forEach((element) => console.log(element.toUpperCase()));

// map
const numbers = [1, 2, 3, 4, 5];
const numbersSquare = numbers.map((num) => num * num);
console.log(numbersSquare);

let names = ["Asabeneh", "Mathias", "Elias", "Brook"];

let namesUpper = names.map((element) => element.toUpperCase());
console.log(namesUpper);

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesEndsByia);

const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Lidiya", score: 98 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const scoresGreaterEighty = scores.filter((score) => score.score > 80);
console.log(scoresGreaterEighty);

// reduce
const numbersReduce = [1, 2, 3, 4, 5];
const sumReduce = numbersReduce.reduce((acc, cur) => acc + cur, 0);

console.log(sum);

// sort
const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort());

const numbersSort = [9.81, 3.14, 100, 37];
// Using sort method to sort number items provide a wrong result. see below
console.log(numbersSort.sort());
numbersSort.sort(function (a, b) {
  return a - b;
});

console.log(numbersSort);

numbersSort.sort(function (a, b) {
  return b - a;
});
console.log(numbersSort);

// EXERCISE lvl 1
/*
const countriesQuest = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const namesQuest = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbersQuest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const productsQuest = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 3. Use forEach to console.log each country in the countries array.

countriesQuest.forEach((element, index, arr) => console.log(element));

// 4. Use forEach to console.log each name in the names array.
namesQuest.forEach((element, index) => console.log(element));

// 5. Use forEach to console.log each number in the numbers array.
numbersQuest.forEach((element, index) => console.log(element));

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
let upperCountries = countriesQuest.map((element) => element.toUpperCase());
console.log(upperCountries);

// 7. Use map to create an array of countries length from countries array.
let lengthCountries = countriesQuest.map((element) => element.length);
console.log(lengthCountries);

// 8. Use map to create a new array by changing each number to square in the numbers array
let squaredArray = numbersQuest.map((element, index) => element * element);
console.log(squaredArray);

// 9. Use map to change to each name to uppercase in the names array
namesQuest.map((element) => console.log(element.toUpperCase()));

// 10. Use map to map the products array to its corresponding prices

// 11. Use filter to filter out countries containing land.
let filteredLand = countriesQuest.filter((element) => element.includes("land"));
console.log(filteredLand);

// 12. Use filter to filter out countries having six character.
let filteredSixChar = countriesQuest.filter((element) => element.length === 6);
console.log(filteredSixChar);

// 13. Use filter to filter out countries containing six letters and more in the country array.
let filteredMoreChars = countriesQuest.filter((element) => element.length >= 6);
console.log(filteredMoreChars);

// 14. Use filter to filter out country start with 'E';
let filteredStartE = countriesQuest.filter((element) =>
  element.startsWith("E")
);
console.log(filteredStartE);

// 15. Use filter to filter out only prices with values.
let filteredWithValues = productsQuest.filter((element) => element.price > 0);
console.log(filteredWithValues);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
let list = [10, 20, 30, "andrej", "mihaela"];
function getStringLists(arr) {
  return arr.filter((element) => element === element.toString());
}
console.log(getStringLists(list));

// 17. Use reduce to sum all the numbers in the numbers array.

let suma = 0;
numbersQuest.reduce((acc, curr) => (suma = acc + curr), 0);
console.log(suma);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let concanateCountries = countriesQuest.reduce((acc, curr) => acc + curr, []);
console.log(concanateCountries);

// 19. Explain the difference between some and every
// 20. Use some to check if some names' length greater than seven in names array

let someNames = namesQuest.some((element) => element.length > 7);
console.log(someNames);

// 21. Use every to check if all the countries contain the word land

let everyCountriesContainLand = countriesQuest.every((element) =>
  element.includes("land")
);
console.log(everyCountriesContainLand);

// 22. Explain the difference between find and findIndex.
// 23. Use find to find the first country containing only six letters in the countries array
let findCountrySixLetter = countriesQuest.find(
  (element) => element.length === 6
);
console.log(findCountrySixLetter);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array

let findIndexCountries = countriesQuest.findIndex(
  (element) => element.length === 6
);
console.log(findIndexCountries);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findIndexNorwayPosition = countriesQuest.findIndex((element) =>
  element.includes("Norway")
);
console.log(findIndexNorwayPosition);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findIndexRussiaPosition = countriesQuest.findIndex((element) =>
  element.includes("Russia")
);
console.log(findIndexRussiaPosition);

//
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
let eurToUsd = 1.1;
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);
*/
const countriesList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const countriesQuest = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "Iceland",
  "Island",
];
const namesQuest = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbersQuest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const productsQuest = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// exercise lvl 2

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

let totalPrice = productsQuest
  .filter((element) => element.price > 0)
  .reduce((acc, curr) => acc + curr.price, 0);

console.log(totalPrice);

// 2. Find the sum of price of products using only reduce reduce(callback))

let sumOfPrice = productsQuest.reduce((acc, curr) => acc + curr.price, 0);
console.log(sumOfPrice);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries(arr) {
  let patternLand = arr.filter((element) => element.includes("land"));
  let containStan = arr.filter((element) => element.includes("stan"));
  return `Countries that have "land" in word: ${patternLand} 🔺 Countries that contain "stan" ${containStan}.`;
}
console.log(categorizeCountries(countriesList));

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
console.log(countriesList);
function countStartingLetters(arr) {
  const letterCount = {};
  let firstLetter = arr
    .map((element) => element[0])
    .reduce((acc, curr, index) => acc + curr + index, letterCount);

  return firstLetter;
}
console.log(countStartingLetters(countriesList));
//
let blabla = countriesList.map((element) => element[0]);
console.log(blabla);
