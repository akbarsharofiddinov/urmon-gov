window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    document.querySelector(".to-top_btn").style.transform = "translateX(0)";
  } else {
    document.querySelector(".to-top_btn").style.transform = "translateX(200%)";
  }
});

// THEME CHANGE
const blackAndWhite = document.querySelector(".black-and-white");
const blackMode = document.querySelector(".black");
const noMode = document.querySelector(".no-mode");
const appearance = document.querySelector(".accessibility__appearance");
const slider = document.getElementById("range");
const root = document.querySelector(":root");
const html = document.querySelector("html");
const font = document.getElementById("fontSize");

const appearanceInner = document.querySelector(
  ".accessibility__appearance__inner"
);

window.addEventListener("click", (e) => {
  if (e.target.dataset.type == "header-appearance") {
    appearanceInner.classList.add("block");
  } else {
    appearanceInner.classList.remove("block");
  }
});

// HTML FONT-SIZE CHANGER

slider.addEventListener("change", function (e) {
  const size = e.target.value;
  root.style.fontSize = 100 + Number(size) * 5 + "%";
  font.innerHTML = 100 + Number(size) * 10 + "%";
});
// MOOD

blackAndWhite.addEventListener("click", function () {
  html.style.filter = "grayscale(100%)";
  html.style.backgroundColor = "white";
});

blackMode.addEventListener("click", function () {
  html.style.color = "white";
  html.style.filter = "contrast(1) grayscale(100%) brightness(50%)";
  html.style.backgroundColor = "black";
});

noMode.addEventListener("click", function () {
  html.style.filter = "none";
  html.style.backgroundColor = "white";
});

// Accessibility inner toggle view
const accessViewBTN = document.querySelector("#accessibility-view_btn");

accessViewBTN.addEventListener("click", () => {
  document
    .querySelector(".accessibility__appearance__inner")
    .classList.toggle("active");
});

// Header bar

const headerBar = document.querySelector(".header-bar");

headerBar.addEventListener("click", () => {
  document.querySelector(".header-menu").classList.add("active");
});

const closeBtn = document.querySelector(".collapse");
closeBtn.addEventListener("click", () => {
  document.querySelector(".header-menu").classList.remove("active");
});

const toTopBtn = document.querySelector(".to-top_btn");

toTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
