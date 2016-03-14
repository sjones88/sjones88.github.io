$(document).ready(function() {
	$('section').hide();
	$('header').hide();
	$('footer').hide();
	$('.projects-list').hide();
	$('header').slideDown(1000);
	$('section').fadeIn(2500);
	$('.blog-post-list').hide();
	$('.screen').hover( function(){
		$(this).css('opacity', '1.0')
		}, function(){
			$(this).css('opacity', '0.8');
		});
	$('footer').fadeIn(3500);
	var $index = $('.index');
	var $blogPostList = $('.blog-post-list');
	$('#blog-link').click(function(event){
		event.preventDefault();
		$('section').children().hide();
		$blogPostList.appendTo('section');
		$blogPostList.fadeIn(500);
	});
	$('#home-link').click(function(event) {
		event.preventDefault();
		$('section').children().hide();
		$index.appendTo('section');
		$index.fadeIn(500);
	});
	var $project = $('.projects-list');
	$('#projects-link').click(function(event) {
		event.preventDefault();
		$('section').children().hide();
		$project.appendTo('section');
		$project.fadeIn(500);
	})
});