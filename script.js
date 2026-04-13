// This code for header navbar
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // change icon ☰ ↔ ✕
  if (navMenu.classList.contains("active")) {
    hamburger.innerHTML = "✕";
  } else {
    hamburger.innerHTML = "☰";
  }
});
