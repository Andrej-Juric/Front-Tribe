// 1.  Scope and Function Task: - Create a function named `outer` which defines a variable `x` with a value of 10. Inside this function, define another function named `inner` which prints the value of `x`. Call the `inner` function from inside the `outer` function to display the value of `x`.
/*
function outer() {
  let x = 10;

  function inner() {
    console.log(x);
  }

  console.log(inner());
}
console.log(outer());

// 2. Boolean and Operators Task: Create a function named `isEven` that takes a number as a parameter and returns `true` if the number is even, otherwise returns `false`.

function isEven(number) {
  if (number % 2 == 0 && number > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(2));

// 3. Array and Function Task: Define an array of numbers. Create a function named `sumArray` that takes an array as a parameter and returns the sum of all numbers in the array.
let arrayOfNumbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumArray(arrayOfNumbers));

// 4. Array, Loop, and Operators Task: Create an array of numbers. Write a function named `findMax` that finds and returns the largest number in the array using a `for` loop.

let array = [1, 2, 3, 4, 5, 6, 50, 10, 7, 8, 9];

function findMax(arr) {
  // let maxNum = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] > maxNum) {
  //     maxNum = arr[i];
  //   }
  // }
  // return maxNum;
  return Math.max(...arr);
}
// probaj math max
console.log(findMax(array));

// 7. Create a function named `isValidPassword` that takes a string as a parameter. The function should return `true` if the password is longer than 8 characters and contains both letters and numbers. Otherwise, it should return `false`.

function isValidPassword(pass) {
  let passwordChecker = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{0,8}$/;

  // if (password.test(pass)) {
  //   return true;
  // } else {
  //   return false;
  // }
  return passwordChecker.test(pass) ? true : false;
}
console.log(isValidPassword("Andrej1$"));

// 8. Array, Loop, and Function Task: - Create an array of strings. Write a function named `countVowels` that takes an array of strings and returns the total count of vowels in all strings.

function countVowels(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let characters of str) {
    if (vowels.includes(characters)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(countVowels("andrejioufgsgha"));

// 9. Operators and Loop Task: - Create a function named `fizzBuzz` that loops from 1 to 100. For multiples of three, print "Fizz" instead of the number and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} FizzBuzz`);
    } else if (i % 5 == 0) {
      console.log(`${i} Buzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} Fizz`);
    }
  }
}
console.log(fizzBuzz());

// object tasks

// 5. - Create an object that represents a book, with properties for `title`, `author`, and `yearPublished`. Create a function named `getBookInfo` that takes a book object as a parameter and prints the book's details.

let book = {
  tittle: "Harry Potter: Philosopher's Stone",
  author: "J. K. Rowling",
  yearPublished: "1997",

  getBookInfo: () => {
    return console.log(this);
    return `This is a book info. Tittle: ${this.tittle}, author: ${this.author}, year published: ${this.yearPublished}`;
  },
};

// let copyBook = Object.assign({}, book);
// console.log(copyBook);
console.log(book.getBookInfo());

// 6. Array of Objects and Loop Task: - Define an array of student objects, where each student has a `name` and `grade`. Create a function named `printPassingStudents` that prints the names of all students with a grade above 50.

let students = [
  { name: "Andrej", grade: "60" },
  { name: "pero", grade: "70" },
  { name: "perica", grade: "40" },
  { name: "tetka", grade: "50" },
];

let printPassingStudents = students.filter((student) => student.grade >= 50);
console.log(printPassingStudents);

// 10. Object, Loop, and Array Task:  - Create an object representing a shopping cart, which contains an array of products (each product being an object with properties for `name` and `price`). Write a function named `totalCost` that calculates and returns the total cost of all products in the cart. (edited)

let shoppingCart = [
  {
    name: "banana",
    price: 2,
  },
  {
    name: "lubenica",
    price: 4,
  },
  {
    name: "dinja",
    price: 3,
  },
  {
    name: "rajčica",
    price: 1,
  },
];

function totalCost(obj) {
  let total = 0;
  for (let i = 0; i < obj.length; i++) {
    total = total + obj[i].price;
  }
  return total;
}
//   let total = 0;

const totalPrice = totalCost(shoppingCart);
console.log(totalPrice);
*/

// Array metode zadaci
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Sum All Numbers: Use the reduce method to sum all the numbers in an array.

let value = 0;
let sum = array.reduce((element, index) => element + index, value);

console.log(sum);

// 2. Find First Element: Use the shift method to remove and return the first element from an array.

let shifted = array.shift();
console.log(shifted);
console.log(array);

// 3. Add To Beginning: Use the unshift method to add one or more elements to the beginning of an array.
let unshifted = array.unshift(11);
console.log(array);

// 4. Find Even Numbers: Use the filter method to extract all even numbers from an array.

let filteredEven = array.filter((element) => element % 2 == 0);
console.log(filteredEven);

// 5. Double Elements: Use the map method to double each number in an array.

let maped = array.map((element) => element * 2);
console.log(maped);

// 6. Check if Element Exists: Use the includes method to check if a specific value exists in the array.

let checkerElement = array.includes(5);
console.log(checkerElement);

// 7. Replace Elements: Use the splice method to replace one element with another in the array.

array.splice(0, 1, 1);
console.log(array);

// 8. Check If All Positive: Use the every method to check if all numbers in an array are positive.
let newArray = [-2, -1, 1, 2, 3, 4, 5];
let everyArray = newArray.every((element) => element > 0);
console.log(everyArray);

// 9. Find First Negative Number: Use the find method to locate the first negative number in an array.
let findNegativeNumber = newArray.find((element) => element > -100);
console.log(findNegativeNumber);

// 10. Group By Parity: Use reduce to transform an array of numbers into an object where keys are 'even' and 'odd' and values are arrays of numbers.

// 11. Flatten Array: Flatten an array of arrays using the reduce method.
let arrayOfArrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let flattenedArray = arrayOfArrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
});

console.log(flattenedArray);

// 12. Remove Duplicates: Use filter to remove duplicate values from an array.
let duplicatedArray = [1, 2, 3, 3, 4, 4, 5];

let removeDuplicates = duplicatedArray.filter((element, index) => {
  return duplicatedArray.indexOf(element) === index;
});
console.log(removeDuplicates);

// 13. Count Occurrences: Use reduce to count the occurrences of each number in an array.
let occurencesArray = [1, 2, 3, 3, 4, 5, 5, 6, 6, 6, 6];

// let occurrences = occurencesArray.reduce();

// 14. Sort By Frequency: Sort an array by the frequency of each element (most frequent to least frequent).

let unsortedArray = [4, 4, 5, 8, 8, 8, 8, 8, 9, 9, 9, 2, 2, 2, 7, 7, 7, 7, 1];

let sorted = unsortedArray.sort();
console.log(sorted);

// 15. Chunk Array: Write a function that divides an array into chunks of a specified size using the slice method.

let sliceArray = [10, 20, 30, 40, 50, 60];
// let chunkSize = 2;
let chunksArray = [];

// console.log(sliceArray.slice(0, 2));
function divideArray(arr) {
  for (let i = 0; i < sliceArray.length; i++) {
    let chunk = sliceArray.slice(i, i + 2);
    chunksArray.push(chunk);
  }
  return chunksArray;
}
console.log(divideArray(sliceArray));

// 16. Move Element: Write a function that moves an element from one position to another in an array using the splice method.
let functionArray = [1, 2, 3, 4, 5, 6];

function movesElement(arr, fromIndex, toIndex) {}
console.log(movesElement());

console.log();

let car = {
  mark: "audi",
};

let car2 = {
  mark: "audi",
};
*/

// 21.8. zadaci

// Array Chunking

/* 
1. kreirati array
2. kreirati chunk size => size
3. kreirati prazni array (array poslije splita)
4. kreirati funkciju naziva chunkArray s parametrima arr, size koja dijeli array u manje arraye veličine koji odredimo
5. for petlja za iteraciju kroz array
6. u petlji sliceani array pushamo u prazni array


let normalArray = [10, 20, 30, 40, 50, 60];

function chunkArray(arr, size) {
  let chunkedArray = [];

  for (let i = 0; i < arr.length; i += size) {
    let chunk = arr.slice(i, i + size);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

console.log(chunkArray(normalArray, 2));

// Flatten an Array

let nested = [10, 20, 30, [40, 50, 60, 70, 80, 90]];

function flatten(arr) {
  let flattened = arr.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );
  // let flattened = arr.flat(2);
  return flattened;
}

console.log(flatten(nested));
// Flattening an array of arrays. Use flat() instead. :D

// Find the Most Frequent Element


//1. funkcija koja vraća element koji se najčešće pojavljuje
// 2. kreirati array i funkciju naziva mostFrequent(arr)

let frequentArray = [10, 20, 30, 20, 40, 50, 20, 60];
console.log(frequentArray.map((element) => frequentArray.indexOf(element)));
let maxCount = [];

// funkcija
function mostFrequent(arr) {
  // let num = arr.map((element) => element);
  // num.sort();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j == i; i++) {
      if (i == arr.indexOf() && j == arr.indexOf()) {
        arr.push(maxCount);
      }
      console.log(maxCount);
    }
  }
  return frequentArray;
}

console.log(mostFrequent(frequentArray));
*/
//
/*
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


const andrej = {
  firstName: "Andrej",
  lastName: "Jurić",
  age: 2023 - 1991,
  job: "frontend developer",
  friends: ["Mihaela", "Stipo", "Kajo"],
};
console.log(andrej);

console.log(andrej.lastName);
console.log(andrej["lastName"]);

const nameKey = "Name";
console.log(andrej["first" + nameKey]);
console.log(andrej["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Andrej? Choose between firstName, lastName, age, job and friends"
// );

// if (andrej[interestedIn]) {
//   console.log(andrej[interestedIn]);
// } else {
//   console.log(
//     "Wrong request ! Choose between firstName, lastName, age, job and friends"
//   );
// }

andrej.location = "Osijek";
console.log(andrej);

console.log(
  `${andrej.firstName} has ${andrej.friends.length} friends and his best friend is called ${andrej.friends[0]}.`
);


const andrej = {
  firstName: "Andrej",
  lastName: "Jurić",
  birthYear: 1991,
  job: "frontend developer",
  friends: ["Mihaela", "Stipo", "Kajo"],
  hasDriverLicence: true,

  // calcAge: function (birthYear) {
  //   return 2023 - birthYear;
  // },
  // calcAge: function () {
  //   console.log(this);
  //   return 2023 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old and he has ${
      this.hasDriverLicence ? "a" : "no"
    } driver license.`;
  },
};

console.log(andrej.calcAge(1991));
console.log(andrej);

console.log(andrej.getSummary());


// Exercises: Level 1 for OBJECTS

// 1. Create an empty object called dog

//let dog = {};

//2. Print the the dog object on the console
//console.log(dog);

//3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
let dog = {
  name: "Rex",
  legs: 4,
  color: "black",
  age: 2,
  bark: "woof woof",
};

// 4. Get name, legs, color, age and bark value from the dog object
console.log(dog.name, dog.legs, dog.color, dog.bark);

// 5. Set new properties the dog object: breed, getDogInfo
console.log(dog);
dog.breed = "doberman";
console.log(dog);

// Exercises: Level 2
// 1. Find the person who has many skills in the users object.
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let maxSkills = 0;
let mostSkilledUser = null;

// 1. Find the person who has many skills in the users object.
const result = Object.fromEntries([
  Object.entries(users).sort(
    (a, b) => b[1].skills.length - a[1].skills.length
  )[0],
]);

console.log(result);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
let countLoggedUsers = Object.values(users).filter(
  (user) => user.isLoggedIn
).length;
console.log(countLoggedUsers);

let usersGreaterThan50 = Object.values(users).filter(
  (user) => user.points >= 50
);
console.log(usersGreaterThan50.length);

// 3. Find people who are MERN stack developer from the users object
let findMERN = Object.values(users).find((user) =>
  user.skills.includes("MERN")
);
if (findMERN) {
  console.log(findMERN);
} else {
  console.log("There is no users who are MERN stack developer");
}

// 4. Set your name in the users object without modifying the original users object

users.Andrej = "Andrej";
console.log(users);

const updatedUsers = {
  ...users,
  Andrej: {
    skills: ["JavaScript"],
    age: 31,
    isLoggedIn: true,
    points: 100,
  },
};

console.log(updatedUsers);

// 5. Get all keys or properties of users object

let allUserKeys = Object.keys(updatedUsers);
console.log(allUserKeys);

// 6. Get all the values of users object

let allUserValues = Object.values(updatedUsers);
console.log(allUserValues);

// 7. Use the countries object to print a country name, capital, populations and languages.
*/
// Exercises: Level 3

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "Andrej",
  lastName: "Jurić",
  incomes: [200, 100, 300, 500],
  expenses: [50, 20, 10, 30],
  totalIncome: function () {
    let totalIncome = 0;
    for (let i = 0; i < this.incomes.length; i++) {
      totalIncome += this.incomes[i];
    }
    return totalIncome;
  },
  totalExpense: function () {
    let totalExpense = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      totalExpense += this.expenses[i];
    }
    return totalExpense;
  },
  accountInfo: function () {
    return console.log(
      `This is account information of or client ${
        this.firstName
      }. His last name is ${this.lastName}. Incomes: ${this.totalIncome()}.`
    );
  },
  addIncome: function (income) {
    return this.incomes.push(income);
  },
  addExpense: function (expense) {
    return this.expenses.push(expense);
  },
  accountBalance: function () {
    this.balance = this.incomes - this.expenses;
    console.log(this);
    return this.balance;
  },
};
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());

console.log(personAccount.addIncome(200));
console.log(personAccount.incomes);

console.log(personAccount.addExpense(25));
console.log(personAccount.expenses);
console.log(personAccount.accountBalance());
