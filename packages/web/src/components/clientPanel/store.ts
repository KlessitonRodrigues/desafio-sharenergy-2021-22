export const initialState = {
  clients: []
}

export type State = typeof initialState

export type Action = { type: Options; payload?: any }

type Options = 'GET_CLIENTS'

export function reducer(state: State, action: Action) {
  let { clients } = Object.assign({}, state)

  switch (action.type) {
    case 'GET_CLIENTS':
      clients = action.payload
      return { ...state, clients }

    default:
      return state
  }
}
