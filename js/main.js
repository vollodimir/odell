jQuery(document).ready(function ($) {
  // go-top

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 800) {
      $('.go-top').show();
    } else {
      $('.go-top').hide();
    }
  });

  $('.go-top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  ////----sub menu

  $('.menu-item-has-children').on('click', function () {
    if ($(document).width() < 1023) {
      $(this).children('.sub-menu').slideToggle('fast');
    }
  });
});
