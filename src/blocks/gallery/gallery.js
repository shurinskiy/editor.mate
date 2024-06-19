import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

	document.querySelectorAll('.gallery__slider').forEach((item, i) => {
		new Swiper(item, {
			modules: [Navigation],
			watchOverflow: true,
			threshold: 10,
			navigation: {
				nextEl: `.gallery__navi_${i} .gallery__button_next`,
				prevEl: `.gallery__navi_${i} .gallery__button_prev`,
			},
			on: {
				beforeInit: function(el) {
					item
					.querySelector('.gallery__navi')
					?.classList
					.add(`gallery__navi_${i}`);
				},
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 1.2
				},
				480: {
					spaceBetween: 16,
					slidesPerView: 2
				},
				780: {
					spaceBetween: 26,
					slidesPerView: 3
				}
			}
		});
	});

})();