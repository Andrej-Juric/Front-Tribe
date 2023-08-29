// const request = new XMLHttpRequest();
// request.open("GET", `https://restcountries.com/v3.1/name/{name}`);
// request.send();

// setTimeout(() => {
//   console.log("Četvrta operacija");
// }, 3000);

// console.log("Prva operacija");

// setTimeout(() => {
//   console.log("Treća operacija");
// }, 2000);

// console.log("Druga operacija");

// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JavaScript"];
//     callback("It did not go well", skills);
//   }, 2000);
// };

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// };
// console.log(doSomething(callback));
/*
const request = fetch("https://restcountries.com/v3.1/name/croatia");
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

getCountryData("croatia");
*/
const getCountryData = async function (country) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    // console.log(data);
    const countryInfo = {
      countryName: data[0].name.common,
      officialName: data[0].name.official,
      capitalCity: data[0].capital,
      languages: Object.values(data[0].languages).join(", "),
      population: data[0].population,
    };
    // console.log(languages);
    // console.log(data[0].population);
    console.log(countryInfo);
    console.log(
      `Welcome to ${countryInfo.countryName}. Our official name is ${countryInfo.officialName}. Capital city is ${countryInfo.capitalCity}. We speak ${countryInfo.languages} language and our population is ${countryInfo.population}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getCountryData("croatia");

//

const getCatsData = async function (cat) {
  const response = await fetch(`https://api.thecatapi.com/v1/breeds`);

  const data = await response.json();
  //   console.log(data);
  //   console.log(data[0].name);
  let catNames = data.map((element) => element.name);
  console.log(catNames);
  return data;
};
getCatsData();
