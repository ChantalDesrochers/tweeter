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



// var $tweet = $("<article>").addClass("all-tweets");
//  var $header = $("<header>").appendTo($tweet);

//  $("<img>").attr("src", twObj.user.avatars.small).appendTo($header);
//  $("<h2>").text(twObj.user.name).appendTo($header);
//  $("<p>").text(twObj.user.handle).appendTo($header);
//  $("<p>").addClass("tweet-content").text(twObj.content.text).appendTo($tweet);
//  var $footer = $("<footer>").appendTo($tweet);
//  $("<p>").text(twObj.created_at).appendTo($footer);
//   var $icons = $("<div>").addClass("tweet-icons").appendTo($footer);
// $("<i>").addClass("fas fa-flag").appendTo($icons);
// $("<i>").addClass("fas fa-retweet").appendTo($icons);
// $("<i>").addClass("fas fa-heart").appendTo($icons);

//  return $tweet;

// }


var $tweet = $("<article>").addClass("all-tweets");
var aTweet =  `

        <header>
          <img src="
https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png">
          <h2>Bill Fields</h2>
          <p>@MrFields</p>
        </header>
        <p class="tweet-content">Little tweet here</p>
        <footer><p>10 days ago</p>
          <div class="tweet-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      `

// $tweet.append(aTweet);

var formattedDate = new Date(twObj.created_at);

$tweet.append(`
          <header>
          <img src="${twObj.user.avatars.small}"/>
          <h2>${twObj.user.name}</h2>
          <p>${twObj.user.handle}</p>
        </header>
        <p class="tweet-content">${twObj.content.text}</p>
        <footer><p>${formattedDate.toDateString()}</p>
          <div class="tweet-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>`);

return $tweet;

}






$(document).ready(function() {
    var $tweet = createTweetElement(tweetData);
    $('#allTweets').append($tweet)
});







/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

