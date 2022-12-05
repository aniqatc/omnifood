/* HOVER FUNCTIONALITY FOR MOBILE */
document.addEventListener("touchstart", function () {}, true);

/* HAMBURGER MENU */
const navButton = document.querySelector(".mobile-nav-btn");
const headerElement = document.querySelector(".header");

navButton.addEventListener("click", function () {
	headerElement.classList.toggle("nav-open");
});

/* SMOOTH SCROLLING */
const links = document.querySelectorAll("a:not(.social-link)");

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
const navObserver = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (ent.isIntersecting !== true) {
			document.body.classList.add("sticky");
		} else {
			document.body.classList.remove("sticky");
		}
	},
	{
		root: null,
		threshold: 0,
		rootMargin: "-90px",
	}
);

navObserver.observe(heroElement);

/* PRICING TOGGLE */
const pricing = document.querySelectorAll(".pricing-num");
const toggleButton = document.querySelector("#toggle");

function togglePricing() {
	const prices = toggleButton.checked
		? ["3995", "6995", "9995"]
		: ["395", "645", "999"];
	for (let i = 0; i < pricing.length; i++) {
		pricing[i].textContent = prices[i];
	}
}

toggleButton.addEventListener("click", togglePricing);

/* FORM FUNCTIONALITY */
function submission(event) {
	event.preventDefault();
	let name = document.querySelector("#user-name").value;
	let planChoice = document.querySelector("#user-plan").value;
	let message = document.querySelector(".submission");
	if (planChoice !== "") {
		message.style.display = "block";
		message.textContent = `Thank you for your interest in the ${planChoice} plan, ${name}. We'd be happy to send you more information about this plan to your email!`;
	} else {
		message.textContent = `Sorry, you need to choose a plan to proceed!`;
	}
}

const subscribeForm = document.querySelector("#form-subscribe-element");
subscribeForm.addEventListener("submit", submission);

/* SCROLL ANIMATE */
const appShots = document.querySelectorAll(".mobile-bg");

const scrollActivate = () => {
	const scroll = document.documentElement.scrollTop;
	if (scroll > 500) {
		appShots[0].classList.add("animate-img");
	}
	if (scroll > 1300) {
		appShots[1].classList.add("animate-img");
	}
	if (scroll > 2100) {
		appShots[2].classList.add("animate-img");
	}
};

window.addEventListener("scroll", scrollActivate);
