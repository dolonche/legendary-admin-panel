import $ from 'jquery';
$(document).ready(() => {
	$('table--level').slideUp();
	$(document).click((e) => {
		if ($(e.target).parent().get(0).dataset.action === 'open-next') {
			$(e.target).parent().next().toggleClass('table--level');
			console.log($(e.target).parent().get(0).dataset);
			if ($(e.target).parent().get(0).dataset.toggleclass) {
				$(e.target).parent().toggleClass($(e.target).parent().get(0).dataset.toggleclass);
			}
		}
	});
})