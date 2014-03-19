;var oasthouse = (function () {
    'use strict';

    function init () {
        plane();
        rabbit();
        bee();
        wilf();
    }

    function plane(){
        $('.plane').css('display','block');
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

    function bee(){
        TweenMax.to(document.getElementById("bee"), 5, {bezier:{type:"soft", values:[{x:-100, y:-100}, {x:-50, y:-300}, {x:0, y:-600}, {x:-200, y:-300}, {x:-100, y:-100}, {x:0, y:0},], autoRotate:["x","y","rotation",150,false]}, ease:Power1.easeInOut});
    }

    function wilf(){
        $('.wilfHitOast').mouseover(function(){
            var wil = new TimelineLite();
            wil.to($('.wilfOast'), 0.7, {top:'145px' , ease: Quad.easeInOut});
        }).mouseleave(function(){
            var wil = new TimelineLite();
            wil.to($('.wilfOast'), 3, {top:'189px' , ease: Quad.easeInOut});
        });
        $('.wilfHitOast').bind('click', function(){
            moveworlds();
        })
    }

    return {
        init: init
    }
}());
