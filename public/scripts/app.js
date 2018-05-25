

function createTweetElement(twObj) {

var $tweet = $("<article>").addClass("all-tweets"); //rename classes and ids


function timeSincePost() {
var date = Date.now();
var postDate = twObj.created_at;
var timeElapsed = date - postDate;
var timeString = "";
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const weeks = day * 7;


if (timeElapsed > weeks) {
var numberOfWk = Math.floor(timeElapsed / weeks);
timeElapsed -= numberOfWk * weeks;
if(numberOfWk === 1) {
  timeString += `Posted ${numberOfWk} week ago`;
} else {
  timeString += `Posted ${numberOfWk} weeks ago`;
}
return timeString;
}

if (timeElapsed > day) {
var numberOfDay = Math.floor(timeElapsed / day);
timeElapsed -= numberOfDay * day;
if (numberOfDay === 1) {
  timeString += `Posted ${numberOfDay} day ago`;
} else {
  timeString += `Posted ${numberOfDay} days ago`;
}
return timeString;
}

if (timeElapsed > hour) {
var numberOfHr = Math.floor(timeElapsed / hour);
timeElapsed -= numberOfHr * hour;
if (numberOfHr === 1) {
  timeString += `Posted ${numberOfHr} hour ago`;
} else {
  timeString += `Posted ${numberOfHr} hours ago`;
}
return timeString;
}

if (timeElapsed > minute) {
var numberOfMin = Math.floor(timeElapsed / minute);
timeElapsed -= numberOfMin * minute;
if (numberOfMin === 1) {
  timeString += `Posted ${numberOfMin} minute ago`;
} else {
  timeString += `Posted ${numberOfMin} minutes ago`;
}
return timeString
}
 return "Posted seconds ago";
}




$tweet.append(`
          <header>
          <img src="${twObj.user.avatars.small}"/>
          <h2>${twObj.user.name}</h2>
          <p>${twObj.user.handle}</p>
        </header>
        <p class="tweet-content">${twObj.content.text}</p>
        <footer><p>${timeSincePost()}</p>
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
                      $('.counter').text("140");
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

