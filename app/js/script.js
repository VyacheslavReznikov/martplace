$(function() {

	$('.weekly__inner').slick({		
		prevArrow: '<button type="button" class="weekly-arrow slick-arrow slick-arrow--prev lnr lnr-chevron-left">Previous</button>',
		nextArrow: '<button type="button" class="weekly-arrow slick-arrow slick-arrow--next lnr lnr-chevron-right">Next</button>',
		slidesToShow: 1,
		appendArrows: $('.weekly__arrows'),
		responsive: [
			{
				breakpoint: 577,
				settings: {
					autoplay: true
				}
			}		
		]
	})

	$('.followers__inner').slick({		
		prevArrow: '<button type="button" class="followers-arrow slick-arrow slick-arrow--prev lnr lnr-chevron-left">Previous</button>',
		nextArrow: '<button type="button" class="followers-arrow slick-arrow slick-arrow--next lnr lnr-chevron-right">Next</button>',
		slideToScroll: 1,
		slidesToShow: 3,
		appendArrows: $('.followers__arrows'),
		responsive: [
			{
				breakpoint: 1121,
				settings: {
					slidesToShow: 2,				
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 1,
					autoplay: true
				}
			}
		]
	})

	$('.clients__inner').slick({
		prevArrow: '<button type="button" class="clients-arrow slick-arrow slick-arrow--prev lnr lnr-chevron-left">Previous</button>',
		nextArrow: '<button type="button" class="clients-arrow slick-arrow slick-arrow--next lnr lnr-chevron-right">Next</button>',
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					appendArrows: $('.clients__arrows')
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					appendArrows: $('.clients__arrows')
				}
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 1,
					autoplay: true,
					appendArrows: $('.clients__arrows')
				}
			}
		]

	})


	$('.rate-star').rateYo({
		rating: 4.5,
		spacing: '3px',
		starWidth: '15px',
		ratedFill: '#ffc000',
		readOnly: true,

	})


	$('.header__btn-menu').on('click', function() {
		$('.header__items').toggleClass('active')
	})

	$('.menu__burger').on('click', function() {
		$('.menu__list').slideToggle()
	})


	$('.menu__link-btn').on('click', function() {
		$('.dropdown--left').slideToggle()
	})

	$('.header__button').on('click', function() {
		$('.dropdown').slideToggle()
	})


	if ($('.release__wrapper').length) {
    var mixer = mixitup('.release__wrapper');
  }

})