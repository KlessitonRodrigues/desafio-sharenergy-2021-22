export type State = typeof initialState

export type Action = { type: Options; payload?: any }

export const initialState = {
  user: { name: 'admin', token: '' },
  load: { active: false, msg: '' }
}

type Options =
  | 'SET_USER'
  | 'LOADING_FALSE'
  | 'LOADING_TRUE'
  | 'LOADING_ERROR_MSG'

export function reducer(state: State, action: Action) {
  const { load } = Object.assign({}, state)

  switch (action.type) {
    case 'LOADING_TRUE':
      load.active = true
      return { ...state, load }

    case 'LOADING_FALSE':
      load.active = false
      load.msg = ''
      return { ...state, load }

    case 'LOADING_ERROR_MSG':
      load.active = true
      load.msg = action.payload || 'Operação não concluída!'
      return { ...state, load }

    default:
      return state
  }
}
