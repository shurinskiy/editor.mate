(() => {
	const header = document.querySelector('header.header');
	if (! header) return;

	window.addEventListener('scroll', () => {
		header.classList[window.scrollY > 30 ? 'add': 'remove']('scrolled');
	});

})();
