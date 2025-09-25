const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
const bars = document.getElementById("bars");

window.addEventListener("DOMContentLoaded", () => {
  const fadeDownElement = document.querySelector(".fade-down");
  const rect = fadeDownElement.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    fadeDownElement.classList.add("visible");
  }
});


//Function to return to the page's top
window.onscroll = function(){
  showButton();
}

function showButton(){
  const triggerElement = document.getElementById("resume");
  const button = document.getElementById("return-top");

  if((triggerElement.getBoundingClientRect().top < window.innerHeight/2)){
    button.style.display = "block";
  }else button.style.display = "none";
}

function returnTop(){
  window.scrollTo({
    top: 0
  });
}

toggle.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
  const barOpen = menu.classList.contains("menu-open");

  bar.classList = barOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
})

document.addEventListener("click", e => {
  const clickOutsideMenu = !menu.contains(e.target);
  const clickOutsideToggle = !toggle.contains(e.target);

  if(clickOutsideMenu && clickOutsideToggle){
    if(menu.classList.contains("menu-open"));
    menu.classList.remove("menu-open");
    bar.className = "fa-solid fa-bars";
  }

})