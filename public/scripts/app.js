
// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
// ]



function createTweetElement(twObj) {
console.log(twObj);
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
  $('#tweets-container').html("");
 tweets.forEach(function(tweet) {
   createTweetElement(tweet).prependTo("#tweets-container");
 });
}

// $(document).ready(function() {
//  renderTweets(data);
// });

///char input function
function loadTweets() {
   $.ajax({
    url: '/tweets',
    method: 'GET',
    success: function (tweets) {
    renderTweets(tweets);
  }
});
}





$(document).ready(function() {
      loadTweets();
      $("form").on("submit", function(event) {
            event.preventDefault();

            var char = +$('.counter').text()

            // create tweets
            if (char >= 140) {
              $('.counter').text("You must input some text in the field");
            } else if (char <= 0) {
              $('.counter').text("Tweets must be less than 140 characters");
            } else {
              var tweet = $(this).serialize();
              var post = $.ajax({
                type: "POST",
                url: "/tweets",
                data: tweet,
                success: function() {
                  $.ajax({
                    method: "GET",
                    url: "/tweets",
                    success: function(data) {
                      $("form")[0].reset();
                      renderTweets(data);// createTweetElement(tweet[tweet.length - 1]).prependTo("#tweets-container");
                    }
                  });

                }
              });
            }
          });
        });




//changed so can make a new commit
// $.ajax({
//   type: "POST",
//   url: "/tweets",
//   data: tweet,
//   success: success,
//   dataType: json;
// });
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

