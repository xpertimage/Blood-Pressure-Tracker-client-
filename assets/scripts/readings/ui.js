const store = require('../store')
// const display = require('../forms')
const createSuccess = function (response) {
  $('#error-message').text('BP Reading Created')
  $('#sign-up').trigger('reset')
  // display.form3()
}

const createFailure = function (response) {
  $('#error-message').text('BP Record creation failed, try again')
  $('#sign-up').trigger('reset')
}

const indexSuccess = function (response) {
  console.log('Response= ', response)
  $('#error-message').text('BP Readings Fetched', response)
  $('#sign-up').trigger('reset')
  // display.form3()
}

const indexFailure = function (response) {
  $('#error-message').text('Fetching BP records failed, try again')
  $('#sign-up').trigger('reset')
}

module.exports = {
  createFailure,
  createSuccess,
  indexSuccess,
  indexFailure
}
