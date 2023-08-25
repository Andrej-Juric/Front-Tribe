/*
let str = "I love JavaScript";
let pattern = /love/;
let result = pattern.test(str);
console.log(result);

const str = "I love JavaScript";
const pattern = /love/;
const result = str.match(pattern);
console.log(result);

const str = "I love JavaScript";
const pattern = /love/g;
const result = str.search(pattern);
console.log(result);

// replacing a substring

const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

let matchReplaced = txt.replace(/Python/gi, "JavaScript");
console.log(matchReplaced);

//
const tekst =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

let matches = tekst.replace(/%/gi, "");
console.log(matches);

//

// let fruitPattern = "[Aa]pple";
let fruitPattern = /[Aa]pple/g;
let fruitTxt =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matchesFruit = fruitTxt.match(fruitPattern);

console.log(matchesFruit);

//

let patternDigit = /\d+/g;
let digitTxt = "This regular expression example was made in January 12,  2020.";
let digitMatches = digitTxt.match(patternDigit);
console.log(digitMatches);

// Exercises: Level 1

// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let earnings = [4000, 10000, 5500];
let totalEarnings = earnings.reduce((acc, curr) => acc + curr, 0);
console.log(totalEarnings);

// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

function tenMostFrequentWords() {}

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
console.log(tenMostFrequentWords(paragraph));

// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
function cleanText() {
  let matches = sentence.replace(/[%#@&;$]/gi, "");
  return matches;
}


*/
// Exercises: Level 3 clean text and count frequent words
// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanTextAndCountFrequentWords(text) {
  // ovdje uklanjam simbole
  let cleanText = text.replace(/[%#@&;$?!,.]/gi, "");
  //   console.log(cleanText);
  // razdvajam tekst na riječi
  let words = cleanText.split(/\s+/);
  //   console.log(words);

  // brojanje riječi
  let wordCount = words.reduce((pv, cv) => {
    // console.log(cv);
    // console.log(pv.some((item) => item?.word === cv));
    if (pv.some((item) => item?.word === cv)) {
      return pv.map((item) => {
        if (item?.word === cv) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    }

    return [...pv, { word: cv, count: 1 }];
  }, []);

  let maxCount = Math.max(...wordCount.map((element) => element.count), 0);
  console.log(`Count: ${maxCount}`);

  const highest = wordCount.filter((element) => element.count >= maxCount);
  console.log(highest);
  console.log(wordCount);
}

console.log(cleanTextAndCountFrequentWords(sentence));
