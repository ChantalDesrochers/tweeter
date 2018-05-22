$(document).ready(function() {
  $('.new-tweet').find('textarea').on('keyup', function() {
  var charCount = $(this).val().length;
  // var counter = $(this).find('.counter').text();
  // var counter2 = $(this).children('span.counter').text(); // eventually get more specific
  var inremain = 140 - charCount;
  if (inremain < 0) {
    $('.counter').text(inremain).css("color", "red");
  } else {
    $('.counter').text(inremain);
  }
});
});

