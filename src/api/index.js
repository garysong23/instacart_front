import axios from 'axios'

import { API_URL } from './constants'

export const get = (path) => {
  const urlPath = API_URL + path
  console.log(urlPath)
  return axios.get(urlPath)
}

export const post = (path, data) => {
  const urlPath = API_URL + path
  console.log(urlPath)
  return axios.post(urlPath, data)
}
