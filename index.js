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
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);

observer.observe(heroElement);

/* PRICING TOGGLE */
const pricing = document.querySelectorAll(".pricing-num");
const toggleButton = document.querySelector("#toggle");

function togglePricing() {
	if (toggleButton.checked) {
		pricing[0].textContent = "3995";
		pricing[1].textContent = "6995";
		pricing[2].textContent = "9995";
	} else {
		pricing[0].textContent = "395";
		pricing[1].textContent = "645";
		pricing[2].textContent = "999";
	}
}

toggleButton.addEventListener("click", togglePricing);
