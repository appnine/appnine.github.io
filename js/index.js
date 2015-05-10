$(document).ready(function() {

	var target = $('#picScroll');
	var left = 0;
	var speed = 30;

	function Marqeen() {
		if (target[0].offsetWidth <= left) {
			left -= target[0].offsetWidth;
		} else {
			left++;
		}
		target.scrollLeft(left);
	}
	var marQueen = window.setInterval(Marqeen, speed);
	target.mouseover(function() {
		clearInterval(marQueen);
	});
	target.mouseout(function() {
		marQueen = window.setInterval(Marqeen, speed);
	});
}); //end document ready