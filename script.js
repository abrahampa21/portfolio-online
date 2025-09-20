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