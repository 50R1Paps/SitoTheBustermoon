$(document).ready(function () {
  // cool nav menu
  $(window).on("load resize", function () {
    var $thisnav = $(".current-menu-item").offset().left;
    var $left = $(".current-menu-item").offset().left - $thisnav;
    var $width = $(".current-menu-item").outerWidth();

    // Store in a variable named pagelength the length of the page
    var pagelength = $(document).height();
    // Store in a variable named navbarwidth the width of the menu
    var navbarwidth = $(".menu").width() * 1;
    var step = pagelength / navbarwidth;

    var clickEventExecuted = false;

    // modify code to maintain left and width when element is clicked
    $(".menu-item").click(function () {
      clickEventExecuted = true;
      $left = $(this).offset().left - $thisnav;
      $width = $(this).outerWidth();
      $(".wee").css({ left: $left, width: $width });
      $(".current-menu-item").removeClass("current-menu-item");
      $(this).addClass("current-menu-item");
      var snd = new Audio("../Sounds/sound1.wav"); // buffers automatically when created
      snd.play();
      setTimeout(function () {
        clickEventExecuted = false;
      }, 1500);
    });

    // Add a function that is executed on the 'scroll' event
    $(window).on("scroll", function () {
      if (clickEventExecuted) {
        return;
      }
      // Get the current vertical scroll position of the page
      var scrollPos = $(window).scrollTop();

      var positionline = scrollPos / step;
      $(".wee").css({ left: positionline, width: $width });
    });

    $(".menu-item").hover(
      function () {
        var $left = $(this).offset().left - $thisnav;
        var $width = $(this).outerWidth();
        $(".wee").css({ left: $left, width: $width });
      },
      function () {
        $(".wee").css({ left: $left, width: $width });
        /*
      var snd = new Audio("../Sounds/sound3.wav");
      snd.play();
      */
      }
    );
  });
});
