function randomFromInterval(from,to) {
    return Math.floor(Math.random()*(to-from+1)+from);
}

var botanist = (function () {
    'use strict';

    function init () {
        birds();
        jarFall();
        flowers();
        cloudRain();
        wheel();
        //rain();
    }

    function wheel() {
        // Constant wheel spin
        var wheel = $('.wheel');
        TweenMax.to(wheel,6, {rotation:360,repeat:-1,ease:Linear.easeNone});
    }

    function birds() {
        // Jumping Birds
        var birds_hit = $('.birds_hit'),
            birdsEl = $('.birds'),
            birdsAnim = new TimelineMax({paused:true, stagger: 2, repeat: 1000});

        birdsAnim
            .to(birdsEl, 0, {backgroundPosition:'-1px -129px', ease:Linear.easeNone, delay: 0.6})
            .to(birdsEl, 0, {backgroundPosition:'-26px -229px', ease:Linear.easeNone, delay: 0.6})
            .to(birdsEl, 0, {backgroundPosition:'-13px 0', ease:Linear.easeNone, delay: 0.6});

        birdsEl.animation = birdsAnim;

        birds_hit.off('mouseenter touchstart').on('mouseenter touchstart', function() {
            birdsEl.animation.play();
        });

        birds_hit.off('mouseleave touchend').on('mouseleave touchend', function() {
            birdsEl.animation.pause();
        });
    }

    function jarFall(){
        $('.jarHit').mouseover(function(){
            var btl = new TimelineLite();
            btl.to($('.jar'), 0.7, {rotation:-150, transformOrigin: "22px bottom" , ease: Quad.easeOut});
            btl.to($('.jar'), 2.2, {top: '1000px' , ease:Quad.easeOut}, '-=0.2');
            btl.to($('.jar'), 2.2, {rotation: -360, transformOrigin: "middle middle" , ease: Quad.easeOut}, '-=2.1');
        });
    }

    function flowers () {
        TweenMax.to($('.d1'), 1, { css: { opacity: 1, top: 239 - randomFromInterval(10, 90), left: 415 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 0.4 });
        TweenMax.to($('.d2'), 1, { css: { opacity: 1, top: 233 - randomFromInterval(10, 90), left: 383 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 0.4 });
        TweenMax.to($('.d3'), 1, { css: { opacity: 1, top: 150 - randomFromInterval(10, 90), left: 255 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 0.5 });
        TweenMax.to($('.d4'), 1, { css: { opacity: 1, top: 188 - randomFromInterval(10, 90), left: 389 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 0.6 });
        TweenMax.to($('.d5'), 1, { css: { opacity: 1, top: 198 - randomFromInterval(10, 90), left: 325 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 0.7 });
        TweenMax.to($('.d6'), 1, { css: { opacity: 1, top: 169 - randomFromInterval(10, 90), left: 182 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 0.8 });
        TweenMax.to($('.d7'), 1, { css: { opacity: 1, top: 79 - randomFromInterval(10, 90), left: 301 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 0.9 });
        TweenMax.to($('.d8'), 1, { css: { opacity: 1, top: 67 - randomFromInterval(10, 90), left: 216 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 1 });
        TweenMax.to($('.d9'), 1, { css: { opacity: 1, top: 83 - randomFromInterval(10, 90), left: 95 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 1.1 });
        TweenMax.to($('.d10'), 1, { css: { opacity: 1, top: 5 - randomFromInterval(10, 90), left: 0 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 1.2 });
        TweenMax.to($('.d11'), 1, { css: { opacity: 1, top: 0 - randomFromInterval(10, 90), left: 134 - randomFromInterval(10, 90) }, ease: Quad.easeInOut, delay: 1.3 });
        for (var i = 10; i >= 0; i--) {
            TweenMax.to($('.d1'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d2'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d3'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d4'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d5'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d6'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d7'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d8'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d9'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d10'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
            TweenMax.to($('.d11'), 1.4, { css: { opacity: i/10, top: '+=50', left: '+=' + randomFromInterval(-50, 50)}, ease: Linear.easeNone, delay: 3.4-(i/10) });
        }
    }

    function cloudRain(){
        $('.cloud_hit').mouseover(function(){
            var cloud = new TimelineMax();
            cloud.to($('.cloud_rain'), 1.7, {left: 634, ease: Linear.easeNone}, 0);
            cloud.to($('.rain'), 0.2, {rotation:2, ease:Linear.easeNone, repeat: 6, yoyo: true}, 1.7);
            cloud.to($('.rain'), 1.2, {top: 0, ease:Linear.easeNone}, 1.7);
        });
    }

    return {
        init: init
    }
}());
