import axios from 'axios'
import { defaults, ApiResponse } from '../axios'

type Credentials = {
  user: string
  password: string
}

type Token = {
  token: string
}

export async function login(user: Credentials) {
  try {
    const res = await axios.post<ApiResponse<Token>>('/auth', user)
    if (res.data.success) defaults.token = res.data.data.token
    return res.data
  } catch (err) {
    return { success: false }
  }
}
