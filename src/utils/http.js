/*
  here we could use fetch or axios,   command:  yarn add axios

*/

import axios from 'axios'

// the get method returns a Promise
const get = ({url}) => {
  return new Promise((resolve, reject) => {
    axios({
      url
    })
    .then(result => {
      resolve(result)
    })
    .then(error => {
      reject(error)
    })
  })
}

export {
  get
}
