import React, { useContext, useEffect, useState } from 'react'

import {
  addPlant,
  updatePlant,
  getPlants,
  removePlant
} from '../../data/api/plants'
import { PowerPlant, Production } from '../../data/types/powerplant'
import { DataContext } from '../../providers/data/index'
import { GlobalContext } from '../../providers/global/index'
import If from '../../templates/if/index'
import Panel from '../../templates/panel/index'
import PanelCard from '../../templates/panelCard/index'
import SelectInput from '../../templates/selectInput/index'
import TextInput from '../../templates/textInput/index'
import Datepicker from '../../templates/datepicker/index'
import ProdForm from './prodForm'
import { Container, Row } from './styled'

type Form = { name: string; diaryProduction: Production[] }

const ClientPanel = () => {
  const [state, dataDispatch] = useContext(DataContext)
  const [, globalDispatch] = useContext(GlobalContext)

  const [plantData, serPlantData] = useState<PowerPlant>(null)
  const [form, setForm] = useState<Form>({
    name: '',
    diaryProduction: []
  })
  const [datePicker, setDatePicker] = useState(null)

  useEffect(
    () => plantData?.name && setForm({ ...form, name: plantData.name }),
    [plantData]
  )

  return (
    <Container>
      <Panel title="Gerênciar Plantas de Energia">
        <PanelCard title="Plantas de Energia">
          <SelectInput
            placeholder="Buscar por Plantas de Energia"
            onChange={(name) =>
              serPlantData(state.plants.find((plant) => plant.name === name))
            }
            options={state.plants.map((plant) => plant.name)}
          />
        </PanelCard>
        <PanelCard title={plantData ? 'Editar' : 'Nova Planta Solar'}>
          <Row>
            <TextInput
              label="Nome"
              value={form.name}
              onChange={(name) => setForm({ ...form, name })}
            />
            <div>
              <If test={!!plantData}>
                <span
                  onClick={() => serPlantData(null)}
                  className="material-icons"
                >
                  &#xe145;
                </span>
              </If>
              <If test={!!form.name}>
                <span
                  onClick={async () => {
                    globalDispatch({ type: 'LOADING_TRUE' })
                    let res = null
                    const newPlant = { ...plantData, ...form }

                    if (!plantData) {
                      res = await addPlant(newPlant)
                    } else {
                      res = await updatePlant(plantData._id, newPlant)
                    }

                    if (res.success) {
                      res = await getPlants()
                      dataDispatch({
                        type: 'SET_PLANTS',
                        payload: res.data
                      })
                      serPlantData(null)
                      return globalDispatch({ type: 'LOADING_FALSE' })
                    }

                    globalDispatch({
                      type: 'LOADING_ERROR_MSG',
                      payload: 'Não foi possivel Adicionar'
                    })
                  }}
                  className="material-icons"
                >
                  &#xe161;
                </span>
              </If>
              <If test={!!plantData}>
                <span
                  onClick={async () => {
                    globalDispatch({ type: 'LOADING_TRUE' })
                    let res = await removePlant(plantData._id)

                    if (res.success) {
                      res = await getPlants()
                      dataDispatch({
                        type: 'SET_PLANTS',
                        payload: res.data
                      })
                      return globalDispatch({ type: 'LOADING_FALSE' })
                    }

                    globalDispatch({
                      type: 'LOADING_ERROR_MSG',
                      payload: 'Não foi possivel Excluir'
                    })
                  }}
                  className="material-icons"
                >
                  &#xe872;
                </span>
              </If>
            </div>
          </Row>
          <Datepicker onChange={(date) => setDatePicker(date)} />
          <ProdForm
            date={datePicker}
            plant={plantData}
            onChange={(prods) => setForm({ ...form, diaryProduction: prods })}
          />
        </PanelCard>
      </Panel>
    </Container>
  )
}

export default ClientPanel
