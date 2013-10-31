var botanist = (function () {
    'use strict';

    function init () {
        birds();
        //rain();
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

        birds_hit.off().on('mouseenter touchstart', function() {
            birdsEl.animation.play();
        });

        birds_hit.off().on('mouseleave touchend', function() {
            birdsEl.animation.pause();
        });
    }

    function rain() {
        // Raining Cloud
        var rainHits = $('.rain_hit'),
            raindrops = $('.raindrops'),
            rainAnim = new TimelineMax({paused:true});

        rainAnim
            .insert(TweenMax.to(raindrops, 0.2, {rotation:2, ease:Linear.easeNone, repeat: 6, yoyo: true}), 0)
            .insert(TweenMax.to(raindrops, 1.2, {top: '120px', ease:Linear.easeNone}), 0)


        raindrops.animation = rainAnim;

        $(document).off().on('mouseenter', rainHits)
    }

    return {
        init: init
    }
}());
