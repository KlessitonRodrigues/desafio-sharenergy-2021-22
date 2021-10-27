import axios from 'axios'
import { User } from '../types/user'

export async function login(user: User): Promise<string> {
  const res = await axios.post('/auth', user)
  return res.data
}
