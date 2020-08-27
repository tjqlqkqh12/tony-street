$(document).ready(function(){
	$(".mainSlider").slick({
        dots: true,
        infinite: true,
		autoplay: true,
		autoplaySpeed: 3500,
        slidesToShow: 1,
        slidesToScroll: 1,
		prevArrow: "<button type='button' class='slickBtn slick-prev'>Previous</button>",
		nextArrow: "<button type='button' class='slickBtn slick-next'>Next</button>",
    });
})