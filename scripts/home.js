$(function() {
	// var cookie = sessionStorage.getItem('visited');
	// if(!cookie) {
		var header = $('#mainHeader');
		header.css({
			height: '100vh',
			'font-size': '15px',
			'animation-name': 'starter',
			'animation-duration': '0.5s'
		});
		var nav = $('#mainNav');
		nav.css({
			bottom: 30 + 'px'
		});
		document.addEventListener('scroll', shrinkHeader);
		var day = new Date();
		var afterThirty = new Date(day.getTime() + 30 * 60 * 1000);
		// sessionStorage.setItem('visited', 'true');
	// }
});

function shrinkHeader(event) {
	if(window.scrollY > 0) {
		var header = $('#mainHeader');
		var nav = $('#mainNav');

		header.animate({
			height: '110px',
			'font-size': '9px'
		}, 300);

		nav.animate({
			bottom: -55 + 'px'
		}, 500);
		removeEventListener('scroll', shrinkHeader)
	}
}
