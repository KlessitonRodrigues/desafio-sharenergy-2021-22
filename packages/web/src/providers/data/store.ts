import { Client } from '../../data/types/client'
import { PowerPlant } from '../../data/types/powerplant'

export type State = {
  clients: Client[]
  plants: PowerPlant[]
}

export type Action = { type: Options; payload?: any }

export const initialState: State = {
  clients: [],
  plants: []
}

type Options = 'SET_DATA'

export function reducer(state: State, action: Action) {
  let { clients, plants } = Object.assign({}, state)

  switch (action.type) {
    case 'SET_DATA':
      clients = action.payload.clients
      plants = action.payload.plants
      return { ...state, clients, plants }

    default:
      return state
  }
}
