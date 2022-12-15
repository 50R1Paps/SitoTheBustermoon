$(document).ready(function () {
  // cool nav menu
  $(window).on("load resize", function () {
    var $thisnav = $(".current-menu-item").offset().left;
    var $left = $(".current-menu-item").offset().left - $thisnav;
    var $width = $(".current-menu-item").outerWidth();

    // Store the original left and width of the element
    var originalLeft = $(".current-menu-item").offset().left;
    var originalWidth = $(".current-menu-item").outerWidth();

    var clickEventExecuted = false;

    // modify code to maintain left and width when element is clicked
    $(".menu-item").click(function () {
      clickEventExecuted = true;
      $left = $(this).offset().left - $thisnav;
      $width = $(this).outerWidth();
      $(".wee").css({ left: $left, width: $width });
      $(".current-menu-item").removeClass("current-menu-item");
      $(this).addClass("current-menu-item");
      var snd = new Audio("sound1.wav"); // buffers automatically when created
      snd.play();
      setTimeout(function () {
        clickEventExecuted = false;
      }, 1200);
    });

    // Add a function that is executed on the 'scroll' event
    $(window).on("scroll", function () {
      if (clickEventExecuted) {
        return;
      }
      // Get the current vertical scroll position of the page
      var scrollPos = $(window).scrollTop();

      // If the user has scrolled down
      if (scrollPos > 0) {
        // Get the current left and width of the element
        var $left = $(".current-menu-item").offset().left;
        var $width = $(".current-menu-item").outerWidth();

        // Use the .css() method to set the left and width of the element
        $(".wee").css({ left: $left, width: $width });
      }
      // If the user has scrolled up
      else {
        // Use the original left and width of the element
        $(".wee").css({ left: originalLeft, width: originalWidth });
      }
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
      var snd = new Audio("sound3.wav");
      snd.play();
      */
      }
    );
  });
});
