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
    var page = $(this).data('page');
    switch(page) {
        case 'home':
            History.pushState(page,"New World Trading Co","index.html");
        break;
        case 'oasthouse':
            History.pushState(page,"The Oasthouse - New World Trading Co","oasthouse.html");
        break;
        case 'botanist':
            History.pushState(page,"The Botanist - New World Trading Co","botanist.html");
        break;
        case 'thesmugglerscove':
            History.pushState(page,"The Smugglers Cove - New World Trading Co","smugglerscove.html");
        break;
    }
    window.addEventListener('popstate', function(event) {
        console.log('popstate fired!');
        changePage.load(page);
    });
    $('nav').removeClass('active');
});

