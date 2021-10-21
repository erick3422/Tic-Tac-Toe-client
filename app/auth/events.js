// Require function to get important data from our current forms
const getFormFields = require('../../lib/get-form-fields')

// Require our api function for functionality
const api = require('./api')
// Require out ui function to make the page work properly
const ui = require('./ui')

const onSignUp = function (event) {
  // Prevent the page to refresh when interact with it
  event.preventDefault()

  // event.target is the form that cause the `submit` event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  //  POST/sign-up request, pass it email/password/confirmation
  api.signUp(formData)
    // If our sign up request is successful, will run the signUpSuccess function
    .then(ui.signUpSuccess)
    // Otherwise, if an error ocurred, will run a signFailure function
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // Prevent the page to refresh when interact with it
  event.preventDefault()

  // event.target is the form that caused the 'submit' event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  // POST /sign-in request, pass it the email/password/confirmation
  api.signIn(formData)
    // if our sign in request is successful, run the signUpSuccess function
    .then(ui.signInSuccess)
    // otherwise, if an error occurred, run a signInFailure function
    .catch(ui.signInFailure)
}

const onSignOut = function (event) {
  // Prevent the page to refresh when interact with it
  event.preventDefault()
  // Console telling me the sign out run as expected
  console.log('sign out ran')

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut
}
