function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

console.log(operate(2, 3, add));
console.log(operate(6, 2, subtract));

//
let zbroj = (x, y) => {
  return x + y;
};
console.log(zbroj(2, 5));
//

let personInfo = {
  name: "Andrej",
  age: 31,
};

let showDetails = (person) => {
  console.log(`Name: ${person.name}, age ${person.age}`);
};

console.log(showDetails(personInfo));
