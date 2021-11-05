export type PowerStoks = {
  _id: string
  participation: string
}

export type Client = {
  _id?: string
  name: string
  phone: string
  powerPlants: PowerStoks[]
}
