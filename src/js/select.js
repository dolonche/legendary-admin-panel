import $ from 'jquery';
import 'select2';
$(document).ready(() => {
	$('.select.select--default').select2({ minimumResultsForSearch: -1 });
});