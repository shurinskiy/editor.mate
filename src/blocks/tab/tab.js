import { driveTabs } from "../../js/libs/driveTabs";

(() => {
	document.querySelectorAll('.tab__item').forEach(item => {
		const video = item.querySelector('video');
		
		if (video) {
			video.addEventListener('pause', e => e.currentTarget.controls = false);
			video.addEventListener('play', e => e.currentTarget.controls = false);
			video.controls = false;
	
			item.addEventListener('mouseenter', (e) => video.play());
			item.addEventListener('mouseleave', (e) => {
				video.pause();
				video.currentTime = 0;
			});
		}
	});	
	
	driveTabs({
		container: '.tab',
		controls: '.tab__buttons button',
		selects: '.tab__block'
	}, function() {
		this.classList.add('showing');
	
		this.addEventListener('animationend', e => {
			this.classList.remove('showing');
		}, { once: true });
	});

})();
