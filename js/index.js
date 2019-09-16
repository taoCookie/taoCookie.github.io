var mouse = {
    X: 0,
    Y: 0,
    CX: 0,
    CY: 0
},
block = {
    X: mouse.X,
    Y: mouse.Y,
    CX: mouse.CX,
    CY: mouse.CY
};
$('.show-box').on('mousemove', function (e) {
mouse.X = (e.pageX - $(this).offset().left) - $('.show-box').width() / 2;
mouse.Y = (e.pageY - $(this).offset().top) - $('.show-box').height() / 2
});
$('.show-box').on('mouseleave', function (e) {
mouse.X = mouse.CX;
mouse.Y = mouse.CY
});
setInterval(function () {
block.CY += (mouse.Y - block.CY) / 12;
block.CX += (mouse.X - block.CX) / 12;
$('.show-box .circleLight').css('background', 'radial-gradient(circle at ' + mouse.X + 'px ' + mouse.Y +
    'px, #FEFFFB, transparent)');
$('.show-box').css('transform', 'scale(1.03) translate(' + (block.CX * 0.05) + 'px, ' + (block.CY * 0.05) +
    'px) rotateX(' + (block.CY * 0.05) + 'deg) rotateY(' + (block.CX * 0.05) + 'deg)')
}, 30);

var tips = $('.tips');
$('.list li').hover(
function () {
    $(this).find(tips).show(30);
},
function () {
    $(this).find(tips).hide();
}
);
$('.list li a').click(function () {
alert('!!!');
});

var navBar = true;
$('.menu-btn').click(function () {
if (navBar) {
    $('.menu').slideDown(300);
} else {
    $('.menu').slideUp(300);
}
navBar = !navBar;
});
if ($(window).width() < 768) {
$('.menu li').click(function () {
    $('.menu').slideUp(300);
});
}

$(window).scroll(function () {
$(window).scrollTop() > document.documentElement.clientHeight / 2 ? $('#GoUp').fadeIn() : $('#GoUp').fadeOut();
$('.menu-fixed').hide();
});
$('#GoUp').click(function () {
$('html,body').stop().animate({
    scrollTop: 0
}, 500);
});

var UnU = false;
$('.logo').on('click', function () {
if (UnU) {
    play();
} else {
    $('#audio').get(0).pause();
    $(this).css('animation', 'none');
}
UnU = !UnU;
});

$('.logo').css('animation', 'music 5s infinite linear');
var musicUrl =
'http://m10.music.126.net/20190916143513/acde831ac3c7a847b2ed9c3fb5eeb472/ymusic/98ac/fcc6/79bd/196991cba5a34d1feb099001ce1ad2b1.mp3';
$('#audio').attr("src", musicUrl);

function play() {
$('#audio').get(0).play();
$('.logo').css('animation', 'music 5s infinite linear');
}

$(function () {
var a_idx = 0;
jQuery(document).ready(function ($) {
    $('body').click(function (e) {
        var font = ['F', 'A', 'N', 'G', 'J', 'I', 'E', 'S', 'O', 'N', 'G'];
        var $i = $('<span/>').text(font[a_idx]); 
        a_idx = (a_idx + 1) % font.length;
        var x = e.pageX,
            y = e.pageY;
        $i.css({
            'z-index': 99999,
            'top': y - 20,
            'left': x,
            'position': 'absolute',
            'color': '#12A3EA',
            'font-weight': '700',
            'font-family': 'hyllh'
        });
        $('body').append($i);
        $i.animate({
                'top': y - 180,
                'opacity': 0
            },
            1500,
            function () {
                $i.remove();
            }
        );
    });
});
});
$('.show-box > h1,.show-box > h3,.show-box > p').addClass('animated fadeInUp');
$('.my-avatar,.headline,.flex-item,.say,.timeline,.contact-box').addClass('animated fadeIn');
$('.my-avatar,.headline,.flex-item,.say,.timeline,.contact-box').attr('data-wow-duration', '1s');
$('.view-box').addClass('animated bounceInRight');
$('.moveup').addClass('animated fadeInUp');
var item = $('.flex-wrap > .flex-item');
for (var i = 0; i < item.length; i++) {
item.eq(i).attr('data-wow-delay', (i / 10) + 's');
}
$(window).load(function () {
$('body').addClass('loaded');
$('#loeder-wrapper').fadeOut(300);

setTimeout(function () {
    play()
}, 500);
});


