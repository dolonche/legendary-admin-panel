import $ from 'jquery';
$(document).ready(() => {
	if (document.querySelector('.upload-file')) {
		let uploadFiles = document.querySelectorAll('.upload-file');
		Array.prototype.forEach.call(uploadFiles, ((uploadWrapper) => {
			let input = uploadWrapper.querySelector('.upload-file__input');
			let label = input.nextElementSibling;
			let labelName = label.querySelector('.upload-file__label-name');
			let labelVal = label.innerHTML;
			let clearValue = uploadWrapper.querySelector('.upload-file__action');
			input.addEventListener('change', ((e) => {
				let fileName = e.target.value.split('\\').pop();
				if (fileName) {
					labelName.innerHTML = fileName;
				} else {
					labelName.innerHTML = labelVal;
				}
				uploadWrapper.classList.add('upload-file--complete');
			}));
			clearValue.addEventListener('click', ((e) => {
				labelName.innerHTML = 'Файл не выбран';
				input.value = '';
				uploadWrapper.classList.remove('upload-file--complete');
			}))
		}))
	}
});