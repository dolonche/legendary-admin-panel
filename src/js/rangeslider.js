import $ from 'jquery';
import noUiSlider from 'nouislider';
$(document).ready(() => {
	if (document.querySelector('.rangeslider')) {
		let rangeslider = $('.rangeslider');
		let rangesliderStick = $('.rangeslider__stick').get(0);
		console.log("rangesliderStick", rangesliderStick);
		let rangesliderValueStart = $('.rangeslider__value-start');
		let rangesliderValueEnd = $('.rangeslider__value-end');
		let rangesliderValue = [rangesliderValueStart, rangesliderValueEnd];
		noUiSlider.create(rangesliderStick, {
			connect: true,
			step: 1,
			range: {
				'min': 0,
				'max': 1000
			},
			start: [$(rangesliderValueStart).val(), $(rangesliderValueEnd).val()],
		});
		rangesliderStick.noUiSlider.on('update', function(values, handle) {
			rangesliderValue[handle].get(0).value = parseInt(values[handle]);
		});
		rangesliderValueStart.change((e) => {
			rangesliderStick.noUiSlider.set([e.target.value, null]);
		});
		rangesliderValueEnd.change((e) => {
			rangesliderStick.noUiSlider.set([null, e.target.value]);
		});
	}
});