// /* EXERCISE LEVEL 1 */

// let challenge = "30 Days of JavaScript";

// console.log(challenge);
// console.log(challenge.toUpperCase());
// console.log(challenge.length); // broji i razmake
// console.log(challenge.toLocaleUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(2));
// console.log(challenge.substring(-2, 2));
// console.log(challenge.includes("Script"));
// console.log(challenge.split());
// console.log(challenge.split(" "));

// let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// let companiesArray = companies.split(",");
// console.log(companiesArray);

// console.log(challenge.replace("JavaScript", "Python"));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt(11));
// console.log(challenge.indexOf("a"));
// console.log(challenge.lastIndexOf("a"));

// let sentence =
//   "You cannot end a sentence with because because because is a conjunction";

// console.log(sentence.lastIndexOf("because"));
// console.log(sentence.indexOf("because"));

// let challengeTrim = "   30 Days Of JavaScript    ";
// console.log(challengeTrim.trim(""));

// console.log(challenge.startsWith("30"));
// console.log(challenge.endsWith("JavaScript"));

// console.log(challenge.match("a"));

// let days = "30 Days of";
// let js = "JavaScript";

// let concatDaysJs = days.concat(" ", js);
// console.log(concatDaysJs);

// console.log(concatDaysJs.repeat("2"));

// // EXERCISE LEVEL 2

// let quote =
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
// console.log(quote);

// console.log(
//   "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
// );

// let stringNumber = "10";
// let number = 10;
// let numberString = Number(stringNumber);
// console.log(typeof stringNumber);
// console.log(typeof numberString);
// console.log(numberString === number);

// const floatValue = parseFloat("9.8");
// console.log(floatValue);
// console.log(floatValue == 10);

// let floatValueCeil = Math.ceil(floatValue);
// console.log(floatValue);
// console.log(floatValueCeil);

// let checkOn = "Python, Jargon";
// console.log(checkOn.indexOf("on"));

// let sentenceJargon =
//   "I hope this course is not full of jargon. Check if jargon is in the sentence.";
// console.log(sentenceJargon.includes("jargon"));

// let randomNum = Math.floor(Math.random() * 11);
// console.log(randomNum);

// let randomNumPlus = Math.floor(Math.random() * 51) + 50;
// console.log(randomNumPlus);

// let randomNumHigh = Math.floor(Math.random() * 256);
// console.log(randomNumHigh);

// let string = "JavaScript";
// let randomString = Math.floor(Math.random() * string.length);
// let randomChar = string.charAt(randomString);
// console.log(randomChar);

// console.log();

// // EXERCISE LEVEL 3

// let sentenceBecause =
//   "You cannot end a sentence with because because because is a conjunction";

// console.log(sentenceBecause.substring(31, 54));

// let sentenceLove =
//   "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// let patternOne = /love/;
// let patternTwo = /love/gi;
// sentenceLove.match(patternTwo);

// console.log(sentenceLove.match(patternTwo));

// let secondBecause =
//   "You cannot end a sentence with because because because is a conjunction";
// let searchOne = /because/gi;
// secondBecause.match(searchOne);
// console.log(secondBecause.match(searchOne));

//  const sentenceClean =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

//  console.log(sentenceClean.replaceAll(/[^\w\s\.\?\!]/g, ""));

// // // The \w looks for all word characters in a string. A word character is a character from a-z, A-Z, 0-9, including the _ (underscore) character. \s(lowercase) which is for whitespace characters.

// // // // // this is your main.js script
//  let string = "JavaScript";
//  let firstLetter = string[0];
//  let lastLetter = string[9];

// console.log(firstLetter, lastLetter);

// let lastIndex = string.length - 1;
//  console.log(lastIndex);

// let nums = [1, 2, 3];
//  let numbers = [1, 2, 3];

// // // // console.log(nums == numbers);
// // // // non-primitive se ne može uspoređivati vrijednostima

// // // let nums = [1, 2, 3];
// // // let numbers = nums;

// // // console.log(nums == numbers); // true

// // const PI = Math.PI;
// // console.log(PI);

// // console.log(Math.round(PI)); // zaokruži na najbliži cijeli broj
// // console.log(Math.round(9.81)); // zaokruži na najbliži cijeli broj
// // console.log(Math.floor(PI)); // zaokruživanje broja prema dolje na najbliži cijeli broj
// // console.log(Math.ceil(PI)); // zaokruživanje broja prema gore na najbliži cijeli broj
// // console.log(Math.min(-5, 3, 20, 4, 5, 10, -7));
// // console.log(Math.max(-5, 3, 20, 4, 5, 10));

// // const randomNum = Math.random();
// // console.log(randomNum);

// // const num = Math.floor(Math.random() * 11);
// // console.log(num);

// // charAt(), charCodeAt()
// /*
// let string = "30 Days Of JavaScript";
// console.log(string.charAt(0)); // 3
// let lastIndex = string.length - 1;
// console.log(string.charAt(lastIndex)); // t
// console.log(string.charCodeAt(3));

// const text = "DHello, world!";
// const firstCharCode = text.charCodeAt(0);
// const fifthCharCode = text.charCodeAt(4);
// console.log(firstCharCode);

// // concat()

// let firstName = "Andrej";
// let lastName = "Jurić";
// let fullName = firstName.concat(" ", lastName);
// console.log(fullName);

// // endsWith() - true/false

// console.log(string.endsWith("JavaScript"));
// console.log(text.endsWith("World!"));
// console.log(text.endsWith("world!"));
// console.log(text.endsWith("!"));

// // includes()

// console.log(string.includes("30"));
// console.log(string.includes("days"));
// console.log(string.includes("Of"));

// // indexOf()

// console.log(string.indexOf("Script"));

// // lastIndexOf()
// console.log(string.lastIndexOf("JavaScript"));

// // lenght

// let js = "JavaScript";
// console.log(js.length);
// console.log(firstName);
// console.log(firstName.length);

// // match

// let stringMatch = "love";
// let patternOne = /love/;
// console.log(stringMatch.match("love"));

// // repeat();

// console.log(js.repeat(5));

// // replace();
// console.log(js.replace("JavaScript", "Python"));

// // search();

// console.log(string);
// console.log(string.search("Of"));

// // split();
// let countries = "Finland, Sweden, Norway, Denmark, and Iceland";

// console.log(string.split(" "));
// console.log(string.split(","));
// console.log(firstName.split(""));
// console.log(countries.split(" "));
// console.log(countries.split(","));

// // substr();
// console.log(firstName);
// console.log(firstName.substring(0, 3));

// // toLowerCase();
// // toUpperCase();

// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// // trim();
// let stringTrim = "   Ovo je primjer trima   ";
// console.log(stringTrim.trim(""));
// */

// let string = "10";
// let number = 20;

// console.log(string + number);
// console.log(number + string);
