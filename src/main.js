const fetch = require('node-fetch')

/**
 * Check Access via Web Based
 */
const WebBased = async(CODE, SECRET) => {
  return fetch('https://api.sgbteam.id/', {
    method: 'POST',
    headers: {
      'Host': 'api.sgbteam.id',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `code=${CODE}&key=${SECRET}`
  })
  .then(res => res.json())
  .then(response => {
    if (response.status == 'ok') {
      return Promise.resolve(true)
    } else {
      return Promise.resolve(false)
    }
  })
  .catch(err => {
    console.log(err);
    return Promise.resolve(false)
  })
}

/**
 * Check Access via Web Based Region
 */
const WebBasedRegion = async(CODE, SECRET, REGION) => {
  return fetch('https://api.sgbteam.id/absenReg.php', {
    method: 'POST',
    headers: {
      'Host': 'api.sgbteam.id',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `code=${CODE}&key=${SECRET}&region=${REGION}`
  })
  .then(res => res.json())
  .then(response => {
    if (response.status == 'ok') {
      return Promise.resolve(true)
    } else {
      return Promise.resolve(false)
    }
  })
  .catch(err => {
    console.log(err);
    return Promise.resolve(false)
  })
}

/**
 * Check Access via CLI Based
 */
const CLIBased = async(CODE, SECRET) => {
  return fetch('https://api.sgbteam.id/cli.php', {
    method: 'POST',
    headers: {
      'Host': 'api.sgbteam.id',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `code=${CODE}&secret_key=${SECRET}`
  })
  .then(res => res.json())
  .then(response => {
    if (response.status == 'ok') {
      return Promise.resolve(true)
    } else {
      return Promise.resolve(false)
    }
  })
  .catch(err => {
    console.log(err);
    return Promise.resolve(false)
  })
}

module.exports = {
  WebBased,
  WebBasedRegion,
  CLIBased
}