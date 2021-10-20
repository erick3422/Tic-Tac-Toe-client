// Require so can share different files in the system
const store = require('../store')
console.log(store)

const signUpSuccess = function (responseData) {
  // Tell the user it was successful
  $('#message-display').text('Signed successfully!')

  // Remove existing classes, then add a green text-success class from bootstrap
  $('#message-display').removeClass()
  $('#message-display').addClass('text-success')

  // Clear (reset) all of the forms
  $('forms').trigger('reset')

  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  // Tell the user it was failure
  $('#error-message').text('Sign up failed!')

  // Remove existing classes, then add a green text-success class from bootstrap
  $('#error-message').removeClass()
  $('#error-message').addClass('text-danger')

  // print the error
  console.error('error is', error)
}

const signInSuccess = function (responseData) {
  // we are going to add the `user` we got back in our response's data
  // to the `store` object. So we can access the user's token
  // later in api.js
  store.user = responseData.user
  console.log('store is', store)

  // tell the user it was successful
  $('#message-display').text('Welcome to Tic Tac Toe!')

  // remove existing classes, then add a green text-success class from bootstrap
  $('#message-display').removeClass()
  $('#message-display').addClass('text-success')

  // clear (reset) all of the forms
  $('form').trigger('reset')

  // After we sign in, hide the section with the id `before-sign-in`
  $('#before-sign-in').hide()
  // After we sign in, hide the section with the id `middle-sign-in`
  $('#middle-sign-in').hide()
  // After we sign in, show the section with the id `after-sign-in`
  $('#after-sign-in').show()
  // After we sig in, show the section with the id `new-game`
  $('#new-game').show()

  console.log('responseData is', responseData)
}

const signInFailure = function (error) {
  // tell the user it was failure
  $('#error-message').text('Sign in failed')

  // remove existing classes, then add a red text-danger class from bootstrap
  $('#error-message').removeClass()

  // print the error
  console.error('error is', error)
}

const signOutSuccess = function () {
  $('#message-display').text('See you later!')

  $('#message-display').removeClass()

  $('form').trigger('reset')

  // stop keeping track of the signed in user
  store.user = null

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  // Hide the "after sign in" elements
  $('#after-sign-in').hide()
  // Display the "before sign in" elements
  $('#before-sign-in').show()
  // Also show the element with the id `middle-sign-in`
  $('#middle-sign-in').show()
  // Also hide the element with the id `new-game`
  $('#new-game').hide()
  // Hide the Tic Tac Toe board
  $('#game-board').hide()

  console.log('signOutSuccess ran and nothing was returned!')
}

const signOutFailure = function (error) {
  $('#error-message').text('Error on sign out')

  $('#error-message').removeClass()

  // clear (reset) the forms on the page
  $('form').trigger('reset')

  console.error('signOutFailure ran. Error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
