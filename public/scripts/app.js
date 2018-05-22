const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}



function createTweetElement(twObj) {
var $tweet = $("<article>").addClass("all-tweets");
 var $header = $("<header>").appendTo($tweet);
 var $footer = $("<footer>").appendTo($tweet);
 $("<img>").attr("src", twObj.user.avatars.small).appendTo($header);
 $("<h2>").text(twObj.user.name).appendTo($header);
 $("<p>").text(twObj.user.handle).appendTo($header);
 $("<p>").addClass("tweet-content").text(twObj.content.text).appendTo($tweet);
 $("<p>").text(twObj.created_at).appendTo($footer);
  var $icons = $("<div>").addClass("tweet-icons").appendTo($footer);
$("<i>").addClass("fas fa-flag").appendTo($icons);
$("<i>").addClass("fas fa-retweet").appendTo($icons);
$("<i>").addClass("fas fa-heart").appendTo($icons);

 return $tweet;

}

$(document).ready(function() {
    var $tweet = createTweetElement(tweetData);
    $('.all-tweets').append($tweet)
});







/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

