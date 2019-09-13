//鐑涘厜鏁堟灉
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

//鑱旂郴鏂瑰紡
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
alert('鍐呭寰呮坊鍔� QWQ 鎰熻阿鍏虫敞!!!');
});

//瀵艰埅鏍�
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

//GoTop
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
'https://m8.music.126.net/20190123232934/0f34155137e6ca232332bf65ca6f1fb2/ymusic/36dd/2955/b8d8/c11b9a875c2b3ae666a7314bb1a10e0e.mp3';
$('#audio').attr("src", musicUrl);

function play() {
$('#audio').get(0).play();
$('.logo').css('animation', 'music 5s infinite linear');
}
// 宸﹂敭鐐瑰嚮鍔ㄧ敾
$(function () {
var a_idx = 0;
jQuery(document).ready(function ($) {
    $('body').click(function (e) {
        var font = ['F', 'A', 'N', 'G', 'J', 'I', 'E', 'S', 'O', 'N', 'G'];
        var $i = $('<span/>').text(font[a_idx]); //鏂板缓span鏍囩
        a_idx = (a_idx + 1) % font.length;
        var x = e.pageX,
            y = e.pageY; //鑾峰彇榧犳爣鐐瑰嚮鐨勫潗鏍�
        $i.css({
            'z-index': 99999,
            'top': y - 20,
            'left': x,
            'position': 'absolute',
            'color': '#12A3EA',
            'font-weight': '700',
            'font-family': 'hyllh'
        }); //缁欑敓鎴愮殑span鏍囩鍔犱笂 鏍峰紡
        $('body').append($i);
        $i.animate({
                'top': y - 180,
                'opacity': 0
            },
            1500,
            function () {
                $i.remove();
            }
        ); //娑堝け鍔ㄧ敾鏁堟灉
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
// setTimeout(function(){
// 	$('.pv').fadeOut(300);
// },6000);
setTimeout(function () {
    play()
}, 5000);
});

// // 鑷畾涔夊彸閿彍鍗�
// document.oncontextmenu = function() {  
//     return false;  
// };
// // 鐐瑰嚮榧犳爣閿�
// $(document).mousedown(function(e){
//     // 榧犳爣閿� 1(宸﹂敭)锛�2榧犳爣婊氳疆锛�3鍙抽敭
//     var key = e.which; 
//     // 鐐瑰嚮榧犳爣鍙抽敭
//     if(key == 3){
//         var x = e.clientX; // x 妯潗鏍�
//         var y = e.clientY; // y 绾靛潗鏍�
//         // $('#zb').html('x = ' + x + '  ,  y = ' + y); 鏄剧ず鍧愭爣鍊�

//         // 鑾峰彇menu鐨勫搴﹀拰楂樺害
//         var menuHeight = $('.menu-fixed').height();
//         var menuWidth = $('.menu-fixed').width();
//         // 鑾峰彇娴忚鍣ㄧ殑鍙楂樺害鍜屽搴�
//         var clientHeight = getClientHeight();
//         var clientWidth = getClientWidth();
//         // 鍒ゆ柇
//         if(menuHeight + y > clientHeight){
//             y = clientHeight - menuHeight - 5;
//         }
//         if(menuWidth + x > clientWidth){
//             x = clientWidth - menuWidth - 5;
//         }
//         $('.menu-fixed').show().css({left:x,top:y});
//     }

// });
// // 鐐瑰嚮绌虹櫧鍖哄煙 闅愯棌榧犳爣鍙抽敭
// $(document).click(function(){
//     $('.menu-fixed').hide();
// });
// // 娴忚鍣ㄧ殑鍙楂樺害
// function getClientHeight() {
//     var clientHeight = 0;
//     if (document.body.clientHeight && document.documentElement.clientHeight) {
//         clientHeight = (document.body.clientHeight < document.documentElement.clientHeight) ? document.body.clientHeight: document.documentElement.clientHeight;
//     } else {
//         clientHeight = (document.body.clientHeight > document.documentElement.clientHeight) ? document.body.clientHeight: document.documentElement.clientHeight;
//     }
//     return clientHeight;
// }
// // 娴忚鍣ㄧ殑鍙瀹藉害
// function getClientWidth() {
//     var clientWidth = 0;
//     if (document.body.clientWidth && document.documentElement.clientWidth) {
//         clientWidth = (document.body.clientWidth < document.documentElement.clientWidth) ? document.body.clientWidth: document.documentElement.clientWidth;
//     } else {
//         clientWidth = (document.body.clientWidth > document.documentElement.clientWidth) ? document.body.clientWidth: document.documentElement.clientWidth;
//     }
//     return clientWidth;
// }

// $('.menu-fixed > li').eq(0).click(function(){
// 	location.reload();
// })
// function Reido() {
// 	document.onkeydown = function(a) {
// 		a = window.event || a;
// 		if (123 == a.keyCode || a.ctrlKey && a.shiftKey && 73 == a.keyCode || a.shiftKey && 121 == a.keyCode) return !1
// 	}
// }
// Reido();
// document.oncontextmenu = function() {
// 	return !1
// };
