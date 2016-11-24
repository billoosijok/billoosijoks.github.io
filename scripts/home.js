$(function() {
	document.addEventListener('scroll', shrinkHeader);
	
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
		console.log('yay');
		removeEventListener('scroll', shrinkHeader)
	}
}