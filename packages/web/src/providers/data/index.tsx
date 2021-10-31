import React, { Dispatch, useReducer } from 'react'

import { reducer, initialState, State, Action } from './store'

export const GlobalContext =
  React.createContext<[State, Dispatch<Action>]>(null)

export const GlobalProvider = (props: { children }) => (
  <GlobalContext.Provider value={useReducer(reducer, initialState)}>
    {props.children}
  </GlobalContext.Provider>
)
