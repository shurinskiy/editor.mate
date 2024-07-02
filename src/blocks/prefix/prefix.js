import countries from './countries.json';

(() => {

	const inputPrefix = (items, setting = {}) => {
		let props = { name: 'prefix', ...setting };

		[...items].forEach((input, i) => {
			const previous = input.previousElementSibling;
			const currentClass = `${props.name}__option_current`;
			const hiddenClass = `${props.name}__option_hidden`;
	
			const _wrapper = document.createElement('div');
			const _top = document.createElement('div');
			const _button = document.createElement('button');
			const _bottom = document.createElement('div');
			const _search = document.createElement('input');
			const _list = document.createElement('ul');
	
			_wrapper.className = `${input.className} ${props.name}`;
			_top.className = `${props.name}__top`;
			_bottom.className = `${props.name}__bottom`;
			_button.className = `${props.name}__button ${props.name}__icon ${props.name}__icon_${countries[0].code.toLowerCase()}-4x3`;
			_search.className = `${props.name}__search`;
			_list.className = `${props.name}__options`;
			
			input.value = `+${countries[0].phone}`;
			input.removeAttribute('class');
	
			_search.type = 'text';
			_button.type = 'button';
	
			(previous) ? previous.after(_wrapper) : input.parentNode.prepend(_wrapper);
			_top.append(_button, input);
			_bottom.append(_search, _list);
			_wrapper.append(_top, _bottom);
	
			for (const country of countries) {
				_list.insertAdjacentHTML('beforeend', `<li class="${props.name}__option ${props.name}__icon prefix__icon_${country.code.toLowerCase()}-4x3" data-code="${country.code}" data-phone="${country.phone}">
					<span class="${props.name}__option-name">${country.name}</span>
					<span class="${props.name}__option-phone">${country.phone}</span>
				</li>`);
			}
	
			_button.addEventListener('click', () => {
				_wrapper.classList.toggle(`${props.name}_opened`);
				// _search.focus();
			});
	
			_search.addEventListener('input', (e) => {
				let query = _search.value.toLowerCase();
				
				for (const item of _list.children) {
					let is_matched = item.querySelector(`.${props.name}__option-name`).innerText.toLowerCase().includes(query);
					item.classList.toggle(hiddenClass, !is_matched)
				}
			});
	
			[..._list.children].forEach((item, i) => {
				i || item.classList.add(currentClass);
	
				item.addEventListener('click', () => {
					_wrapper.classList.remove(`${props.name}_opened`);
					_button.className = `${props.name}__button ${props.name}__icon ${props.name}__icon_${item.dataset.code.toLowerCase()}-4x3`;
					input.value = `+${item.dataset.phone} `;
					input.focus();
					_search.value = '';
					
					[..._list.children].forEach(ch => ch.classList.remove(currentClass, hiddenClass));
					item.classList.add(currentClass);
					
					if (typeof props.select === 'function') props.select.call(_wrapper);
				});
			});
			
			['click','touchstart'].forEach(event => {
				document.addEventListener(event, e => { 
					if (!_wrapper.contains(e.target)) {
						_wrapper.classList.remove(`${props.name}_opened`);
						_search.value = '';
						
						[..._list.children].forEach(ch => ch.classList.remove(hiddenClass));
					}
				}, { passive: false });
			});
	
		});
	}	

	inputPrefix(document.querySelectorAll('.form input[type="tel"]'));

})();