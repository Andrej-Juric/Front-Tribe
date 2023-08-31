const modal = document.querySelector(".modal");
const openButton = document.querySelector(".open-modal");
const closeButton = document.querySelector(".close-modal");

openButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
