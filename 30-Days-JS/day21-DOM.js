/*// create a new element
let newDiv = document.createElement("div");
newDiv.textContent = "Ovo je novi div element";
newDiv.className = "novi-div";

document.body.appendChild(newDiv);

// get element by tag name

let allTitles = document.getElementsByTagName("h1");
console.log(allTitles);

// prints each elements in the HTMLCollection
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}

// exercises
// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

let firstPara = document.querySelector("p");
document.getElementsByTagName("p");

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
document.querySelector("#second");
document.getElementById("#second");

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
document.querySelectorAll("p");
document.getElementsByTagName("p");

// 4. Loop through the nodeList and get the text content of each paragraph
*/

let mass = document.querySelector(".mass");
let height = document.querySelector(".height");
let button = document.querySelector("button");

const p = document.querySelector("p");
// country
let country = document.querySelector(".input-country");

let bmi = 0;

button.addEventListener("click", () => {
  bmi = mass.value / height.value ** 2;
  console.log(bmi);
});

//

const getCountryData = async function () {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const countryInfo = {
      countryName: data[0].name.common,
      officialName: data[0].name.official,
      capitalCity: data[0].capital,
      languages: Object.values(data[0].languages).join(", "),
      population: data[0].population,
    };

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getCountryData();
