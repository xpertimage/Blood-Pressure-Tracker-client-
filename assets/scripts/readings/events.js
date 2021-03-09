const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
const store = require('../store')
const display = require('../forms')
const getFormFields = require('../../../lib/get-form-fields')

// const display = require('../forms')
// require the get form fields function

const rCreate = function (event) {
  event.preventDefault()
  // get data from html form
  const form = event.target
  const data = getFormFields(form)
  // send data to api for sign up
  api.readingCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const showAll = function (event) {
  event.preventDefault()
  // send data to api for sign up
  api.readingIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

module.exports = {
  rCreate,
  showAll
}
