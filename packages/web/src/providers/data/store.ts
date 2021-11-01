import { Client } from '../../data/types/client'
import { PowerPlant } from '../../data/types/powerplant'

export type State = {
  data: {
    clients: Client[]
    powerPlants: PowerPlant[]
  }
}

export type Action = { type: Options; payload?: any }

export const initialState: State = null

type Options = 'SET_DATA'

export function reducer(state: State, action: Action) {
  let { data } = Object.assign({}, state)

  switch (action.type) {
    case 'SET_DATA':
      data = action.payload
      return { ...state, data }

    default:
      return state
  }
}
