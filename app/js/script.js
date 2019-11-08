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
