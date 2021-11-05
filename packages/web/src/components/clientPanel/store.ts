import { Client } from '../../data/types/client'

export type State = {
  client: Client
}

export type Action =
  | { type: 'SET_CLIENT'; payload: Client }
  | { type: 'SET_NAME'; payload: Client['name'] }
  | { type: 'SET_PHONE'; payload: Client['phone'] }
  | { type: 'ADD_PLANT'; payload: Client['_id'] }
  | { type: 'SET_PLANT'; payload: { _id: string; participation: string } }
  | { type: 'REMOVE_PlANT'; payload: Client['_id'] }

export const initialState: State = {
  client: { name: '', phone: '', powerPlants: [] }
}

export function reducer(state: State, action: Action) {
  let { client } = Object.assign({}, state)
  let i = null

  switch (action.type) {
    case 'SET_CLIENT':
      client = action.payload
      return { client }

    case 'SET_NAME':
      client.name = action.payload
      return { client }

    case 'SET_PHONE':
      client.phone = action.payload
      return { client }

    case 'ADD_PLANT':
      i = client.powerPlants.find((plant) => plant._id === action.payload)

      !i && client.powerPlants.push({ _id: action.payload, participation: '' })

      return { client }

    case 'SET_PLANT':
      i = client.powerPlants.findIndex(
        (plant) => plant._id === action.payload._id
      )
      i !== undefined && (client.powerPlants[i] = action.payload)
      return { client }

    case 'REMOVE_PlANT':
      i = client.powerPlants.findIndex((plant) => plant._id === action.payload)
      client.powerPlants.splice(i, 1)
      return { client }

    default:
      return state
  }
}
