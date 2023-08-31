/* 
Sve je omotano u div container
imam input, button i ispod div u kojem trpam 

ispisati konstante i s queryseletorom dohvatiti sve

dodaoti click event listener i fetchat
*/

let btnSearch = document.querySelector(".btnSearch");
let input = document.querySelector(".input-country");
let list = document.querySelector(".results");
let container = document.querySelector(".container");

async function getCountryData() {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${input.value}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const [country] = await response.json();

    showCountryDetails(country);
    aboutCountry(country);
    // return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// const addListItem = (parentElement, text) => {
//   let li = document.createElement("li");
//   parentElement.append(li);
//   li.textContent = text;
// };

const showCountryDetails = (country) => {
  console.log(country);
  Object.keys(country).forEach((key) => {
    if (typeof country[key] === "string") {
      appendElement("p", country[key], key, "h1");
    }
  });
};

const aboutCountry = (detail) => {
  let detailInfo = document.createElement("p");
  detailInfo.textContent = `${
    detail.name.official
  } is a sovereign nation known for its rich history, diverse culture, and stunning landscapes. With a population of approximately ${
    detail.population
  } people, it is located in the ${detail.region} region. The capital city, ${
    detail.capital[0]
  }, serves as the cultural and economic heart of the country, offering a blend of modern amenities and historical landmarks.

  The nation boasts a unique blend of traditions, languages, and cuisines, reflecting its multicultural society. Its breathtaking natural beauty can be found in its ${
    detail.landlocked ? "landlocked" : "coastal"
  } areas, including picturesque ${
    detail.landlocked ? "mountains and valleys" : "beaches and coastal cliffs"
  }. The country's ${
    detail.languages.length > 1
      ? "official languages are"
      : "official language is"
  } ${Object.values(detail.languages)}, further exemplifying its diversity.
  
  With a rich history dating back centuries, ${
    detail.name.official
  } has witnessed the rise and fall of empires, contributing to its architectural heritage and historical sites. The nation's commitment to education is reflected in its numerous universities and research institutions.
  
  Situated on the ${detail.continents[0]} continent, ${
    detail.name.official
  } is a place where past and present coexist harmoniously, offering travelers and residents alike a vibrant and captivating experience.`;
  container.appendChild(detailInfo);
};

const appendElement = (heading, content, title, titleHeading) => {
  let createElement = document.createElement(heading);
  let createElement2 = document.createElement(titleHeading);
  console.log(heading);
  if (heading === "img") {
    createElement.src = content;
  } else {
    createElement.textContent = content;
    createElement2.textContent = title;
  }

  container.appendChild(createElement);
  container.appendChild(createElement2);
};

btnSearch.addEventListener("click", () => {
  getCountryData();
});
