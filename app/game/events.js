// Require our api function for functionality
const api = require('./api')
// Require out ui function to make the page work properly
const ui = require('./ui')
// Require function to get important data from our current forms
const getFormFields = require('../../lib/get-form-fields')
// Require for know who is the first to click

// Variable for the Two different player, start with 'X'
let playerTurn = 'X'
const winningSpaces = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [2, 5, 8],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [1, 4, 7],
  [3, 4, 5]
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
  playerTurn = playerTurn === 'O' ? 'X' : 'O'
}

const checkWinner = (event) => {
  if (winningSpaces[0] === playerTurn) {
    if (winningSpaces[1] === playerTurn && winningSpaces[2] === playerTurn) {
      event.target = `${playerTurn} wins up to top`
      return true
    }
    if (winningSpaces[3] === playerTurn && winningSpaces[6] === playerTurn) {
      event.target = `${playerTurn} wins on the left`
      return true
    }
    if (winningSpaces[4] === playerTurn && winningSpaces[8] === playerTurn) {
      event.target = `${playerTurn} wins diagonally`
      return true
    }
  }
  if (winningSpaces[8] === playerTurn) {
    if (winningSpaces[2] === playerTurn && winningSpaces[5] === playerTurn) {
      event.target = `${playerTurn} wins on the right`
      return true
    }
    if (winningSpaces[6] === playerTurn && winningSpaces[7] === playerTurn) {
      event.target = `${playerTurn} wins on the bottom`
      return true
    }
  }
  if (winningSpaces[4] === playerTurn) {
    if (winningSpaces[1] === playerTurn && winningSpaces[7] === playerTurn) {
      event.target = `${playerTurn} wins vertically on middle`
      return true
    }
    if (winningSpaces[3] === playerTurn && winningSpaces[5] === playerTurn) {
      event.target = `${playerTurn} wins horizontally on the middle`
      return true
    }
    if (winningSpaces[2] === playerTurn && winningSpaces[6] === playerTurn) {
      event.target = `${playerTurn} wins diagonally`
      return true
    }
  }
}
const checkDraw = (event) => {
  let draw = 0
  winningSpaces.forEach((winningSpaces, i) => {
    if (winningSpaces[i] !== null) draw++
  })
  if (draw === 9) {
    event.target = 'Draw'
  }
}

const restartGame = (event) => {
  setTimeout(() => {
    winningSpaces.forEach((space, i) => {
      winningSpaces[i] = null
    })
    winningSpaces.forEach((box) => {
      box.innerText = ''
    })
    event.target.innerText = 'Play'
  }, 1000)
}
module.exports = {
  onNewGame,
  onSpace,
  checkWinner,
  checkDraw,
  restartGame

}
