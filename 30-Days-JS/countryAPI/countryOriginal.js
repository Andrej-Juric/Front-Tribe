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
    const data = await response.json();

    showCountryDetails(data[0]);
    aboutCountry(data[0]);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// const addListItem = (parentElement, text) => {
//   let li = document.createElement("li");
//   parentElement.append(li);
//   li.textContent = text;
// };

btnSearch.addEventListener("click", () => {
  getCountryData();
});

const showCountryDetails = (country) => {
  console.log(country);

  let title = document.createElement("h1");
  title.textContent = `Country Details for ${country.name.official}`;
  container.appendChild(title);

  let image = document.createElement("img");
  image.src = country.flags.png;
  container.appendChild(image);

  let capitalTitle = document.createElement("h2");
  capitalTitle.textContent = "Capital City";
  container.appendChild(capitalTitle);

  let capital = document.createElement("p");
  capital.textContent = country.capital;
  container.appendChild(capital);

  let populationTitle = document.createElement("h2");
  populationTitle.textContent = "Population";
  container.appendChild(populationTitle);

  let population = document.createElement("p");
  population.textContent = country.population;
  container.appendChild(population);

  let languageTitle = document.createElement("h2");
  languageTitle.textContent = "Language";
  container.appendChild(languageTitle);

  let language = document.createElement("p");
  language.textContent = Object.values(country.languages);
  container.appendChild(language);
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
