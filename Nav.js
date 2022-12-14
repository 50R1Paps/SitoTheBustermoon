$(document).ready(function() {
  // cool nav menu
  $(window).on('load resize', function() {
    var $thisnav = $('.current-menu-item').offset().left;
    var $left = $('.current-menu-item').offset().left - $thisnav;
    var $width = $('.current-menu-item').outerWidth();

    $('.menu-item').hover(function() {
      var $left = $(this).offset().left - $thisnav;
      var $width = $(this).outerWidth();
      $('.wee').css({ 'left': $left , 'width': $width });
    }, function() {
      $('.wee').css({ 'left': $left , 'width': $width });
    });

    // modify code to maintain left and width when element is clicked
    $('.menu-item').click(function() {
      $left = $(this).offset().left - $thisnav;
      $width = $(this).outerWidth();
      $('.wee').css({ 'left': $left , 'width': $width });
      $('.current-menu-item').removeClass('current-menu-item');
      $(this).addClass('current-menu-item');
    });
  });
});
