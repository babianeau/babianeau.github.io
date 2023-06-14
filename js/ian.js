
const Ian = new Swiper('.swiper-container', {
effect: 'fade',
loop: 'true',
direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            clickable: true,
        },
        on: {
init: function () {
    const active = document.querySelector('.swiper-slide-visible');
    const static = document.querySelector('.invt, .IB-header');
    const mix = active.classList.contains('mix');
    
    if (mix == true) {
        static.classList.add('blend-mode');
    } else {
        static.classList.remove('blend-mode');
    }
        
},
},
    });

Ian.on('slideChange', function () {
    const active = document.querySelector('.swiper-slide-visible');
    const static = document.querySelector('.invt, .IB-header');
    const mix = active.classList.contains('mix');

    if (mix == true) {
        static.classList.add('blend-mode');
    } else {
        static.classList.remove('blend-mode');
    }
});

    divElem = document.querySelector(".IB-header");
    elemHgt = divElem.offsetHeight;
    var divs = document.querySelectorAll('.MH-fig');
    for (var i = 0; i < divs.length; i++) {
    divs[i].style.height = 'calc(100% - ' + elemHgt + 'px)';
    }

function resize() {
   divElem = document.querySelector(".IB-header");
   elemHgt = divElem.offsetHeight;
    var divs = document.querySelectorAll('.MH-fig');
    for (var i = 0; i < divs.length; i++) {
    divs[i].style.height = 'calc(100% - ' + elemHgt + 'px)';
    }
}
window.onresize = resize;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

Ian.on('click',function(swiper,event){ swiper.slideNext(); }); 
