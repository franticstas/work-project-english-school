$('.header__nav-button').click(function() {
  $('.header__nav').toggleClass('header__nav--open');
  //$('body').toggleClass('overflow-hidden');
  $('.mask').toggleClass('show');
});

$('.page-header__close-nav').click(function() {
  $('.page-header__nav').removeClass('page-header__nav--open');
  $('body').removeClass('overflow-hidden');
  $('.mask').removeClass('show');
});

$('.mask').click(function() {
  $('.page-header__nav').removeClass('page-header__nav--open');
  $('body').removeClass('overflow-hidden');
  $('.mask').removeClass('show');
});

let $headerNavItems = $('.header__nav-item');
$headerNavItems.each(function () {
  if ($(this).find('ul').length) {
    $(this).addClass('header__nav-item--sub');
  }
});

if ( $(window).width() < 768 ) {
  var swiperLearning = new Swiper('.learning__list--swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  var swiperAdvantages = new Swiper('.advantages--slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
    },
    breakpointsInverse: true,
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });

  var swiperReviews = new Swiper('.reviews--swiper', {
    slidesPerView: 1,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
