import axios from 'axios'

export type ApiResponse<T> = {
  success: boolean
  msg?: string
  data?: T
}

export const defaults = {
  url: 'http://localhost:3000',
  token: 'efseFgGEesfFEff32fw3fSEFF3'
}

axios.defaults.baseURL = defaults.url
axios.defaults.headers.common.authorization = defaults.token
