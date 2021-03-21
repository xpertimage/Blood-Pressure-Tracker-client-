const store = require('../store')
const display = require('../forms')
const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
  display.start()
}

const signUpFailure = function (response) {
  $('#error-message').text(response.responseJSON.message)
  $('#sign-up').trigger('reset')
}

const signInSuccess = function (response) {
  // if the User is succesful at signing in then
  // store the HTTP response from the server in the 'user'
  // variable. The token will be used in any other HTTP
  // requests during this session.
  // display.form4()
  // console.log(response.user)
  store.user = response.user
  // console.log('signInSuccess')
  // console.log(response)
  // console.log(store)
  // Show the change-password form and the sign-out button
  $('#error-message').text('Thank you for signing in')
  $('#sign-in').trigger('reset')
  display.signedIn()
}

const signInFailure = function (response) {
  console.log(response.responseJSON.message)
  $('#error-message').text(response.responseJSON.message)
  $('#sign-in').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#error-message').text('Password changed.')
  $('#changePassword').trigger('reset')
}
const changePasswordFailure = function (response) {
  $('#error-message').text(response.responseJSON.message)
  $('#changePassword').trigger('reset')
}

const signOutSuccess = function (response) {
  // display.form1()
  $('#error-message').text('You are now signed out')
  display.start()
}

const signOutFailure = function (response) {
  $('#error-message').text(response.responseJSON.message)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
