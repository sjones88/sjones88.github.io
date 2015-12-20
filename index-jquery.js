$(document).ready(function() {
	$('.about-me1').hide();
	$('.about-me2').hide();
	$('.about-me3').hide();
	$('section h3').hide();
	$('section h3').slideDown('slow');
	$('header').hide();
	$('header').slideDown('slow');
	$('.about-me1').fadeIn(500);
	$('.about-me2').fadeIn(1000);
	$('.about-me3').fadeIn(1500);
});