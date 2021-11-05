import React, { useContext, useReducer, useState } from 'react'

import {
  addClient,
  getClients,
  removeClient,
  updateClient
} from '../../data/api/clients'
import { GlobalContext } from '../../providers/global/index'
import { DataContext } from '../../providers/data/index'
import Panel from '../../templates/panel/index'
import PanelCard from '../../templates/panelCard'
import SelectInput from '../../templates/selectInput/index'
import InputText from '../../templates/textInput/index'
import PlantStocks from './plantStoks/index'
import { reducer, initialState } from './store'

const ClientPanel = () => {
  const [, globalDispatch] = useContext(GlobalContext)
  const [dataState, dataDispatch] = useContext(DataContext)
  const [state, dispatch] = useReducer(reducer, initialState)
  const [operation, setOper] = useState<'create' | 'edit'>('create')

  return (
    <Panel title="Gerênciar Clientes">
      <PanelCard title="Clientes">
        <SelectInput
          placeholder="Buscar por Cliente"
          options={dataState.clients.map((client) => client.name)}
          onChange={(name) => {
            setOper('edit')
            dispatch({
              type: 'SET_CLIENT',
              payload: dataState.clients.find((client) => client.name === name)
            })
          }}
        />
      </PanelCard>
      <PanelCard title="Novo Cliente">
        <span
          onClick={async () => {
            globalDispatch({ type: 'LOADING_TRUE' })
            let res = null

            if (operation === 'create') {
              res = await addClient(state.client)
            } else {
              res = await updateClient(state.client._id, state.client)
            }

            if (!res.success) {
              return globalDispatch({ type: 'LOADING_ERROR_MSG' })
            }

            res = await getClients()
            res.success &&
              dataDispatch({ type: 'SET_CLIENTS', payload: res.data })

            if (!res.success) {
              return globalDispatch({ type: 'LOADING_ERROR_MSG' })
            }
            res.success && globalDispatch({ type: 'LOADING_FALSE' })
          }}
          className="material-icons"
        >
          &#xe161;
        </span>
        <InputText
          value={state.client.name}
          label="Nome"
          onChange={(payload) => dispatch({ type: 'SET_NAME', payload })}
        />
        <InputText
          value={state.client.phone}
          label="Telefone"
          onChange={(payload) => dispatch({ type: 'SET_PHONE', payload })}
        />
      </PanelCard>
      <PanelCard title="Participação">
        <SelectInput
          placeholder="Buscar por Planta Solar"
          onChange={(name) =>
            dispatch({
              type: 'ADD_PLANT',
              payload: dataState.plants.find((plant) => plant.name === name)._id
            })
          }
          options={dataState.plants.map((plant) => plant.name)}
        />
        <PlantStocks
          dispatch={dispatch}
          arr={state.client.powerPlants}
          plants={dataState.plants}
        />
      </PanelCard>
    </Panel>
  )
}

export default ClientPanel
