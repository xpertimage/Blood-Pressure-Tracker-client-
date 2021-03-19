const store = require('../store')
const display = require('../forms')
const clearMessages = function () {
  $('#bpLog').text('')
  $('#error-message').text('')
}
const createSuccess = function (response) {
  clearMessages()
  $('#error-message').text('BP Reading Created')
  $('#signedInForm').trigger('reset')
}

const createFailure = function (response) {
  clearMessages()
  $('#error-message').text('BP Record creation failed, try again')
  $('#sign-up').trigger('reset')
}

const indexSuccess = function (response) {
  clearMessages()
  $('.bp-table').show()
  $('#error-message').text('BP Readings Fetched')
  // store the blood pressure readings from response in store.readings
  store.readings = response.readings
  $('.reading-row').remove()
  // let strCheckBox =  '<div class="custom-control custom-checkbox"> <input type="checkbox" class="custom-control-input"  > <label class="custom-control-label" for="customCheck1"></label></div>'
  for (let x = 0; x < response.readings.length; x++) {
    $('.bp-table tr:last').after('<tr class="reading-row" data-id=' + response.readings[x]._id + '><td>' + response.readings[x].createdAt +
      '</td><td>' + response.readings[x].systolic + '</td><td>' +
      response.readings[x].diastolic + '</td><td>' +
      response.readings[x].pulse + '</td><td>' +
      response.readings[x]._id + '</td></tr>')
  }
  $('#sign-up').trigger('reset')
}

const indexFailure = function (response) {
  clearMessages()
  $('#error-message').text('Fetching BP records failed, try again')
  $('#sign-up').trigger('reset')
}

const findSuccess = function (response) {
  clearMessages()
  display.updateForm()
  $('#error-message').text('BP Reading Found')
  $('#ID').val(response.reading._id)
  $('#systolic').val(response.reading.systolic)
  $('#diastolic').val(response.reading.diastolic)
  $('#pulse').val(response.reading.pulse)
  $('#date').val(response.reading.createdAt.toString())
  $('#sign-up').trigger('reset')
}

const findFailure = function (response) {
  clearMessages()
  $('#error-message').text('Find record failed, try again')
  $('#sign-up').trigger('reset')
}

const deleteSuccess = function (response) {
  clearMessages()
  $('#error-message').text('BP Reading Removed')
  $('#sign-up').trigger('reset')
}

const deleteFailure = function (response) {
  clearMessages()
  $('#error-message').text('Delete failed, try again')
  $('#sign-up').trigger('reset')
}

const updateSuccess = function (response) {
  clearMessages()
  $('#error-message').text('Update succesful')
  $('#sign-up').trigger('reset')
}

const updateFailure = function (response) {
  clearMessages()
  $('#error-message').text('Update failed, try again')
  $('#sign-up').trigger('reset')
}

module.exports = {
  createFailure,
  createSuccess,
  indexSuccess,
  indexFailure,
  findFailure,
  findSuccess,
  deleteFailure,
  deleteSuccess,
  clearMessages,
  updateFailure,
  updateSuccess
}
