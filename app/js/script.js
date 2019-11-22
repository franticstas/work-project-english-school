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

  var swiperCorporate = new Swiper('.corporate-swiper', {
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
});

if ( $(window).width() < 1170 ) {
  $('.price__body').hide();
  $('.lang-group__body').hide();

  $('.price__title--js').click(function () {
    $(this).toggleClass('price__title--open');
    $(this).next().slideToggle(1000);
  });

  $('.lang-group__title--js').click(function () {
    $(this).toggleClass('lang-group__title--open');
    $(this).next().slideToggle(1000);
  });

  $('.header__nav-item--sub a').on('click', f_sub);

  function f_sub(e){
    e.preventDefault();
    //скрываем все кроме того, что должны открыть
    $('.header__nav-item--sub ul').not($(this).next()).slideUp(1000);
    // открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(1000);
  }
}

//Табы
;(function (window, document, $, undefined) {
  if (!$) {
    return undefined;
  }
  $.fn.extend({
    SKtab: function (options) {
      let $th = this;
      let tabActiveClass = 'active';
      let containerActiveClass = 'active';
      let tabContainerClass = 'tab-container';
      let activeTab = 0;

      if (options.active) {
        activeTab = options.active;
      }

      if (options.tabContainerClass) {
        tabContainerClass = options.tabContainerClass;
      }

      if (options.tabActiveClass) {
        tabActiveClass = options.tabActiveClass;
      }

      if (options.containerActiveClass) {
        containerActiveClass = options.containerActiveClass;
      }

      $('.'+tabContainerClass).hide();

      let classess = '.'+this[0].classList[0];

      $(document).on('click', classess, function() {
        if ($(this).hasClass(tabActiveClass)) {
          return false;
        }
        $(classess).removeClass(tabActiveClass);
        $(this).addClass(tabActiveClass);
        let container = '#'+$(this).data('container');
        $('.'+tabContainerClass).hide();
        $(container).fadeIn().addClass(containerActiveClass);

        return false;
      });

      $($(classess)[activeTab]).click();

    }
  });
}(window, document, window.jQuery));

$('.tab-item').SKtab({
  active: 0, //Какой таб будет выбран по умолчанию
  tabActiveClass: 'active-tab', //Класс который назначается выбранному табу
  containerActiveClass: 'active', //Класс который назначается выбранному контейнеру
  tabContainerClass: 'tab-container', //Класс табконтейнеров табов
});

$('.faq__question-answer').hide();

$('.faq__question-title').on('click', f_faq);

function f_faq(){
  //e.preventDefault();
  //скрываем все кроме того, что должны открыть
  $('.faq__question-answer ').not($(this).next()).slideUp(1000);
  // открываем или скрываем блок под заголовком, по которому кликнули
  if ($(this).hasClass('faq__question-title--open')) {
    $(this).removeClass('faq__question-title--open');
    $(this).next().slideToggle(1000);
  }
  else {
    $('.faq__question-title').removeClass('faq__question-title--open');
    $(this).addClass('faq__question-title--open');
    $(this).next().slideToggle(1000);
  }
}

//npm$('.select--js').select2();

//Кастомная метка на картах
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
      center: [47.235277, 39.704988],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),

    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Языковой центр в Ростове-на-Дону Express Lingua',
      balloonContent: 'Языковой центр в Ростове-на-Дону Express Lingua'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-logo.png',
      // Размеры метки.
      iconImageSize: [168, 84],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-90, -90]
    });

  myMap.geoObjects
    .add(myPlacemark);
});
