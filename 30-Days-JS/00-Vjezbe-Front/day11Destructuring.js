// destructuring arrays
const numbers = [1, 2, 3];
let [numOne, numTwo, numThree] = numbers;

console.log(numOne, numTwo, numThree);

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//
const [x, y, z] = arr;
console.log(x, y, z);
console.log(a, b, c);

//

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;

console.log(num1, num2, num3);
console.log(rest);

//

const countriesCity = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [država, grad] of countriesCity) {
  console.log(država, grad);
}

//

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (const [firstArr, secondArr] of fullStack) {
  console.log(firstArr, secondArr);
}

// destructuring objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const { firstName, lastName, age } = person;

console.log(firstName);
console.log(lastName);
console.log(age);

//

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width: w, height, area, isus = 1000 } = rectangle;
console.log(w, height, area, isus);

//

const rect = {
  width: 20,
  heigth: 10,
};
const calculatePerimeter = (whatever) => {
  return 2 * (whatever.width + whatever.heigth);
};
console.log(calculatePerimeter(rect));

//

//Another Example
const myPerson = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  age: 250,
  country: "Finland",
  job: "Instructor and Developer",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  languages: ["Amharic", "English", "Suomi(Finnish)"],
};

function getPersonInfo(obj) {
  let skills = obj.skills;
  let formattedSkills = skills.slice(0, -1).join(", ");
  let languages = obj.languages;
  const formattedLanguages = languages.slice(0, -1).join(", ");

  let personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is ${obj.age} year old. His job is ${obj.job} and he speaks ${formattedLanguages}. He has plenty of skills, some of them are ${formattedSkills}.`;

  return personInfo;
}
console.log(getPersonInfo(myPerson));

//

const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

// spread operator
const countries = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [gem, fra, , ...nordicCuntries] = countries;
console.log(gem);
console.log(fra);
console.log(nordicCuntries);

const evens = [0, 2, 4, 6, 8, 10];
const copyEvans = [...evens];
console.log(copyEvans);

const odds = [1, 3, 5, 7, 9];
const oddCopy = [...odds];
console.log(oddCopy);

const allNumbers = [...evens, ...odds];
console.log(allNumbers);

//

const frontEnd = ["HTML", "CSS", "JS", "React"];
const backEnd = ["Node", "Express", "MongoDB"];

const fullStackBoss = [...frontEnd, ...backEnd];

// spread operator to copy object

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

let copiedUser = { ...user };
console.log(copiedUser);

let changedUser = { ...user, title: "Frajer" };
console.log(changedUser);

//

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5);

//

// Broj dana / mjeseci u godini * mjeseci koliko radi
/*  Napisati datum zaposlenja 
    Imamo dva dana godišnjeg po mjesecu -> 24 dana u godini
    broj dana(24) / 12 * mjeseci koliko radi npr. 12
    3x 12 je godina
    2 months
*/
let hireDate = "2023-06-01";
function calculateAllowanceDays(hireDate, allowance) {
  const hire = new Date(hireDate);
  const today = new Date();
  console.log(hire, today, "hire and today");

  let monthHired = today.getMonth() - hire.getMonth();
  console.log(monthHired);

  let yearsHired = today.getFullYear() - hire.getFullYear();
  console.log(yearsHired);

  let monthsHiredWithYears = 12 * yearsHired + monthHired;
  console.log(monthsHiredWithYears);

  return (allowance / 12) * monthHired;
}
// calculate only this allowance for this year
console.log(calculateAllowanceDays(hireDate, 24));

/*izračunati koliko je dana godišnjeg ostalo od prošle godine (stari godišnji) + full dani od ove godine.
napiasti novu funkciju koja prima dva parametra, broj dana preostalih od prošle godine + ova godina


function calculateDaysLeft(lastYearAllowance, thisYearAllowance = 24) {


  const totalAllowance = lastYearAllowance + thisYearAllowance;
  return totalAllowance;
}
console.log(calculateDaysLeft(4));
*/
