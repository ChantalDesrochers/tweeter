

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

  $('.new-tweet').hide();
  $('.compose').click(function() {
    $('.new-tweet').toggle('slow', function() {
      $(this).find('textarea').focus();
    });
  });

      $("form").on("submit", function(event) {
            event.preventDefault();

            var char = +$('.counter').text()

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
                      renderTweets(data);
                    }
                  });

                }
              });
            }
          });



        });







/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

