export type Production = {
  _id: string
  date: string
  production: {
    time: number
    tension: number
    AC: number
    kW: number
    temperature: number
  }
}

export type PowerPlant = {
  _id: string
  name: string
  diaryProduction: Production[]
}
