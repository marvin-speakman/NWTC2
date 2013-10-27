var isLoading = false;
var parallax;
var paraOpt = {
                calibrateX: true, 
                calibrateY: true, 
                invertX: true,
                invertY: true,
                limitX: 20,
                limitY: 20,
                scalarX: 5,
                scalarY: 5,
                frictionX: 0.1,
                frictionY: 0.1
                }

var balloonSway = new TimelineMax({ repeat: -1, yoyo: true });
    balloonSway.append( TweenLite.to($('#balloon'), 3, {css:{rotation:10}, ease:Power2.easeInOut} ));

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
               
               parallax = new Parallax(scene, paraOpt);
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

var bodyBack;

$('[data-page]').on('click', function() {
    parallax.disable();
    var page = $(this).data('page');

    switch(page) {
        case 'index':
            // History.pushState(page,"New World Trading Co","index.html");
                bodyBack = '../images/nwtc/home_back.png';
                $('.balloon').css({
                      "top": "268px",
                      "left": "791px"
                    })
        break;
        case 'oasthouse':
           // History.pushState(page,"The Oasthouse - New World Trading Co","oasthouse.html");
            bodyBack = '../images/oasthouse/oast_back.png';
            $('.balloon').css({
                      "top": "148px",
                      "left": "510px"
                    })
         break;
        case 'botanist':
            // History.pushState(page,"The Botanist - New World Trading Co","botanist.html");
            bodyBack = '../images/botanist/bot_back.png';
             $('.balloon').css({
                      "top": "268px",
                      "left": "791px"
                    })
        break;
        case 'thesmugglerscove':
            // History.pushState(page,"The Smugglers Cove - New World Trading Co","smugglerscove.html");
            bodyBack = '../images/smugglers/smug_back.png';
             $('.balloon').css({
                      "top": "268px",
                      "left": "791px"
                    })
        break;
    }
/*    window.addEventListener('popstate', function(event) {
        console.log('popstate fired!');
       
    });*/
    setTimeout( function() {
        changePage.load(page);
    },250);

    setTimeout( function() {
        $('#content').css('background', 'url(' + bodyBack + ') ');
        }, 0 );
    $('nav').removeClass('active');
});

// Parallax on the content div //
var scene = document.getElementById('content');
parallax = new Parallax(scene,paraOpt);



