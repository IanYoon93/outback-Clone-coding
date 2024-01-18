$(function () {
  // 헤더 gnb
  $('#header .gnb .depth02').hide();

  $('#header .gnb>li').on('mouseenter', function() {
    var posX = $(this).position().left + 15;
    var w = $(this).find('>a').outerWidth();

    $(this).find('.depth02').show().parent().siblings().find('.depth02').hide();
    $('#header .gnb_bar').css({ transform: 'translateX(' + posX + 'px)', width: w + 'px', opacity: 1 });
  });

  $('#header .gnb>li').on('mouseleave', function() {
    $('#header .gnb .depth02').hide();
    $('#header .gnb_bar').css({ opacity: 0});
  })
  
  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    speed: 800,
    effect: 'fade',
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 메인 프로덕트
  var mainProduct = new Swiper('.main_product', {
    loop: true,
    simulateTouch: false,
    slidesPerView: 'auto',
    speed: 600,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.main_product_wrap .swiper-button-next',
      prevEl: '.main_product_wrap .swiper-button-prev',
    },
  });

  // 푸터 패밀리사이트
  $('#footer .btn_family').on('click', function(e) {
    e.preventDefault();

    $(this).toggleClass('on');
    $('#footer .family').stop().slideToggle(400);
  });

  // 푸터 탑버튼
  $('#footer .btn_top').on('click', function (e) {
    e. preventDefault();

    $('html, body').animate({scrollTop : 0}, 600);
  });
});
