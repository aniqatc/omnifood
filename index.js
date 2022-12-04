/* HOVER FUNCTIONALITY FOR MOBILE */
document.addEventListener("touchstart", function () {}, true);

/* HAMBURGER MENU */
const navButton = document.querySelector(".mobile-nav-btn");
const headerElement = document.querySelector(".header");

navButton.addEventListener("click", function () {
	headerElement.classList.toggle("nav-open");
});
