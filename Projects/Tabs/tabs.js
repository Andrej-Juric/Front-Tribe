/*
// button section
const openTab1 = document.querySelector("#btn1");
const openTab2 = document.querySelector("#btn2");
const openTab3 = document.querySelector("#btn3");

// tab section
const firstTabContent = document.querySelector("#tab1");
const secondTabContent = document.querySelector("#tab2");
const thirdTabContent = document.querySelector("#tab3");


// function tab
function openFirstTab() {
  openTab1.classList.add("active");
  openTab2.classList.remove("active");
  openTab3.classList.remove("active");

  firstTabContent.classList.add("active");
  secondTabContent.classList.remove("active");
  thirdTabContent.classList.remove("active");
}

function openSecondTab() {
  openTab2.classList.add("active");
  openTab1.classList.remove("active");
  openTab3.classList.remove("active");

  firstTabContent.classList.remove("active");
  secondTabContent.classList.add("active");
  thirdTabContent.classList.remove("active");
}
function openThirdTab() {
  openTab3.classList.add("active");
  openTab2.classList.remove("active");
  openTab1.classList.remove("active");

  thirdTabContent.classList.add("active");
  secondTabContent.classList.remove("active");
  firstTabContent.classList.remove("active");
}

//event listener section
openTab1.addEventListener("click", () => {
  openFirstTab();
});

openTab2.addEventListener("click", () => {
  openSecondTab();
});

openTab3.addEventListener("click", () => {
  openThirdTab();
});
*/

const buttons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

function openTab(button) {
  button.classList.toggle("active");
  console.log(button);
}

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    openTab(button);
  });
});
