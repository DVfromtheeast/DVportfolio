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

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "dark");
}
let localData = localStorage.getItem("theme");
if (localData == "dark") {
  illustration.src = "./images/night.png";
  document.body.classList.remove("light-theme");
} else if (localData == "light") {
  illustration.src = "./images/day.png";
  document.body.classList.add("light-theme");
}

slider.onclick = function () {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    illustration.src = "./images/day.png";
    localStorage.setItem("theme", "light");
  } else {
    illustration.src = "./images/night.png";
    localStorage.setItem("theme", "dark");
  }
};
