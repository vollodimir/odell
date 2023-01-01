jQuery(document).ready(function ($) {
  // go-top

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 800) {
      $('.go-top').show();
      console.log('1111');
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
    $(this).children('.sub-menu').slideToggle('fast');
  });
});
