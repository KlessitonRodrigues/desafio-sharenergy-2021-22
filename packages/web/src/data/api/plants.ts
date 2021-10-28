import axios from 'axios'
import { ApiResponse } from '../axios'
import { PowerPlant } from '../types/powerplant'

export async function getPlants() {
  try {
    const res = await axios.get<ApiResponse<PowerPlant>>('/api/plants')
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}

export async function addPlant(client) {
  try {
    const res = await axios.post<ApiResponse<PowerPlant>>('/api/plants', client)
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}

export async function removePlant(plantID: string) {
  try {
    const res = await axios.post<ApiResponse<PowerPlant>>(
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
    const res = await axios.post<ApiResponse<PowerPlant>>(
      `/api/plants/${plantID}`,
      plant
    )
    return res.data
  } catch (error) {
    console.log(error)
  }
  return { success: false }
}
