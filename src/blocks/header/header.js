(() => {

	window.addEventListener('scroll', () => {
		document.querySelector('header.header')?.classList.toggle('scrolled', window.scrollY > 30);
	});

})();
