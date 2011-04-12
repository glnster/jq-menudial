$(document).ready(function()
{
	
	$('#text').rotate('45deg');
	$('#text2').rotate('90deg');
	$('#text3').rotate('135deg');
	//$('#example').animate({rotate: '+=22.5deg', scale: '-=0.1'}, 1000);
	
	$('#rot').click(function()
	{

		$('#text').animate({rotate: '-=45deg'}, 1000, 'easeInOutElastic');
		$('#text2').animate({rotate: '-=45deg'}, 1000, 'easeInOutElastic');	
		$('#text3').animate({rotate: '-=45deg'}, 1000, 'easeInOutElastic');	
			
	
	});//end click
		
		
});//end doc
