
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];





function createTweetElement(twObj) {

var $tweet = $("<article>").addClass("all-tweets"); //rename classes and ids

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


// function createTweetElement(twObj) {

// var $tweet = $("<article>").addClass("all-tweets"); //rename classes and ids

// // var formattedDate = new Date(twObj.created_at);

// $tweet.append(`
//           <header>
//           <img src="https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png"/>
//           <h2>UserName</h2>
//           <p>myHandle</p>
//         </header>
//         <p class="tweet-content">${twObj}</p>
//         <footer><p>May 20th</p>
//           <div class="tweet-icons">
//             <i class="fas fa-flag"></i>
//             <i class="fas fa-retweet"></i>
//             <i class="fas fa-heart"></i>
//           </div>
//         </footer>`);

// return $tweet;

// }

function renderTweets(tweets) {
 tweets.forEach(function(tweet) {
   createTweetElement(tweet).appendTo("#tweets-container");
 });
}

// $(document).ready(function() {
//  renderTweets(data);
// });



// $("form").on("submit", function(event) {
//   event.preventDefault();
//   var tweet = $(this).serialize();
//   $.post("http://localhost:8080/tweets/", tweet, createTweetElement(tweet)
//     )};
$(document).ready(function() {
$("form").on("submit", function(event) {
  event.preventDefault();
  var tweet = $(this).serialize();
  $.post("/tweets", tweet, createTweetElement(tweet).appendTo("#tweets-container"));
    })


function loadTweets() {
   $.ajax({
    url: '/tweets',
    method: 'GET',
    success: function (tweets) {
    renderTweets(tweets);
  }
});
}
loadTweets();
});




/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

