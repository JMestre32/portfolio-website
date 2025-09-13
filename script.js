function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
//   targeting these two elements, and whenever clicked
// whenever clicked, it will either add or remove the open class
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
