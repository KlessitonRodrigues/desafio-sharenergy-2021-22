import React, { useContext } from 'react'

import If from '../if/index'
import { GlobalContext } from '../../providers/global/index'
import { Container } from './styled'

const Load = () => {
  const [state, dispatch] = useContext(GlobalContext)
  const { active, msg } = state.load
  return (
    <If test={active}>
      <Container onClick={() => dispatch({ type: 'LOADING_FALSE' })}>
        <If test={!msg}>
          <span className="material-icons icon">&#xef64;</span>
          carregando ...
        </If>
        <If test={!!msg}>
          <span className="material-icons icon --error">&#xe000;</span>
          {msg}
        </If>
      </Container>
    </If>
  )
}

export default Load
