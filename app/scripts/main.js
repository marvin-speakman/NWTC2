
var isLoading = false,
parallax,
currentPage = 'index',
worlds = ['oasthouse','botanist','smugglerscove'],
paraOpt = {
    calibrateX: true,
    calibrateY: true,
    invertX: true,
    invertY: true,
    limitX: 10,
    limitY: 0,
    scalarX: 2,
    scalarY: 2,
    frictionX: 0.1,
    frictionY: 0.1
};

var balloonSway = new TimelineMax({ repeat: -1, yoyo: true });
balloonSway.append( TweenLite.to($('#balloon'), 3, {css:{rotation:10}, ease:Power2.easeInOut} ));



var changePage = (function changePage() {
    function load(page) {
        currentPage = $('body').data('current');
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
                console.log(page);
                var tmp = window[page];
                console.log(tmp);
                tmp.init();
                parallax.enable();
            }, 3500 );
        });
    }

    return {
        load: load
    };
}());

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

$('.nav_toggle').on('click', function () {
    $('nav').toggleClass('active');
});

var bodyBack,
worldNo = worlds.length,
tempWorld = 0;
shuffle(worlds);
console.log(worlds);

function navigate(page){
    parallax.disable();
    switch(page) {
        case 'index':
            //History.pushState(page,'New World Trading Co','index.html');
            bodyBack = 'images/nwtc/home_back.jpg';
            $('.balloon').css({
                'top': '268px',
                'left': '791px',
                'height': '100%',
                'width': '100%'
            });
            break;
        case 'oasthouse':
            //History.pushState(page,'The Oasthouse - New World Trading Co','oasthouse.html');
            bodyBack = 'images/oasthouse/oast_back.jpg';
            $('.balloon').css({
                'top': '148px',
                'left': '510px'
            });
            break;
        case 'botanist':
            //History.pushState(page,'The Botanist - New World Trading Co','botanist.html');
            bodyBack = 'images/botanist/bot_back.jpg';
            $('.balloon').css({
                'top': '288px',
                'left': '1200px'
            });
            break;
        case 'smugglerscove':
            //History.pushState(page,'The Smugglers Cove - New World Trading Co' , 'smugglerscove.html');
            bodyBack = 'images/smugglers/smug_back.jpg';
            $('.balloon').css({
                'top': '480px',
                'left': '1310px'
            });
            break;
    }
    setTimeout( function() {
        changePage.load(page);
    },0);
    setTimeout( function() {
        $('html,body').css({'background': 'url(' + bodyBack + ')'});
    }, 0 );
}

//$('.wilfHit').on('click', function(){
function moveworlds(){
    if(curWorld == 'index'){
        curWorld = worlds[0];
        ++tempWorld;
        console.log(curWorld);

        navigate(curWorld);
    }else{
        curWorld = worlds[tempWorld]
         ++tempWorld;
         console.log(curWorld);
         if(tempWorld >= worldNo){
            tempWorld = 0;
         }
         navigate(curWorld);
    }
}
//});

// Parallax on the content div //
var scene = document.getElementById('content');

var curWorld = 'index';



// opening functions //

$('.wilfred').on('click', function(){
    $('.balloon').css({
      "top": "268px",
      "left": "791px"
    })
    $('.overlay').css('opacity', '0');
    setTimeout( function() {
        index.init();
        parallax = new Parallax(scene,paraOpt);
        $('.overlay').css('display', 'none');
    }, 1500);
})


var preloads = [
'images/smugglers/smug_back.jpg',
'images/botanist/bot_back.jpg',
'images/oasthouse/oast_back.jpg',
'images/nwtc/home_back.jpg'
];
var i = 0;
$(preloads).each(function(i){
    $('.fake')[i].src = this;
    i++
});

