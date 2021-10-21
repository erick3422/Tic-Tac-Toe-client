// formDate will be our credential for sign-up
const config = require('../config')

// Function to have access to the store
const store = require('../store')
console.log(store)

const signUp = function (formData) {
  // Make a request to POST /sign-up
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    // Make sure to send the fromData along the data
    data: formData
  })
}

const signIn = function (formData) {
  // make a request to POST /sign-in
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    // make sure to send the formData along as the body of our request
    // this is similar to --data in the curl script
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      // Add an authorization header that includes the user's token
      // so the API knows who is trying to sign out
      // We added the user to `store` when we signed in, so we could access the token
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut
}
