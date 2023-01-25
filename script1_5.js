const container = document.querySelector(".list");
const buttons = document.querySelector(".button_open");
buttons.addEventListener("click", () => {
  container.classList.toggle("full");
  buttons.classList.toggle("collapse");
  if (buttons.classList.contains("collapse")) {
    buttons.textContent = "Скрыть";
    buttons.classList.remove("button_open");
  } else {
    buttons.textContent = "Показать все";
    buttons.classList.remove("collapse");
    buttons.classList.add("button_open");
  }
});

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: "auto",
  spaceBetween: 16,
});
