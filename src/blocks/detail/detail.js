import { Fancybox } from "@fancyapps/ui";

(() => {

	Fancybox.bind('[data-fancybox]', {
		Html: {
			videoAutoplay: true,
			videoRatio: 0,
		},
		Thumbs: {
			type: 'classic'
		},
		Toolbar: {
			display: {
				left: ["infobar"],
				middle: [],
				right: ["iterateZoom", "close"],
			},
		},
	});

})();
