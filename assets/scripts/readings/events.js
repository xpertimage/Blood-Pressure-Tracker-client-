const api = require('./api')
// require the ui file, so we can update the dom after an API request
const ui = require('./ui')
// const store = require('../store')
// const display = require('../forms')
const getFormFields = require('../../../lib/get-form-fields')

// const display = require('../forms')
// require the get form fields function

const rCreate = function (event) {
  event.preventDefault()
  // get data from html form
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  if (data.systolic.length === 0 || data.systolic.length === 0 || data.pulse.length === 0) {
    ui.createFailure(' ')
  }
  // send data to api for sign up
  api.readingCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const showAll = function (event) {
  event.preventDefault()
  api.readingIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const rFind = function (event) {
  // console.log('Events-rFind')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.readingFind(data)
    .then(ui.findSuccess)
    .catch(ui.findFailure)
}

const rUpdate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  // console.log('Readings Events: data=', data)
  api.readingUpdate(data)
    .then(ui.updateSuccess)
    .catch(ui.updateFailure)
}

const rDelete = function (event) {
  // console.log('Events.js rDelete')
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.readingDelete(data)
    .then(ui.deleteSuccess)
    .catch(ui.deleteFailure)
}

const rowClick = function (event) {
  // console.log('This is the row clicked', event.target)
}

module.exports = {
  rCreate,
  rFind,
  rDelete,
  rUpdate,
  rowClick,
  showAll
}
