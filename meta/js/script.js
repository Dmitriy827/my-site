const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

const buildSwiper = new Swiper(".swiper-active", {
	slidesPerView: 2,  // 4 слайда на экране
	spaceBetween: 0,    // без промежутков
	loop: false,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1.1,
			spaceBetween: 24,
		},
		650: {
			slidesPerView: 1.1,
			spaceBetween: 34,
		},
		900: {
			slidesPerView: 1.1,
			spaceBetween: 44,
		},
		1100: {
			slidesPerView: 1.1,
			spaceBetween: 54,
		}
	}
});

// Для секции .other
const section = document.querySelector(".other");

const sectionObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.intersectionRatio >= 0.5) {
			section.classList.add("show");
			observer.unobserve(section); // остановка наблюдения, чтобы блок больше не исчезал
		}
	});
}, {
	threshold: 0.5
});

sectionObserver.observe(section);

// Для карточек .work__wrap
const cards = document.querySelectorAll(".work__wrap");

const cardsObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			cards.forEach((card, i) => {
				setTimeout(() => card.classList.add("show"), i * 150);
			});
		}
	});
}, { threshold: 0.5 });

cards.forEach(card => cardsObserver.observe(card));