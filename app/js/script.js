$('.header__nav-button').click(function() {
  $('.header__nav').toggleClass('header__nav--open');
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
  $('.footer__nav-title').click(function() {//Открытие скрытие меню в footer
    $(this).next().slideToggle(1000);
  });

  $('.learning-lang__item a').on('click', f_acc);

  function f_acc(e){
    e.preventDefault();
    //скрываем все кроме того, что должны открыть
    $('.learning-lang__item ul').not($(this).next()).slideUp(1000);
    // открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(1000);
  }

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

var gallerySubteachers = new Swiper('.subteachers--swiper-thumb', {
  spaceBetween: 34,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});

var swiperTeachers = new Swiper('.teachers--swiper-top', {
  slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
  },
  thumbs: {
    swiper: gallerySubteachers
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // breakpointsInverse: true,
  // breakpoints: {
  //   1170: {
  //     spaceBetween: 0,
  //   },
});
