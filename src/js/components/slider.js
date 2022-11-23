import Swiper, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';

Swiper.use([Pagination, Navigation, Autoplay, EffectFade]);

// Hero slider
const heroSlider = new Swiper('.hero__slider', {
	slidesPerView: 1,
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	// loop: true,
	speed: 2000,
	autoplay: {
		delay: 2000,
	},
	allowTouchMove: false,
	pagination: {
		el: '.hero__pag',
		type: 'bullets',
		clickable: true,
	},
});

// Special offers slider
const specialOffersSlider = new Swiper('.special-offers__slider', {
	slidesPerView: 'auto',
	slidesPerGroup: 1,
	spaceBetween: 32,
	speed: 1000,
	navigation: {
		nextEl: '.special-offers__next',
		prevEl: '.special-offers__prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 12,
		},
		// when window width is >= 480px
		576: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 32,
		},
		// 640: {
		// 	slidesPerView: 2,
		// 	spaceBetween: 32,
		// },
		766: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		// when window width is >= 640px
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 32,
		},
		1024: {
			slidesPerView: 'auto',
			slidesPerGroup: 3,
			spaceBetween: 32,
		},
	},
});

// Section Useful slider
const usefulSlider = new Swiper('.useful__slider', {
	slidesPerView: 1,
	spaceBetween: 32,
	speed: 1000,
	// loop: true,
	navigation: {
		nextEl: '.useful__next',
		prevEl: '.useful__prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 12,
		},
		480: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		769: {
			slidesPerView: 3,
			spaceBetween: 32,
		},
		1161: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
	},
});
