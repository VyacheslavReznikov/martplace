$(function() {

	$('.weekly__inner').slick({
		
		slidesToShow: 1,
		appendArrows: $('.weekly__arrows'),
	})


	$('.rate-star').rateYo({
		rating: 4.5,
		spasing: '5px',
		starWidth: '15px',
		ratedFill: '#ffc000',
		readOnly: true,

	})

	$('.release__filter-btn').on('click', function() {	
		$('.release__buttons').slideToggle()
	})

	let mixer = mixitup('.release__wrapper');
	






})