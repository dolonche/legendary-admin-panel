import $ from 'jquery';
import moment from 'moment';
import 'daterangepicker';
$('.date').daterangepicker({
	singleDatePicker: true,
	showDropdowns: true,
	minYear: 1901,
	maxYear: parseInt(moment().format('YYYY'), 10)
});