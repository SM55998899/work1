window.addEventListener('DOMContentLoaded', function(){
    $('#slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,                    // スライドを3秒で切り替え
        arrows: true,                           // 左右の矢印を表示
        dots: true,                             // ドット（ページ送り）を表示
        slidesToShow: 1,                        // スライドを1枚表示（※centerModeをtrueにすると両端に2枚見切れた状態になる）
        centerMode: true,                       // センターモード（両端が見切れた状態になる）
        centerPadding: '26%',                   // 見切れたコンテンツの幅を18%に設定
        prevArrow:'<div class="prev"></div>',   // 前へ矢印のHTMLを変更する
        nextArrow:'<div class="next"></div>',   // 次へ矢印のHTMLを変更する
        responsive:[
            {
                breakpoint: 900,
                settings: {
                    centerMode: false
                }
            }
        ]
    });
});





window.addEventListener('DOMContentLoaded',function(){
    $('.hamburger').on('click', function(){
        hamburger();
    });

    $('#navi a').on('click',function(){
        hamburger();
    });

})

function hamburger() {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $('.hamburger').toggleClass('active');
  
    if ($('.hamburger').hasClass('active')) {
      // hamburgerクラスにactiveクラスが存在する場合は、naviにもactiveクラスを追加する
      $('#navi').addClass('active');
    } else {
      // hamburgerクラスにactiveクラスが存在しない場合は、naviからactiveクラスを削除する
      $('#navi').removeClass('active');
    }
};

window.addEventListener('DOMContentLoaded',function(){
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.slide-left').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

window.addEventListener('DOMContentLoaded',function(){
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('.slide-right').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

window.addEventListener('DOMContentLoaded',function(){
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('#history').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

window.addEventListener('DOMContentLoaded',function(){
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('#ingredients').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});

window.addEventListener('DOMContentLoaded',function(){
    $(window).scroll(function () {
        const wHeight = $(window).height();
        const scrollAmount = $(window).scrollTop();
        $('#onlinestore').each(function () {
            const targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 60) {
                $(this).addClass("fadeInDown");
            }
        });
    });
});