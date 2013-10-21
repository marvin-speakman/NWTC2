var imgLoad = imagesLoaded( '#content' );

$('.nav_toggle').on('click', function () {
    $('nav').toggleClass('active');
});

$('[data-page]').on('click', function() {
    changePage.load($(this).data('page'));
});

var changePage = function changePage() {
    var currentPage = $('body').data('current');

    function load(page) {
        $('#content').append('<div class="page hidden"></div>');
        $('.page').last().load( page + '.html #content' );
        setUpImageListener();
    }

    function setUpImageListener() {
        $('#content').off().imagesLoaded().always( function( instance ) {
            $('.page').last().removeClass('hidden')
        });
    }

    return {
        load: load
    }
}();