type PowerPlant = {
  _id: string
  stocks: string
}

export type Client = {
  _id: string
  name: string
  powerPlants: PowerPlant[]
}
