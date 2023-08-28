// import { countries } from "./countries.js";
// console.log(countries);
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')
/*
const arr = [];
console.log(arr);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
const animalProducts = ["milk", "meat", "butter", "yoghurt"];
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];

let lastIndex = countries.length - 1;
console.log(countries[lastIndex]);
countries[0] = "Croatia";
console.log(countries);
console.log(countries[0]);

// Print the array and its length

console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

console.log("Fruits:", fruits);
console.log("Number of fruits:", fruits.length);

console.log("Vegetables:", vegetables);
console.log("Number of vegetables:", vegetables.length);

console.log("Animal products:", animalProducts);
console.log("Number of animal products:", animalProducts.length);

console.log("Web technologies:", webTechs);
console.log("Number of web technologies:", webTechs.length);

console.log("Countries:", countries);
console.log("Number of countries:", countries.length);
// modificiram array countries, na 0 stavljam croatia
countries[0] = "Croatia";
console.log(countries[0]);

let js = "JavaScript";
let charsInJavaScript = js.split("");
console.log(charsInJavaScript);

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");

console.log(companies);

console.log(fruits[0]);
console.log(fruits.length - 1);
let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

console.log(lastFruit);


let firstList = [1, 2, 3];
let secondList = [4, 5, 6];
let thirdList = firstList.concat(secondList);

console.log(thirdList);
console.log(thirdList.length);

//indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
console.log(thirdList.indexOf(1));

// let us check if a banana exist in the array
const fruits = ["banana", "orange", "mango", "lemon"];
let index = fruits.indexOf("banana");

if (index === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}


let arrayMethods = [
  "Slice",
  "Splice",
  "push",
  "pop",
  "shift",
  "unshift",
  "reverse",
  "sort",
];
arrayMethods.shift();
arrayMethods.push("Andrej");
arrayMethods.unshift("newUnshift");
arrayMethods.sort();
arrayMethods.push("at");
console.log(arrayMethods);

let arrayNumbers = [1, 2, 3, 4, 5];
arrayNumbers.push(6);
console.log(arrayNumbers);

// array of arrays
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
let fullStack = [frontEnd, backEnd];
console.log(fullStack);

// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
let arrayFullStack = frontEnd.concat(backEnd);
console.log(arrayFullStack);

const letters = ["a", "b", "c"];
let alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);

// The at() method takes an integer value and returns the item at that index
const array1 = [5, 12, 8, 130, 44];
let index = 3;
console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`
);



const arr = [10, 20];
const a = arr.push(30);
console.log(arr);
console.log(a);

const b = arr;
console.log(b);
b.slice(0, 2);
console.log(b);

const myFish = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish.pop();
console.log(myFish);

console.log(myFish.copyWithin(1, 0));
*/
let emptyArray = [];
let five = [1, 2, 3, 4, 5];

console.log(five.length);
console.log(five.indexOf(1));

let mixedDataTypes = [1, 2, 3, "Andrej", "FrontTribe", "Akademija"];
console.log(mixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0]);
// console.log(itCompanies[3]);
// console.log(itCompanies[itCompanies.length - 1]);

let upperCase = itCompanies.toString().toLocaleUpperCase();
console.log(upperCase);

console.log(itCompanies.toString(), "are big IT companies.");
console.log(itCompanies.includes("Facebook"));

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if (itCompanies.includes("Facebook")) {
  console.log("The company exist");
} else {
  console.log("A company is not found");
}

// 14. Filter out companies which have more than one 'o' without the filter method
let filter = itCompanies.slice(0);
console.log(filter);

// 15. sort

console.log(itCompanies.sort());

// 16. Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18. Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 19. Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(2, 4));

// 20. Remove the first IT company from the array

console.log(itCompanies);

itCompanies.shift();
console.log(itCompanies);

// 21. Remove the middle IT company or companies from the array

itCompanies.splice(2, 2);
console.log(itCompanies);

// 22. Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// 23. Remove all IT companies
itCompanies = [];
// itCompanies.splice(0);
console.log(itCompanies);

// EXERCISE LEVEL 2

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

let regex = /\p{P}/gu;
let result = text.replace(regex, "");
console.log(result);

let newArrayText = result.split(" ");
console.log(newArrayText);

console.log(text);
console.log(text.length);

let arrayText = text.split(" ");
console.log(arrayText);
console.log(arrayText.length);

// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

console.log(shoppingCart);

let allergicToHoney = false;
if (allergicToHoney == true) {
  shoppingCart.pop();
}
console.log(shoppingCart);

shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// console.log(countries);

// if (countries.includes("Ethiopia")) {
//   console.log("Ethiopia");
// } else {
//   countries.push("Ethiopia");
// }

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]; // List of web technologies

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercise: Level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// sort
console.log(ages.sort());
console.log(Math.min(...ages));
console.log(Math.max(...ages));

// median age
let medianAge = (20 + 25) / 2;
console.log(medianAge);

// avarage age
const initialValue = 0;
let avarageAge = ages.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
// rezultat podijeljeno s brojem itema  arrayu
console.log(avarageAge);
// Find the range of the ages(max minus min)
console.log(Math.min(...ages));
console.log(Math.max(...ages));

// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
console.log(Math.abs(19, 26));

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(19, 26));

// filter

let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

let filteredWords = words.filter((words) => words.length > 6);
console.log(filteredWords);

let array = [1, 2, 3, 4];
let arrays = [5, 6, 7, 8];

let newArray = array.concat(arrays);
console.log(newArray);

console.log(newArray.indexOf(3));
console.log(newArray.lastIndexOf(3));

console.log(newArray.includes(3));
console.log(newArray.includes(0));

console.log(Array.isArray(newArray));

let arrayString = [1, 2, 3, 4, 5];
let newString = arrayString.toString();
console.log(arrayString);
console.log(newString);

let joinString = arrayString.join(", ");
console.log(joinString);

let slice = [1, 2, 3, 4, 5];
let slicedArray = slice.slice(2, 4);
console.log(slicedArray);
console.log(slice);

let push = [1, 2, 3, 4, 5];
let pushedArray = push.push(6);
console.log(pushedArray);
console.log(push);

let reversed = push.reverse();
console.log(reversed);

let unsortedArray = [3, 4, 1, 5, 8, 6, 7, 2];
let sortedArray = unsortedArray.sort();
console.log(sortedArray);

let index = 7;
console.log(
  `Koristim index ${index} da bi prikazao element ${sortedArray.at(index)}.`
);

let copy = sortedArray.copyWithin(3, 4, 5); // na index 3 sam kopirao broj s indexa 4, a 5 je kopiranje do tog broja jer bi inače cijeli array kopirao
console.log(copy);

let iterator = copy.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

let spliceArray = sortedArray.splice(3, 1, 4); // na trećem mjestu (0,1,2,3), odnosno broj 5 mijenjam s brojem 4
console.log(sortedArray);
sortedArray.splice(8, 0, 9); // kad je 0 u sredini - dodaje se, kad je 1 u sredini, mijenja se
console.log(sortedArray);

const array1 = [1, 2, 3, 4, 5];

let fillArray = array1.fill(5, 1, 4);
console.log(fillArray);

let honey = ["bagrem", "cvjetni", "uljana repica", "kesten", "lipa"];
let filteredHoney = honey.filter((honey) => honey.length > 5);
console.log(filteredHoney);

let findHoney = honey.find((honey) => honey.length < 5);
console.log(findHoney);

let someHoney = honey.some((honey) => honey.length > 7);
console.log(someHoney);

let mapArray = [1, 2, 3, 4];
let mapedArray = mapArray.map((mapArray) => mapArray * 2);
console.log(mapedArray);
console.log(mapArray);

let initial = 0;
let reduced = mapArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initial
);
console.log(reduced);

let find = (element) => element > 2;
console.log(sortedArray.findIndex(find));

// let firstHoney = honey[0];
honey[0] = "Bagrem";
console.log(honey);

// let fibo = [];
// let init = 0;
// let reduce = fibo.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   init
// );
/*
let fibo = [0];
for (let i = 0; i < 21; i++) {
  let init = 1;
  let reduce = fibo.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    init
  );
  fibo.push(reduce);
  console.log(reduce);
}

let funkcija = function () {
  let fibonachi = [1, 2, 3];
  let init = 0;
  let reduce = fibonachi.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    init
  );
  console.log(reduce);
  // if ((fibonachi = 0)) {
  //   fibonachi.push(1);
  //   console.log(reduce);
  // }
  fibonachi >= 0 ? fibonachi.push(1) : console.log("bla");
};
funkcija();
" ".repeat(b - i) + 
*/
// function bor(b) {
//   if (b === 1) return console.log("*");
//   for (let i = 1; i <= b; i++) {
//     console.log(" ".repeat(b + i) + "*".repeat(0 + i) + " ");
//   }
// }

// bor(9);

// const calculateTotal = function (total, pdv, discount) {
//   let totalPrice = total + pdv;
//   let tax = totalPrice * 1.25;
//   let popust = total / discount;

//   return;
// };
// const total = calculateTotal(100, 10, 5);
// console.log(total);

// const people = [
//   { name: "Pero", age: "2000-01-01" },
//   { name: "Ivica", age: "1950-01-01" },
//   { name: "Isus", age: "1989-01-01" },
// ];

// console.log(people);
// people.filter((people) => people.getFullYear());

function calculatePrice(total, pdv, discount) {
  const pdvAmount = (pdv / 100) * total;
  const discountAmount = (discount / 100) * total;

  const finalPrice = total - discountAmount + pdvAmount;
  return finalPrice;
}

const totalPrice = calculatePrice(100, 25, 10);
console.log(totalPrice);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

let depositsFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositsFor.push(mov);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// reduce
console.log(movements);

let balance = movements.reduce(function (acc, curr, index, arr) {
  console.log(`Iteration ${index}: ${acc}. Curr: ${curr}`);
  return acc + curr;
}, 0);
console.log(balance);

// Maximum value
let max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
});
console.log(max);
