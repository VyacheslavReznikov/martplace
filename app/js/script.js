$(function() {

	$('.weekly__inner').slick({		
		prevArrow: '<button type="button" class="weekly-arrow slick-arrow slick-prev lnr lnr-chevron-left">Previous</button>',
		nextArrow: '<button type="button" class="weekly-arrow slick-arrow slick-next lnr lnr-chevron-right">Next</button>',
		slidesToShow: 1,
		appendArrows: $('.weekly__arrows'),
	})

	$('.followers__inner').slick({		
		prevArrow: '<button type="button" class="followers-arrow slick-arrow slick-prev lnr lnr-chevron-left">Previous</button>',
		nextArrow: '<button type="button" class="followers-arrow slick-arrow slick-next lnr lnr-chevron-right">Next</button>',
		slideToScroll: 1,
		slidesToShow: 3,
		appendArrows: $('.followers__arrows'),
	})

	$('.clients__inner').slick({
		prevArrow: '<button type="button" class="clients-arrow slick-arrow slick-prev lnr lnr-chevron-left">Previous</button>',
		nextArrow: '<button type="button" class="clients-arrow slick-arrow slick-next lnr lnr-chevron-right">Next</button>',
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: true,
		// centerMode: true,
	})


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