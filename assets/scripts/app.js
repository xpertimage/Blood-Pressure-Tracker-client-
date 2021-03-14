'use strict'
const authEvents = require('./auth/events')
const readingEvents = require('./readings/events')
const display = require('./forms')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#signUpForm').on('submit', authEvents.onSignUpForm)
  $('#signInForm').on('submit', authEvents.onSignInForm)
  $('#chgPassForm').on('submit', authEvents.onChgPassForm)
  $('.btn-SignOut').on('click', authEvents.onSignOut)
  $('.btn-SignUp').on('click', display.signUp)
  $('.btn-SignIn').on('click', display.signIn)
  $('.back').on('click', display.start)
  $('.btn-seeAllReadings').on('click', readingEvents.showAll)
  $('#signedInForm').on('submit', readingEvents.rCreate)
  $('#findForm').on('submit', readingEvents.rFind)
  $('#deleteForm').on('submit', readingEvents.rDelete)
  $('#updateForm').on('submit', readingEvents.rUpdate)
})

display.start()
