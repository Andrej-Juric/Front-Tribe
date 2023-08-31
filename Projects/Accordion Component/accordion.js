import { accordionData } from "./json.js";

console.log(accordionData);

const accordionContainer = document.querySelector("#accordion-container");
// const accordionItems = document.querySelectorAll(".accordion-element");

export function accordion(obj) {
  obj.forEach((data) => {
    const element = document.createElement("div");
    element.className = "accordion-element";

    const header = document.createElement("div");
    header.className = "accordion-header";
    header.textContent = data.header;

    const content = document.createElement("div");
    content.className = "accordion-content";
    content.textContent = data.content;

    element.appendChild(header);
    element.appendChild(content);
    accordionContainer.appendChild(element);
  });

  const generateAccordionItems =
    document.querySelectorAll(".accordion-element");
  addAccordionListener(generateAccordionItems);
}

let andrejAccordion = accordion(accordionData);
console.log(andrejAccordion);

function addAccordionListener(accordionItems) {
  accordionItems.forEach((element) => {
    const header = element.querySelector(".accordion-header");
    const content = element.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      element.classList.toggle("active");
    });

    content.addEventListener("mouseleave", () => {
      element.classList.remove("active");
    });
  });
}
