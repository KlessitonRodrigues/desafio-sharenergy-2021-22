import axios from 'axios'
import { ApiResponse } from '../axios'
import { Client } from '../types/client'

export async function getClients() {
  try {
    const res = await axios.get<
      ApiResponse<{ success: number; data: Client[] }>
    >('/api/clients')
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}

export async function addClient(client: Client) {
  try {
    const res = await axios.post<{ success: number; data: Client }>(
      '/api/clients',
      client
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}

export async function removeClient(clientID: string) {
  try {
    const res = await axios.delete<
      ApiResponse<{ success: number; data: Client }>
    >(`/api/clients/${clientID}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}

export async function updateClient(clientID: string, client: Client) {
  try {
    const res = await axios.put<ApiResponse<{ success: number; data: Client }>>(
      `/api/clients${clientID}`,
      client
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}
