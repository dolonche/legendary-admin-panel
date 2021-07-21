import $ from 'jquery';
import tingle from 'tingle.js';
$(document).ready(() => {
	if (document.querySelector('.demo--1')) {
		let modal = new tingle.modal({
			closeMethods: ['overlay', 'button', 'escape'],
			closeLabel: "Close",
			cssClass: ['custom-class-1', 'custom-class-2'],
			beforeClose: function() {
				// here's goes some logic
				// e.g. save content before closing the modal
				return true; // close the modal
				return false; // nothing happens
			}
		});

		modal.setContent(document.querySelector('.none.demo--1').innerHTML);
		let btn2 = document.querySelector('.bottom-action .button.button--primary');

		btn2.addEventListener('click', function() {
			modal.open();
		});
		let modal1 = new tingle.modal({
			closeMethods: ['overlay', 'button', 'escape'],
			closeLabel: "Close",
			cssClass: ['custom-class-1', 'custom-class-2'],
			beforeClose: function() {
				// here's goes some logic
				// e.g. save content before closing the modal
				return true; // close the modal
				return false; // nothing happens
			}
		});

		modal1.setContent(document.querySelector('.none.demo--2').innerHTML);
		let btn3 = document.querySelector('.bottom-action .button-delete');

		btn3.addEventListener('click', function() {
			modal1.open();
		});
	}
})