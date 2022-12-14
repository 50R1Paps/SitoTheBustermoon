/*
This code is written in JavaScript and uses the jQuery library to manipulate elements on a web page.

The code sets up an event listener for when the page is first loaded, or when the browser window is resized. When either of these events occurs, the function defined in the code will run.

The function begins by storing the left offset and width of the element with the class "current-menu-item" in variables named $left and $width.

Next, the code sets up two event listeners for when a menu item is hovered over or clicked. When either of these events occurs, the function defined in the code will run.

For the hover event listener, the function first calculates the left offset and width of the hovered menu item, and then uses jQuery's .css() method to set the "left" and "width" CSS properties of an element with the class "wee" to the values calculated earlier.

For the click event listener, the function first calculates the left offset and width of the clicked menu item, and then uses jQuery's .css() method to set the "left" and "width" CSS properties of an element with the class "wee" to the values calculated earlier.

The function then removes the "current-menu-item" class from the previously selected menu item and adds it to the clicked menu item.

Overall, this code seems to be setting up some sort of navigation menu with a highlighting effect when a menu item is hovered over or clicked.

*/


$(document).ready(function() {
  // cool nav menu
  $(window).on('load resize', function() {
    var $thisnav = $('.current-menu-item').offset().left;
    var $left = $('.current-menu-item').offset().left - $thisnav;
    var $width = $('.current-menu-item').outerWidth();
    // Store the original left and width of the element
    var originalLeft = $('.current-menu-item').offset().left;
    var originalWidth = $('.current-menu-item').outerWidth();

    var clickEventExecuted = false;
   
    // modify code to maintain left and width when element is clicked
    $('.menu-item').click(function() {
      clickEventExecuted = true;
      $left = $(this).offset().left - $thisnav;
      $width = $(this).outerWidth();
      $('.wee').css({ 'left': $left , 'width': $width });
      $('.current-menu-item').removeClass('current-menu-item');
      $(this).addClass('current-menu-item');
      //clickEventExecuted = false
    });

  

// Add a function that is executed on the 'scroll' event
    $(window).on('scroll', function() {
      if (clickEventExecuted) {
        return;
      }
      // Get the current vertical scroll position of the page
      var scrollPos = $(window).scrollTop();

      // If the user has scrolled down
      if (scrollPos > 0) {
        // Get the current left and width of the element
        var $left = $('.current-menu-item').offset().left;
        var $width = $('.current-menu-item').outerWidth();

        // Use the .css() method to set the left and width of the element
        $('.wee').css({ 'left': $left, 'width': $width });
      }
      // If the user has scrolled up
      else {
        // Use the original left and width of the element
        $('.wee').css({ 'left': originalLeft, 'width': originalWidth });
      }
    });



    $('.menu-item').hover(function() {
      var $left = $(this).offset().left - $thisnav;
      var $width = $(this).outerWidth();
      $('.wee').css({ 'left': $left , 'width': $width });
    }, function() {
      $('.wee').css({ 'left': $left , 'width': $width });
    });

    
  });
});
