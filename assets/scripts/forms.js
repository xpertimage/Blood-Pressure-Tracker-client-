
const uiMessages = require('./readings/ui')
const showElement = (elName) => {
  $('.all').hide(0, () => $("#" + elName).show())
}
const start = function () {
  uiMessages.clearMessages()
  showElement ('startForm')
}
const signUp = function () {
  showElement ('signUpForm')
}
const signIn = function () {
  showElement('signInForm')
}

const signedIn = function () {
  showElement('signedInForm')
}


const chgPass = function () {
  showElement('chgPassForm')
}

const find = function () {
  showElement('findForm')
}

const update = function () {
  showElement('updateForm')
}

const deleteForm = function () {
  showElement('deleteForm')
}

module.exports = {
  start,
  signUp,
  signIn,
  signedIn,
  deleteForm,
  chgPass,
  update,
  find,

}
