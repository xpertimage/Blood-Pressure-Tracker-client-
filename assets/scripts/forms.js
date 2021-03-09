const hideAll = function () {
  // $('#signUpForm').hide()
  // $('#signInForm').hide()
  // $('#signedInForm').hide()
  // $('.btn-SignOut').hide()
  // $('#startForm').hide()
  // $('#chgPassForm').hide()
  // console.log('hideAll Executed!')
}
// const showAll = function () {
//   $('#signUpForm').show()
//   $('#signInForm').show()
//   $('.btn-SignOut').show()
//   $('#startForm').show()
//   $('#chgPassForm').show()
//   console.log('ShowAll Executed!')
// }
const start = function () {
  hideAll()
  $('#startForm').show()
  console.log('start Executed!')
}
const signUp = function () {
  hideAll()
  $('#signUpForm').show()
  console.log('Forms.js - sign-up ran')
}
const signIn = function () {
  hideAll()
  $('#signInForm').show()
}

module.exports = {
  hideAll,
  start,
  signUp,
  signIn
}
