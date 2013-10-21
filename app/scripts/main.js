var imgLoad = imagesLoaded( '#content' ),
    isLoading = false;

$('.nav_toggle').on('click', function () {
    $('nav').toggleClass('active');
});

$('[data-page]').on('click', function() {
    changePage.load($(this).data('page'));
});

var changePage = function changePage() {


    function load(page) {
        var currentPage = $('body').data('current');
        if(!isLoading && currentPage !== page) {
            isLoading = true;
            $('#content').append('<div class="page hidden"></div>');
            $('.page').last().load( page + '.html #inner' );
            setUpImageListener(page);
        }
    }

    function setUpImageListener(page) {
        $('#content').off().imagesLoaded().always( function( instance ) {
            $('.page').first().addClass('offPage');
            $('.page').last().removeClass('hidden');
            setTimeout( function() {
                $('body').data('current', page);
                $('.page').first().remove();
                isLoading = false;
            }, 2100 );
        });
    }

    return {
        load: load
    }
}();