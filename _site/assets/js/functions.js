$(function() {
	smoothScroll(600);

});

  // smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
// -----------------------------------------------------------------------------
// Global functionality
// -----------------------------------------------------------------------------
$(document).ready(function () {
(function ($) {

    "use strict"

    var $body,
        $window,
        settings = {
            scrollDuration: 300
        };

    function onMobileToggleClick (e) {
        var $this = $(this),
            $navigation = $('.mobile-nav, .header-position');

        $this.toggleClass('is-open');
        $navigation.toggleClass('is-open');
    }

    function onBlankLinkClick (e) {
        var $this = $(this),
            href = $this.attr('href'),
            $target = $(href);

        if ($target.length == 0)
            return;

        e.preventDefault();

        $body.animate({
            scrollTop: $target.offset().top
        }, settings.duration);
    }

    function bindings () {
        // Toggle mobile navigation (mobileNav)
        $('.mobile-nav-toggle').on('click', onMobileToggleClick);

        // Smooth scroll (smoothScroll)
        $('a[href^="#"]').on('click', onBlankLinkClick);
    }

    $(document).ready(function () {
        // Variable definitions
        $body = $('html, body');
        $window = $(window);

        bindings();
    });

});

});
