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
