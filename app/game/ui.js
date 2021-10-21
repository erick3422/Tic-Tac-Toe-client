// Require so can share different files in the system
const store = require('../store')
console.log(store)

const OnCreateNewGame = function () {
  $('#message-display').text('Game Started')
  // When is create, show the display
  $('#game-board').show()
  $('form').trigger('reset')
}
// A function to run anytime any error occurs
const onError = function (err) {
  // if an error occurs, we will log the error (err)
  console.error(err)

  $('#error-message').text('Something went wrong, please try again ')
  $('#error-message').addClass('text-danger')

  // After 5 seconds, run our callback functions
  setTimeout(() => {
    // Remove the message from display-game
    $('#error-message').text('')
    // Remove the red color caused by 'text-danger'
    $('#error-message').removeClass('text-success')
  }, 5000)
}

module.exports = {
  OnCreateNewGame,
  onError
}
