import $ from 'jquery';
$('.sidebar__nav-list-item--open .sidebar__nav-list-inner').slideDown();
$('.sidebar__nav-close').click((e) => {
	console.log(1);
	$('.page-wrapper').addClass('page-wrapper--close-menu');
	$('.sidebar__list-item--selected').removeClass('sidebar__list-item--selected');
});
$('.sidebar__list').click((e) => {
	if ($(e.target).hasClass('sidebar__list-item')) {
		if (!$(e.target).hasClass('sidebar__list-item--selected')) {
			$('.sidebar__list-item--selected').removeClass('sidebar__list-item--selected');
			$(e.target).addClass('sidebar__list-item--selected');
			if ($('.page-wrapper').hasClass('page-wrapper--close-menu')) {
				$('.page-wrapper').removeClass('page-wrapper--close-menu');
			}
		}
	}
	if ($(e.target).hasClass('sidebar__nav-list-item-level')) {
		if ($(e.target).parent().hasClass('sidebar__nav-list-item--open')) {
			$(e.target).siblings('.sidebar__nav-list-inner').slideUp();
		} else {
			$(e.target).siblings('.sidebar__nav-list-inner').slideDown();
		}
		$(e.target).parent().toggleClass('sidebar__nav-list-item--open');
	}
});
$('.sidebar__nav-close').click((e) => {
	console.log(1);
	$('.page-wrapper').addClass('page-wrapper--close-menu');
	$('.sidebar__list-item--selected').removeClass('sidebar__list-item--selected');
});
$('.sidebar__list').click((e) => {
	if ($(e.target).hasClass('sidebar__list-item')) {
		if (!$(e.target).hasClass('sidebar__list-item--selected')) {
			$('.sidebar__list-item--selected').removeClass('sidebar__list-item--selected');
			$(e.target).addClass('sidebar__list-item--selected');
			if ($('.page-wrapper').hasClass('page-wrapper--close-menu')) {
				$('.page-wrapper').removeClass('page-wrapper--close-menu');
			}
		}
	}
	if ($(e.target).hasClass('sidebar__nav-list-item-level')) {

	}
});