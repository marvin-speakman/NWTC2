;var oasthouse = (function () {
    'use strict';

    function init () {
/*        diver();
        bottleFall();
        ele();
        windGirl();
        waiterFall()*/
    }

    function diver(){
        var dtl = new TimelineLite();
        dtl.to($('.diver'), 0.2, {top:'0px' , ease: Power2.easeOut});
        dtl.to($('.rainMask'), 0.7, {height: '300px' , ease:Quad.easeIn})
    }

    function ele(){
        var etl = new TimelineMax({repeat:10, repeatDelay:5});
        etl.add(TweenLite.to($('.eHead'), 3, {rotation:'20' ,ease:Quad.easeInOut}));
        etl.add(TweenLite.to($('.eHead'), 3, {rotation:'0' ,ease:Quad.easeInOut}));
    }

    function bottleFall(){
        $('.bottleHit').mouseover(function(){
            var btl = new TimelineLite();
            btl.to($('.bottleFall'), 0.1, {rotation:-180, transformOrigin: "middle left" , ease: Quad.easeOut});
            btl.to($('.bottleFall'), 1.5, {top: '1000px' , ease:Quad.easeOut}, "-=1.2")
        });
    }

    function windGirl(){
        $('.windHit').mouseover(function(){
            var wtl = new TimelineMax();
            wtl.to($('.wind'), 1, { css: { opacity: 1, left: -10, top: -27 }, ease: Quad.easeInOut});
            wtl.to($('.wt1'),4, {css: {rotation: '1800'}, ease: Quad.easeInOut}, "-=0.7")
            wtl.to($('.wt2'),4, {css: {rotation: '1800'}, ease: Quad.easeInOut}, "-=3.5")
            wtl.to($('.wt3'),4, {css: {rotation: '1800'}, ease: Quad.easeInOut}, "-=3.5")
            wtl.to($('.wt4'),4, {css: {rotation: '1800'}, ease: Quad.easeInOut}, "-=3.5")
            wtl.to($('.wt5'),4, {css: {rotation: '1800'}, ease: Quad.easeInOut}, "-=3.5")
        });
    }

    function waiterFall(){
        $('.waiterHit').mouseover(function(){
            var wftl = new TimelineLite();
            wftl.to($('.wBottle'), 2, {rotation:-360 , transformOrigin: "middle left", ease: Quad.easeInOut});
            wftl.to($('.wBottle'), 1.5, {top:1000 , ease: Quad.easeInOut}, '-=1.2');
            //TweenLite.to($('.wBottle'), 3, {top: 1000px, rotation: -90} , ease:Quad.easeOut}, "-=0.7")
        });
    }


    return {
        init: init
    }
}());
