var History = window.History,
    State = History.getState();

    // if (!History.enabled) {
    //     return false;
    // }

// Parallax on the content div //
var scene = document.getElementById('content');
parallax = new Parallax(scene,paraOpt);

History.options.disableSuid = true; //stop SUID being appeneded in IE
History.replaceState({toshow: "index"},"New World Trading Co","/");


var isLoading = false
    parallax;
var paraOpt = {
                calibrateX: true, 
                calibrateY: true, 
                invertX: true,
                invertY: true,
                limitX: 20,
                limitY: 20,
                scalarX: 5,
                scalarY: 5,
                frictionX: 1,
                frictionY: 0.2
                }

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
            setTimeout(function() {
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

$('nav a').on('click', function(event) {
    event.preventDefault();
    parallax.disable();
    var page = $(this).data('page');
    switch(page) {
        case 'index':
            History.pushState({toshow: page},"New World Trading Co","index.html");
        break;
        case 'oasthouse':
            History.pushState({toshow: page},"The Oasthouse - New World Trading Co","oasthouse.html");
        break;
        case 'botanist':
            History.pushState({toshow: page},"The Botanist - New World Trading Co","botanist.html");
        break;
        case 'smugglerscove':
            History.pushState({toshow: page},"The Smugglers Cove - New World Trading Co","smugglerscove.html");
        break;
    }

    //changePage.load(page);
    $('nav').removeClass('active');
});

History.Adapter.bind(window,'statechange',function(){
    var State = History.getState(),
    changePage.load(State.data.toshow);
});

