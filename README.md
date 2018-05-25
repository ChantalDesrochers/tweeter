# Tweeter Project

Tweeter is a single-page Twitter clone that uses JS, JQuery, HTML5, CSS and AJAX on the client side, and Node, Express and MongoDB on the server-side.

##Final Product
The finalized app allows for users to type into a text input within a character count of 140 or under. If users try to submit a tweet over or under the 140 characters, they will be notified that they cannot. Tweets are stored within a database and will persist with server restarts.
UX was touched on by having some interactive pieces such as the for toggle via the submit button. The form resets upon a tweet submission and the character counter is reset. New tweets are rendered at the top of the page, and are stylized to pop when hovered over.


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- MongoDB
- Body-Parser
