

$(function(){
	$('nav ul li').hover(
		function () {

			$('ul', this).slideDown(150);
	},
	
		function () {
			$('ul', this).slideUp(150);			
		}
	);

});
