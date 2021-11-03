import React, { useState } from 'react'

import { PowerPlant } from '../../data/types/powerplant'
import mapProduction from '../../data/util/mapProd'
import RadioInput from '../radioInput/index'
import ProdChart from './prodChart'
import { Container, ChartContainer, Title } from './styled'

type Props = {
  powerPlant: PowerPlant
}

const PlantDashboard = ({ powerPlant }: Props) => {
  if (!powerPlant) return null

  const [chartOp, setChartOp] = useState('AC')
  const { _id, name, diaryProduction } = powerPlant
  const prodMapped = mapProduction(diaryProduction)

  return (
    <Container>
      <Title>{name}</Title>
      <ChartContainer>
        <RadioInput
          name={_id}
          onChange={(name) => setChartOp(name)}
          labels={['', '', 'Temp', 'Tensão', 'Tempo']}
          options={['AC', 'kW', 'temperature', 'tension', 'time']}
          active={chartOp}
        />
        <ProdChart prodMapped={prodMapped} option={chartOp} />
      </ChartContainer>
    </Container>
  )
}

export default PlantDashboard
