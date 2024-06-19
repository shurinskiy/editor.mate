import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

(() => {

	document.querySelectorAll('.gallery__slider').forEach((item, i) => {
		new Swiper(item, {
			modules: [Navigation],
			watchOverflow: true,
			slidesPerView: 3,
			spaceBetween: 26,
			threshold: 10,
		});
	});

})();