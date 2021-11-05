import React, { useContext } from 'react'

import { PowerPlant } from '../../data/types/powerplant'
import { DataContext } from '../../providers/data/index'
import Panel from '../../templates/panel/index'
import PanelCard from '../../templates/panelCard/index'
import PlantDashboard from '../../templates/plantDashboard/index'
import { Row } from './styled'

function mapPlants(plants: PowerPlant[]) {
  return plants.map((plant, i) => <PlantDashboard key={i} powerPlant={plant} />)
}

const HomePanel = () => {
  const [state] = useContext(DataContext)

  return (
    <Panel title="Estatísticas">
      <PanelCard title="Plantas de Energia">
        <Row>{mapPlants(state.plants)}</Row>
      </PanelCard>
    </Panel>
  )
}

export default HomePanel
