/* MENU */
const headerElement = document.querySelector('.header');
const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-btn');

navLinks.forEach(link =>
	link.addEventListener('click', () => {
		headerElement.classList.toggle('nav-open');
		document.body.classList.toggle('freeze-scroll');
	})
);

/* STICKY NAVIGATION */
const heroElement = document.querySelector('.section-hero');
const navObserver = new IntersectionObserver(
	function (entries) {
		!entries[0].isIntersecting
			? document.body.classList.add('sticky')
			: document.body.classList.remove('sticky');
	},
	{
		root: null,
		threshold: 0,
	}
);

navObserver.observe(heroElement);

/* SCROLL ANIMATE */
const appShots = document.querySelectorAll('.mobile-bg');
const scrollObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.isIntersecting
			? entry.target.classList.toggle('animate-img')
			: entry.target.classList.remove('animate-img');
	});
});

appShots.forEach(el => scrollObserver.observe(el));

/* PRICING TOGGLE */
const pricing = document.querySelectorAll('.pricing-num');
const toggleButton = document.querySelector('#toggle');

function togglePricing() {
	const prices = toggleButton.checked
		? ['3995', '6995', '9995']
		: ['395', '645', '999'];
	pricing.forEach((price, i) => (price.textContent = prices[i]));
}

toggleButton.addEventListener('click', togglePricing);

/* FORM FUNCTIONALITY */
function submission(event) {
	event.preventDefault();

	const name = document.querySelector('#user-name').value;
	const planChoice = document.querySelector('#user-plan').value;
	const message = document.querySelector('.submission');

	if (planChoice) {
		message.style.display = 'block';
		message.textContent = `Thank you for your interest in the ${planChoice} plan, ${name}. Unfortunately, Omnifood is a fictional company so there's no free meal to send you.`;
	} else {
		message.style.display = 'block';
		message.textContent = `Sorry, you need to choose a plan to proceed!`;
	}
}

const subscribeForm = document.querySelector('#form-subscribe-element');
subscribeForm.addEventListener('submit', submission);
