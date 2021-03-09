const config = require('./../config')
const store = require('./../store')

//  Index - get all readings
const readingIndex = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/readings',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Get 1 reading by ID
const readingGetOne = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/readings',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Delete a reading by ID
const readingDelete = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/readings',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Update a reading by ID
const readingUpdateOne = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/readings',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Create a reading
const readingCreate = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/readings',
    data: data,
    headers: {
      ContentType: 'application/json',
      Authorization: 'Bearer ' + store.user.token
     }
  })
}

module.exports = {
  readingIndex,
  readingCreate,
  readingDelete,
  readingUpdateOne,
  readingGetOne
}
