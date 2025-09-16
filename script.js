const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
const bar = document.getElementById("bars");

toggle.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  const barOpen = menu.classList.contains("menu-open");

  bar.classList = barOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

AOS.init({
  once: true,
});