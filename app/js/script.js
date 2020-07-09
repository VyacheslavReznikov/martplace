$(function() {

	$('.products-slider__inner').slick({
		// prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/icons/arrow-left.svg" alt=""></button>',
		// nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/icons/arrow-right.svg" alt=""></button>',	
		slidesToShow: 1,
		appendArrows: $('.products-slider__arrows'),
	})


	$('.rate-star').rateYo({
		rating: 4.5,
		spasing: '5px',
		starWidth: '15px',
		ratedFill: '#ffc000',
		// normalFill: '#fff',	
		readOnly: true,

	})
	






})