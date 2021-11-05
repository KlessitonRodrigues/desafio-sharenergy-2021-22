import axios from 'axios'
import { ApiResponse } from '../axios'
import { PowerPlant } from '../types/powerplant'

type Response = {
  success: number
  data: PowerPlant
}

export async function getPlants() {
  try {
    const res = await axios.get<ApiResponse<Response>>('/api/plants')
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}

export async function addPlant(client) {
  try {
    const res = await axios.post<ApiResponse<Response>>('/api/plants', client)
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}

export async function removePlant(plantID: string) {
  try {
    const res = await axios.delete<ApiResponse<Response>>(
      `/api/plants/${plantID}`
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}

export async function updatePlant(plantID: string, plant: PowerPlant) {
  try {
    const res = await axios.put<ApiResponse<Response>>(
      `/api/plants/${plantID}`,
      plant
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}
