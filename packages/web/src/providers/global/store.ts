export type State = typeof initialState

export type Action = { type: Options; payload: any }

export const initialState = {
  user: { name: 'admin', token: '' }
}

type Options = 'SET_USER'

export function reducer(state: State, action: Action) {
  switch (action.type) {
    default:
      return state
  }
}
