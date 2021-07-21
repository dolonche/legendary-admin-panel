import $ from 'jquery';
$(document).ready(() => {
	let dropdown = $('.dropdown');
	dropdown.click((e) => {
		console.log(e.currentTarget);
		$(e.target).toggleClass('dropdown--open');
	});
	$(document).click((e) => {
		if (!$(e.target).hasClass('dropdown--open')) {
			dropdown.removeClass('dropdown--open');
		}
	});
});