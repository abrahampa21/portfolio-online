window.addEventListener("DOMContentLoaded", () => {
  const fadeDownElement = document.querySelector(".fade-down");
  const rect = fadeDownElement.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    fadeDownElement.classList.add("visible");
  }
});
