/* HOVER FUNCTIONALITY FOR MOBILE */
document.addEventListener("touchstart", function () {}, true);

/* HAMBURGER MENU */
const navButton = document.querySelector(".mobile-nav-btn");
const headerElement = document.querySelector(".header");

navButton.addEventListener("click", function () {
	headerElement.classList.toggle("nav-open");
});

/* SMOOTH SCROLLING */
const links = document.querySelectorAll("a");

links.forEach(function (link) {
	link.addEventListener("click", function (el) {
		el.preventDefault();
		/* LINKS */
		const href = link.getAttribute("href");
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		if (href !== "#" && href.startsWith("#")) {
			const sectionElement = document.querySelector(href);
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}
		/* CLOSE MENU ON CLICK */
		if (link.classList.contains("nav-link")) {
			headerElement.classList.toggle("nav-open");
		}
	});
});

/* STICKY NAVIGATION */
const heroElement = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		console.log(ent);
		if (ent.isIntersecting !== true) {
			headerElement.classList.add("sticky");
		} else {
			headerElement.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);

observer.observe(heroElement);
