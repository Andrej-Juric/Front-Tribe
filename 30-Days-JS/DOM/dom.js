/*
const allTitles = document.getElementsByTagName("h1");

console.log(allTitles.length);
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]);
}

const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";

// adding text

titles[3].textContent = "Četvrti naslov";

//

let newTitle = document.createElement("h1");
newTitle.className = "title";
newTitle.style.fontSize = "24px";
newTitle.textContent = "Creating HTML element DOM";

console.log(newTitle);


// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});


// selecting elements

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// creating and inserting elements

// .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
*/

const button = document.querySelector(".button");
let clickCount = 0;

button.addEventListener("click", () => {
  clickCount++;
  button.textContent = `Click count: ${clickCount}`;
});

button.addEventListener("click", () => {
  button.textContent = "Ovo je promjena nakon klika";
});

// copy & paste for uppercase text
let source = document.querySelector("div.source");

source.addEventListener("copy", () => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
});

// dblclick

let card = document.querySelector(".card");
card.addEventListener("dblclick", () => {
  card.classList.toggle("large");
});
