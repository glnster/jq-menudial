$(document).ready(function()
{

	$(function() {
		var bar = $('#char');
		var top = bar.css('top');
		var height = $(window).height()/2;
		
		
		$(window).scroll(function() {
			if($(this).scrollTop() > height) {
				bar.stop().animate({'top' : '-999px'}, 500);
			} else {
				bar.stop().animate({'top' : '600px'}, 500);
			}
		});
	});


		
		
});//end doc
