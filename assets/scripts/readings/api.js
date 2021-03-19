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
const readingFind = function (data) {
  // console.log('API readingFind')
  // console.log(data)
  // console.log('store.user.token:', store.user.token)
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/readings/' + data._id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Delete a reading by ID
const readingDelete = function (data) {
  console.log('API.js readingDelete')
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/readings/' + data.ID,
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Update a reading by ID
const readingUpdate = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/readings/' + data.id,
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
  readingUpdate,
  readingFind
}
