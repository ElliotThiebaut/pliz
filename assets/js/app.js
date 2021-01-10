$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			//change yes to no
			$('#firstTitle').html('No');
		} else {
			//set h1 text to yes
			$('#firstTitle').html('Yes');
		}
	});
});
