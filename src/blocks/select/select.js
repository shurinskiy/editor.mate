import { selectTweaker } from "../../js/libs/selectTweaker";

(() => {
	const selects = document.querySelectorAll('select.form__select');
	
	selectTweaker(selects, {
		select: function() {
			this.querySelector('.select__head').classList.add('selected');
		}
	});

})();