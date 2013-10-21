var isLoading = false;
var changePage = (function changePage() {
    'use strict';

    function load(page) {
        var currentPage = $('body').data('current');
        if(!isLoading && currentPage !== page) {
            isLoading = true;
            $('#content').append('<div class="page hidden"></div>');
            $('.page').last().load( page + '.html #inner' );
            setUpImageListener(page, currentPage);
        }
    }

    function setUpImageListener(page, currentPage) {
        $('#content').off().imagesLoaded().always( function() {
            $('.page').first().addClass('offPage');
            $('.page').last().removeClass('hidden');
            $('body').addClass(page);
            setTimeout( function() {
                $('body').data('current', page).removeClass(currentPage);
                $('.page').first().remove();
                isLoading = false;
            }, 2100 );
        });
    }

    return {
        load: load
    };
}());

$('.nav_toggle').on('click', function () {
    $('nav').toggleClass('active');
});

$('[data-page]').on('click', function() {
    changePage.load($(this).data('page'));
    $('nav').removeClass('active');
});

