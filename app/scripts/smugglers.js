var smugglerscove = (function () {
    'use strict';

    function init () {
        cats();
        lime();
        chest();
        police();
        plane();
        go();
        wilf();
        smugglerBarrel();
    }

    function cats(){
        $('.piano1').bind('mouseenter', function() {
            $('.piano1').addClass('play');
            $('.noteMask').css('width','100px');

            var self = $(this);
            this.iid = setInterval(function() {
               $('.danceKitty').addClass('dance');
               setTimeout(function(){
                    $('.danceKitty').removeClass('dance');
               }, 500)
            }, 1000);
        }).bind('mouseleave', function(){
            $('.piano1').removeClass('play');
            $('.noteMask').css('width','0px');
            this.iid && clearInterval(this.iid);
        });
    }

    function smugglerBarrel(){
        $('.smugglerAnim').bind('mouseenter', function() {
            $('.smugBar').addClass('active');
        }).bind('mouseleave', function(){
            $('.smugBar').removeClass('active');
        });
    }

    function lime(){
        $('.limeAnim').bind('mouseenter', function(){
            $('.limeJuice').css('display','block');
            setTimeout(function(){
                $('.limeJuice2').css('display','block');
            }, 200);
            setTimeout(function(){
                $('.limeJuice').css('display','none');
                $('.limeJuice2').css('display','none');
            }, 1000);

        })
    }

    function go(){
        $('.goHit').bind('click', function(){
            window.location='#';
        })
    }

    function chest(){

        $('.chestHit').bind('mouseenter', function() {
            $('.chest').addClass('active');
            $('.chestHit').css('display', 'none');
            TweenMax.to(document.getElementById("moth"), 10, {bezier:{type:"soft", values:[{x:-40, y:-100}, {x:0, y:-600}, {x:200, y:-550}, {x:50, y:-500}, {x:100, y:-750}, {x:300, y:-350}, {x:600, y:-250}, {x:630, y:-300}, {x:850, y:-240}, {x:-40, y:-100},{x:-30, y:-10} ], autoRotate:["x","y","rotation",90,false], onComplete:function(){$('.chest').removeClass('active')}}, ease:Power1.easeInOut});
            setTimeout(function(){
                $('.chest').removeClass('active');
                $('.chestHit').css('display', 'block');
            }, 10000);
        });
    }

    function plane(){
        $('.plane').css('display','block');
        var plane = new TimelineMax({ repeat: -1});
        plane.append( TweenLite.to($('.plane'), 15, {css:{left:3000}, ease:Power0.linear} ));
    }

    function police(){
        $('.policemanAnim').bind('mouseenter', function() {
            $('.policeman').addClass('active');
            $('.smuggler').addClass('active');

        }).bind('mouseleave', function(){
            $('.policeman').removeClass('active');
            $('.smuggler').removeClass('active');
        });
    }

    function wilf(){
        $('.wilfHit').mouseover(function(){
            var wil = new TimelineLite();
            wil.to($('.wilf'), 0.7, {top:'60px' , ease: Quad.easeInOut});
        }).mouseleave(function(){
            var wil = new TimelineLite();
            wil.to($('.wilf'), 3, {top:'111px' , ease: Quad.easeInOut});
        });
        $('.wilfHit').bind('click', function(){
            moveworlds();
        })
    }

   
    return {
        init: init
    }
}());
