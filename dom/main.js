const header = document.querySelector("header");
const backButton = document.querySelector("#back_to_top");
const mobButton = document.querySelector("#mob_button");
const nav = document.querySelector("nav");
const links = document.querySelector();

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("bg");
    backButton.style.display = "block";
  } else {
    header.classList.remove("bg");
    backButton.style.display = "none";
  }
};

const getToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
const mobMenu = () => {
  if (navigator.classList.contains("responsive")) {
    navigator.class.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};
backButton.addEventListener("click", getToTop);
mobButton.addEventListener("click", mobMenu);
