const store = require('../store')
// const display = require('../forms')
const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
  // display.form3()
}

const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, try again')
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
  // Show the change-password form and the sign-out button
  $('#error-message').text('Thank you for signing in')
  $('#sign-in').trigger('reset')
}

const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, please try again')
}

const changePasswordSuccess = function (response) {
  $('#error-message').text('Password changed.')
  $('#changePassword').trigger('reset')
}
const changePasswordFailure = function (response) {
  $('#error-message').text('Password change failed. Please try again.')
}

const signOutSuccess = function (response) {
  // display.form1()
  $('#error-message').text('Thanks for playing. You are now signed out')
}

const signOutFailure = function (response) {
  $('#error-message').text('Sign Out failed')
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
