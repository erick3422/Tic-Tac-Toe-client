// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const ticEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')
const gameEvents = require('./game/events')
$(() => {
  // Control the signUp functions
  $('#sign-up').on('submit', ticEvents.onSignUp)
  // Control the sign-in functions
  $('#sign-in').on('submit', ticEvents.onSignIn)
  // Control the sign-out functions
  $('#sign-out').on('submit', ticEvents.onSignOut)
  // Display a new game
  $('#new-game').on('submit', gameEvents.onNewGame)
  // Click Handler when space space is clicked in game board
  $('.box').on('click', gameEvents.onSpace)
  // Cheeking for the winner and say it
  $('#AndWinnerIs').on('click', gameEvents.checkWinner)
})
