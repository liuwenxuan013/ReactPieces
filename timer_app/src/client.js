/* eslint-disable no-console */
/* eslint-disable no-undef */
const API_URI = "http://localhost:3001";
const client = function () {

  function getTimers(success) {
    return fetch(API_URI + '/api/timers', {
      headers: {
        Accept: 'application/json',
      },
    }).then(checkStatus)
      .then(parseJSON)
      .then(success)
        .catch(error=>console.log(error.message));
  }

  function createTimer(data) {
    return fetch(API_URI+ '/api/timers', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus)
        .catch(error=>console.log(error.message));
  }

  function updateTimer(data) {
    return fetch(API_URI+ '/api/timers', {
      method: 'put',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus)
        .catch(error=>console.log(error.message));
  }

  function deleteTimer(data) {
    return fetch(API_URI+ '/api/timers', {
      method: 'delete',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus)
        .catch(error=>console.log(error.message));
  }

  function startTimer(data) {
    return fetch(API_URI+ '/api/timers/start', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus)
        .catch(error=>console.log(error.message));
  }

  function stopTimer(data) {
    return fetch(API_URI + '/api/timers/stop', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(checkStatus)
    .catch(error=>console.log(error.message));
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  return {
    getTimers,
    createTimer,
    updateTimer,
    startTimer,
    stopTimer,
    deleteTimer,
  };
}();
export default client;
