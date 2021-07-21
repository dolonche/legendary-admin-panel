import $ from 'jquery';
$(document).ready(() => {
	if (document.querySelector('.context-open')) {
		$(document).click((e) => {
			if ($(e.target).hasClass('context-open')) {
				$(e.target).toggleClass('context-open--open');
			}
			if (!$(e.target).hasClass('context-open')) {
				$('.context-open--open').removeClass('context-open--open');
			}
		});

	}
})