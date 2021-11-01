import React, { Dispatch, useReducer } from 'react'

import { reducer, initialState, State, Action } from './store'

export const DataContext = React.createContext<[State, Dispatch<Action>]>(null)

export const DataProvider = (props: { children }) => (
  <DataContext.Provider value={useReducer(reducer, initialState)}>
    {props.children}
  </DataContext.Provider>
)
