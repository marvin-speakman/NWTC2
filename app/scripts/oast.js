;var oasthouse = (function () {
    'use strict';

    function init () {
        plane();
        rabbit();
        bee();
        wilf();
        beeHit();
        trains();
        forks();
        horse();
    }

    function forks() {
        // Constant wheel spin
        var fork = $('.forks');
        TweenMax.to(fork,6, {rotation:360,repeat:-1,ease:Linear.easeNone});
    }

    function plane(){
        setTimeout(function(){
            $('.plane').css('display','block'); 
        }, 1000);
        var plane = new TimelineMax({ repeat: -1});
        plane.append( TweenLite.to($('.plane'), 15, {css:{left:3000}, ease:Power0.linear} ));
    }

    function rabbit(){
        $('.rabbit').bind('mouseenter', function() {
            $('.rabbit').addClass('active');
        }).bind('mouseleave', function(){
            $('.rabbit').removeClass('active');
        });
    }

    function horse(){
        var olive = new TimelineMax({onComplete:function(){$('.horse').css('display','block'); $('.horse-feeder').removeClass('active'); $('.olive').css('top','-480px');}});
        $('.horse').bind('mouseenter', function() {
            $('.horse').css('display','none');
            $('.horse-feeder').addClass('active');
            olive.append( TweenLite.to($('.olive'), 2, {css:{top:300}, ease:Power2.linear} ));
        })
    }

    function bee(){
        TweenMax.to(document.getElementById("bee"), 5, {bezier:{type:"soft", values:[{x:-100, y:-100}, {x:-50, y:-300}, {x:0, y:-600}, {x:-200, y:-300}, {x:-100, y:-100}, {x:0, y:0},], autoRotate:["x","y","rotation",150,false]}, ease:Power1.easeInOut});
    }

    function beeHit(){
        $('#bee').bind('mouseenter', function(){
            bee();
        })
    }

    function trains(){
        var train = new TimelineLite({onComplete:function(){$('.trainHit').css('display', 'block')}});
        $('.trainHit').mouseover( function(){
            $(this).css('display', 'none')
            train.to($('.trainLeft'), 1, {left:'-300px' , ease: Quad.easeInOut});
            train.to($('.trainRight'), 1, {left:'150px' , ease: Quad.easeInOut}, "-=0.7");
        }).mouseleave(function(){
            train.to($('.trainRight'), 2, {left:'-300px' , ease: Quad.easeInOut});
            train.to($('.trainLeft'), 2, {left:'150px' , ease: Quad.easeInOut}, "-=1");
            
        });
    }

    function wilf(){
        $('.wilfHitOast').mouseover(function(){
            var wil = new TimelineLite();
            wil.to($('.wilfOast'), 0.7, {top:'145px' , ease: Quad.easeInOut});
        }).mouseleave(function(){
            var wil = new TimelineLite();
            wil.to($('.wilfOast'), 3, {top:'212px' , ease: Quad.easeInOut});
        });
        $('.wilfHitOast').bind('click', function(){
            moveworlds();
        })
    }

    return {
        init: init
    }
}());
