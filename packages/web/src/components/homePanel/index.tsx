import React, { useContext } from 'react'

import { DataContext } from '../../providers/data/index'
import Panel from '../../templates/panel/index'
import PanelCard from '../../templates/panelCard/index'
import PlantDashboard from '../../templates/plantDashboard/index'

const HomePanel = () => {
  const [state] = useContext(DataContext)
  return (
    <Panel title="Estatiticas">
      <PanelCard title="">
        <PlantDashboard powerPlant={state.plants[0]} />
        <PlantDashboard powerPlant={state.plants[1]} />
        <PlantDashboard powerPlant={state.plants[1]} />
        <PlantDashboard powerPlant={state.plants[1]} />
        <PlantDashboard powerPlant={state.plants[1]} />
        <PlantDashboard powerPlant={state.plants[1]} />
      </PanelCard>
    </Panel>
  )
}

export default HomePanel
