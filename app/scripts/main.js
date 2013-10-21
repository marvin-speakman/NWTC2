$('.nav_toggle').on('click', function () {
    $('nav').toggleClass('active');
});

var changePage = function changePage() {
    var currentPage = $('body').data('page');

    function loadNext(page) {
        $.ajax({
            url: window.location.hostname + '/' + page + '.html'
        }).done(function( data ) {
            if ( console && console.log ) {
                console.log( 'Yeah Boy' );
            }
        });
    }
}