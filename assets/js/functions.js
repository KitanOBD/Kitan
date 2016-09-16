// Deomonstrate modularity
function timerModule (options) {
    var defaults = {
            interval: 1
        },
        settings,
        functions = [],
        timer;

    settings = $.extend({}, defaults, options);

    function start () {
        timer = setTimeout(function () {
            // execute functions
            for (var i = 0; i < functions.length; i++)
                functions[i]();

            stopTimer();
            start();
        }, (settings.interval * 1000));
    }

    function stopTimer () {
        clearTimeout(timer);
    }

    function attachFunction (func) {
        if ($.isFunction(func)) {
            functions.push(func);
            return true;
        }

        return false;
    }

    return {
        attachFunction: attachFunction,
        start: start,
        stop: stopTimer
    }
}

(function ($, timer) {

    "use strict"

    var $window;

    function fumbleArticle () {
        var $articles = $('.article-thumb'),
            randNum = Math.floor(Math.random() * $articles.length) + 1

        $articles.eq(randNum).addClass('is-emph')
        .siblings().removeClass('is-emph');
    }

    function swapDribbleBackground () {
        var $tile = $('.design-img-link');

        // on hover
        $tile.hover(function (e) {
            var $this = $(this),
                $container = $this.parents().parents();

            $container.css({
                'background-color': $(this).data('color')
            });

        // off hover
        }, function (e) {
            var $this = $(this),
                $container = $this.parents().parents();

            $container.css({
                'background-color': $container.data('orig-color')
            });
        });
    }

    $(document).ready(function () {
        // Variable definition
        $window = $(window);

        // Change background (designBGStuff)
        swapDribbleBackground();

        // (articleTada)
        timer.attachFunction(fumbleArticle);
        timer.start();
    });

})(jQuery, timerModule({
    interval: 4
}));

//
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

	})(jQuery);
});
