import React from 'react'

import { PowerStoks } from '../../../data/types/client'
import { PowerPlant } from '../../../data/types/powerplant'
import { Action } from '../store'
import TextInput from '../../../templates/textInput/index'
import { Title, Container, Plant } from './styled'

type Props = {
  arr: PowerStoks[]
  plants: PowerPlant[]
  dispatch: React.Dispatch<Action>
}

function mapPlants({ arr, plants, dispatch }: Props) {
  return arr.map((item, i) => (
    <Plant key={i}>
      <Title>{plants.find((plant) => plant._id === item._id)?.name}</Title>
      <TextInput
        min="1"
        max="100"
        label="porcentagem"
        type="number"
        value={item.participation}
        onChange={(value) =>
          dispatch({
            type: 'SET_PLANT',
            payload: { _id: item._id, participation: value }
          })
        }
      />
      <span
        onClick={() => dispatch({ type: 'REMOVE_PlANT', payload: item._id })}
        className="material-icons"
      >
        &#xe872;
      </span>
    </Plant>
  ))
}

const PlantStocks = (props: Props) => <Container>{mapPlants(props)}</Container>

export default PlantStocks
