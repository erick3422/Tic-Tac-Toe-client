// Require our api function for functionality
const api = require('./api')
// Require out ui function to make the page work properly
const ui = require('./ui')
// Require function to get important data from our current forms
const getFormFields = require('../../lib/get-form-fields')

const onNewGame = (event) => {
  // Prevent the page to refresh itself
  event.preventDefault()

  // Storing every submitted in form variable
  const form = event.target

  const formData = getFormFields(form)
  console.log(formData)

  // Make a HTTP request, to start a new game in the page
  api.create(formData)
    // If start a new game is successfully
    .then(ui.OnCreateNewGame)
    // Otherwise, show an error message
    .catch(ui.onError)
}

module.exports = {
  onNewGame
}
