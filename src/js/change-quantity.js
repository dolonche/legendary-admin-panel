import $ from 'jquery';
$(document).ready(() => {
	$('.change-quantity').click((e) => {
		let changeInput = $(e.target).parent().children('.change-quantity__input');
		let changeInputMax = $(changeInput).attr('max');
		let changeInputMin = $(changeInput).attr('min');
		let changeInputValue = parseInt($(changeInput).val());
		let changeInputUp = $(e.target).parent().children('.change-quantity__set-up');
		let changeInputDown = $(e.target).parent().children('.change-quantity__set-down');
		if ($(e.target).is(changeInputUp)) {
			if (changeInputValue >= changeInputMax) {
				changeInput.val(changeInputValue);
			} else {
				changeInput.val(changeInputValue + 1);
			}
		}
		if ($(e.target).is(changeInputDown)) {
			if (changeInputValue <= changeInputMin) {
				changeInput.val(changeInputValue);
			} else {
				changeInput.val(changeInputValue - 1);
			}
		}
	})
});