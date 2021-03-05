const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')
// const display = require('../forms')
// require the get form fields function
const getFormFields = require('../../../lib/get-form-fields')

const onSignUpForm = function (event) {
  event.preventDefault()

  // get data from html form
  const form = event.target
  const data = getFormFields(form)
  // send data to api for sign up
  api.signUpForm(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignInForm = function (event) {
  event.preventDefault()
  // console.log(event)
  // get data from html form
  const form = event.target
  const data = getFormFields(form)
  // send data to api for sign in
  api.signInForm(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// const onChangePassword = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const data = getFormFields(form)
//   // console.log('Events.js - data=', data)
//   api.changePassword(data)
//     .then(ui.changePasswordSuccess)
//     .catch(ui.changePasswordFailure)
// }
//
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut(store.user)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}
//
// const onSettings = function (event) {
//   event.preventDefault()
//   display.form5()
// }
//
// const onBack = function () {
//   $('.game-history').text('')
//   $('#error-message').text('')
//   display.form4()
// }
module.exports = {
  onSignUpForm,
  onSignInForm,
  onSignOut
  // onSettings,
  // onBack,
  // onChangePassword
}
