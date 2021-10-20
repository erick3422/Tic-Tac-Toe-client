// Require our api function for functionality
const api = require('./api')
// Require out ui function to make the page work properly
const ui = require('./ui')
// Require function to get important data from our current forms
const getFormFields = require('../../lib/get-form-fields')
// Require for know who is the first to click

// Variable for the Two different player, start with 'X'
let playerTurn = 'X'
const movementCheck = [
  '', '', '', '', '', '', '', '', ''

]

// This Create a New game to Start
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

const onSpace = (event) => {
  console.log('click')
  const box = $(event.target)
  box.text(playerTurn)
  movementCheck[event.target.id] = playerTurn
  checkWinner()
  playerTurn = playerTurn === 'O' ? 'X' : 'O'
}

const checkWinner = () => {
  if (movementCheck[0] === playerTurn && movementCheck[1] === playerTurn && movementCheck[2] === playerTurn) {
    $('#AndWinnerIs').text(`${playerTurn} Wins up to top `)
  } if (
    movementCheck[0] === playerTurn && movementCheck[3] === playerTurn &&
    movementCheck[6] === playerTurn
  ) {
    $('#AndWinnerIs').text(`${playerTurn} Wins on the left `)
  } if (
    movementCheck[0] === playerTurn && movementCheck[4] === playerTurn &&
    movementCheck[8] === playerTurn
  ) {
    $('#AndWinnerIs').text(`${playerTurn} Wins diagonally `)
  } if (
    movementCheck[2] === playerTurn && movementCheck[5] === playerTurn &&
    movementCheck[8] === playerTurn
  ) {
    $('#AndWinnerIs').text(`${playerTurn} Wins on the right `)
  } if (
    movementCheck[6] === playerTurn && movementCheck[7] === playerTurn &&
    movementCheck[8] === playerTurn
  ) {
    $('#AndWinnerIs').text(`${playerTurn} Wins on the bottom `)
  } if (
    movementCheck[2] === playerTurn && movementCheck[4] === playerTurn &&
    movementCheck[6] === playerTurn
  ) {
    $('#AndWinnerIs').text(`${playerTurn} Wins vertically on the middle `)
  } if (
    movementCheck[1] === playerTurn &&
    movementCheck[4] === playerTurn &&
    movementCheck[7] === playerTurn
  ) {
    $('#AndWinnerIs').text(`${playerTurn} Wins horizontally on the middle`)
  } if (
    movementCheck[3] === playerTurn && movementCheck[4] === playerTurn &&
    movementCheck[5] === playerTurn
  ) {
    $('#AndWinnerIs').text(`${playerTurn} Wins diagonally `)
  }
}
const checkDraw = () => {
  let draw = 0
  movementCheck.forEach((movementCheck, i) => {
    if (movementCheck[i] !== null) draw++
  })
  if (draw === 9) {
    $('#AndWinnerIs').text("It's a draw")
  }
}

const RestartGame = (event) => {
  console.log('click')
  $('.box').text('')
  playerTurn = 'X'
  movementCheck[event.target.id] = playerTurn
}
module.exports = {
  onNewGame,
  onSpace,
  checkWinner,
  checkDraw,
  RestartGame

}
