function generateReport(clickedElement) {
  var targetId = clickedElement.getAttribute('href').substring(1);
  $('html, body').animate({
    scrollTop: $('#' + targetId).offset().top-200
  }, 1000);
};