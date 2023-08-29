//syntax
localStorage.setItem("key", "value");

// storing string in a localStorage
localStorage.setItem("firstName", "Andrej"); // since the value is string we do not stringify it
// console.log(localStorage);

// Storing number in a local storage
localStorage.setItem("age", 200);
// console.log(localStorage);

// Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. See the example below.

const skills = ["HTML", "CSS", "JS", "React"];
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4);
localStorage.setItem("skills", skillsJSON);
// console.log(localStorage);

//

let moreSkills = [
  { tech: "HTML", level: 10 },
  { tech: "CSS", level: 9 },
  { tech: "JS", level: 8 },
  { tech: "React", level: 9 },
  { tech: "Redux", level: 10 },
  { tech: "Node", level: 8 },
  { tech: "MongoDB", level: 8 },
];

let skillJSON = JSON.stringify(skills);
localStorage.setItem("skills", skillJSON);
console.log(localStorage);

// geting item from localStorage

localStorage.getItem("key");

let firstName = localStorage.getItem("firstName");
let age = localStorage.getItem("age");
let localSkills = localStorage.getItem("skills");
console.log(firstName, age, localSkills);

// use JSON.parse() to parse it to normal array.
let mySkills = localStorage.getItem("skills");
let skillsObj = JSON.parse(mySkills, undefined, 4);
console.log(skillsObj);

// clear storage
// localStorage.clear();
