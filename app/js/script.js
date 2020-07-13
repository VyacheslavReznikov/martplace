$(function() {

	$('.weekly__inner').slick({		
		slidesToShow: 1,
		appendArrows: $('.weekly__arrows'),
	})

	// $('.followers__inner').slick({		
	// 	slidesToShow: 3,
	// 	appendArrows: $('.followers__arrows'),
	// })


	$('.rate-star').rateYo({
		rating: 4.5,
		spacing: '3px',
		starWidth: '15px',
		ratedFill: '#ffc000',
		readOnly: true,

	})

	$('.release__filter-btn').on('click', function() {	
		$('.release__menu-list').slideToggle()
	})




	if ($('.release__wrapper').length) {
    var mixer = mixitup('.release__wrapper');
  }

})