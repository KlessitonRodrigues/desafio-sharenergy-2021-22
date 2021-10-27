import axios from 'axios'

export const defaults = {
  url: 'http://localhost:3003',
  token: ''
}

axios.defaults.baseURL = defaults.url
axios.defaults.headers.common.authorization = defaults.token
