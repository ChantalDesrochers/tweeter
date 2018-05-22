function createTweetElement(twObj) {
  var handle = twObj["user"]["handle"];
  console.log(handle);
  var $tweet = $('p').val(handle).parents('article');
  return $tweet;
}






/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

