// sets are collections of unique values, sets can never have any duplicates
// can holds mixed data types

const companies = new Set();
console.log(companies);

const languages = [
  "English",
  "Finnish",
  "English",
  "French",
  "Spanish",
  "English",
  "French",
];

const setOfLanguages = new Set(languages);
console.log(setOfLanguages);

let ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Hamburger", "Pasta"]);
console.log(ordersSet);

console.log(new Set("Andrej"));
console.log(ordersSet.size);
console.log(ordersSet.has("Pizza"));
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Hamburger");
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

//
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef"]).size);

// maps
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

console.log(
  rest
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open")
    .set(false, "We are closed")
);

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
console.log(rest);

rest.set([1, 2], "Test");
console.log(rest);

// exercies lvl 1

// 1. create an empty set
let emptySet = new Set();
console.log(emptySet);

// 2. Create a set containing 0 to 10 using loop

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let setOfNumbers = new Set();

for (const number of numbers) {
  setOfNumbers.add(number);
}
console.log(setOfNumbers);

// 3. Remove an element from a set
setOfNumbers.delete(10);
console.log(setOfNumbers);

// 4. Clear a set
setOfNumbers.clear();
console.log(setOfNumbers);

// 5. Create a set of 5 string elements from array

let friends = ["Mihaela", "Stipo", "Kajo", "Miro"];
let friendSet = new Set(friends);
console.log(friendSet);

// 6. Create a map of countries and number of characters of a country

const countries = ["Finland", "Sweden", "Norway"];

let countriesMap = new Map();
countriesMap.set(countries);
console.log(countriesMap);
console.log(countriesMap.size);

// exercise lvl 2

// 1 Find a union b
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

let c = [...a, ...b];
console.log(c);

// 2. Find a intersection b

let A = new Set(a);
let B = new Set(b);

let interception = a.filter((num) => B.has(num));
let C = new Set(interception);

console.log(C);
