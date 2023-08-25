/*
try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.log(err);
}

try {
  let lastName = "Yetayeh";
  let fullName = fistName + " " + lastName;
} catch (err) {
  console.error(err); // we can use console.log() or console.error()
} finally {
  console.log("In any case I will be executed");
}
//
throw "Error41"; // generates an exception with a string value
throw 42; // generates an exception with the value 42
throw true; // generates an exception with the value true
throw new Error("Required"); // generates an error object with the message of Required
//

const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();

//

let firstName = "Asabeneh";
let fullName = firstName + " " + lastNamee;
console.log(fullName);

//

// let square = 2 x 2
// console.log(square)
// console.log('Hello, world")
*/
let num = 10;
console.log(num.toLowerCase());
