$("#slider").roundSlider({
    radius: 72,
    circleShape: "half-top",
    sliderType: "min-range",
    mouseScrollAction: true,
    value: 19,
    handleSize: "+5",
    min: 15,
    max: 25
});



$("#slider1").roundSlider({
    radius: 72,
    circleShape: "half-top",
    sliderType: "min-range",
    mouseScrollAction: true,
    value: 19,
    handleSize: "+5",
    min: 15,
    max: 25
});




$("#slider2").roundSlider({
    radius: 72,
    circleShape: "half-top",
    sliderType: "min-range",
    mouseScrollAction: true,
    value: 19,
    handleSize: "+5",
    min: 15,
    max: 25
});




$("#slider3").roundSlider({
    radius: 72,
    circleShape: "half-top",
    sliderType: "min-range",
    mouseScrollAction: true,
    value: 19,
    handleSize: "+5",
    min: 15,
    max: 25
});




$("#slider4").roundSlider({
    radius: 72,
    circleShape: "half-top",
    sliderType: "min-range",
    mouseScrollAction: true,
    value: 19,
    handleSize: "+5",
    min: 15,
    max: 25
});



$("#slider5").roundSlider({
    radius: 72,
    circleShape: "half-top",
    sliderType: "min-range",
    mouseScrollAction: true,
    value: 19,
    handleSize: "+1",
    min: 15,
    max: 25
});




$("#slider").roundSlider({
    sliderType: "min-range",
    value: 23
});


$("#slider1").roundSlider({
    sliderType: "min-range",
    value: 23
});


$("#slider2").roundSlider({
    sliderType: "min-range",
    value: 23
});


$("#slider3").roundSlider({
    sliderType: "min-range",
    value: 23
});


$("#slider4").roundSlider({
    sliderType: "min-range",
    value: 23
});


$("#slider5").roundSlider({
    sliderType: "min-range",
    value: 23
});

$(document).ready(function(){

$(function(){
 
    $(document).on( 'scroll', function(){
 
    	if ($(window).scrollTop() > 100) {
			$('.scroll-top-wrapper').addClass('show');
		} else {
			$('.scroll-top-wrapper').removeClass('show');
		}
	});
 
	$('.scroll-top-wrapper').on('click', scrollToTop);
});
 
function scrollToTop() {
	verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
	element = $('body');
	offset = element.offset();
	offsetTop = offset.top;
	$('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
}

});