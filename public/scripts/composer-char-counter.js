$(document).ready(function() {
  $('.new-tweet').find('textarea').on('keyup', function() {
    const totalChar = 140;
    const charCount = $(this).val().length;
    const inremain = totalChar - charCount;
    if (inremain < 0) {
      $(this).siblings('.counter').text(inremain).css("color", "red");
    } else if (inremain >= 0) {
      $(this).siblings('.counter').text(inremain).css("color", "black");
    }
  });
});