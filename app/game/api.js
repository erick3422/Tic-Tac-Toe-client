// formDate will be our credential for sign-up
const config = require('../config')

// Function to have access to the store
const store = require('../store')
console.log(store)

const create = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    // So can start a new game
    data: formData
  })
}

module.exports = {
  create
}
