$(document).ready(function() {
    $('.js-account').click(function() {
        $(this).children('.header-dropdown').toggle();
    });

    $('.js-bars-icon').click(function() {
        $('.js-vertical-aside').toggleClass('open');
    });

    let mediaQuery = window.matchMedia('(max-width: 1024px)');
    function toggleAside(media) {
        if(media.matches) {
            $('.js-vertical-aside').removeClass('open');
        } else {
            $('.js-vertical-aside').addClass('open');
        }
    }

    toggleAside(mediaQuery);
    mediaQuery.addListener(toggleAside);
    
    $('.main-content').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        if(mediaQuery.matches) {
            $('.js-vertical-aside').removeClass('open');
        }
    });
});