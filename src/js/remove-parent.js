import $ from 'jquery';
$(document).ready(() => {
	$(document).click((e) => {
		if (e.target.dataset && e.target.dataset.action === 'remove-parent') {
			$(e.target).parent().remove();
		}
	});
})