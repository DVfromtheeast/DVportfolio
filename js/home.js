// Menu
const menu = document.querySelector(".navbar_links");
const menuButton = document.querySelector(".navbar_icon1");
const overlay = document.querySelector("#overlay");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar_open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  menu.classList.toggle("navbar_open");
  menuButton.classList.toggle("open");
  overlay.classList.toggle("show");
});

// Switches
var slider = document.getElementById("slider");
var illustration = document.getElementById("illustration");

let localData = localStorage.getItem("theme");
if (localData == "light") {
  illustration.src = "./images/day.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  illustration.src = "./images/night.png";
  document.body.classList.add("dark-theme");
}
slider.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    illustration.src = "./images/night.png";
    localStorage.setItem("theme", "dark");
  } else {
    illustration.src = "./images/day.png";
    localStorage.setItem("theme", "light");
  }
};
