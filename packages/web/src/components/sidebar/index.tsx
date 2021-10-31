import React, { useState } from 'react'

import BarButton from './barButton'
import { Container } from './styled'

const Sidebar = () => {
  const [active, setActive] = useState('home')

  return (
    <Container>
      <BarButton name="home" active={active} onClick={setActive}>
        <span className="material-icons">&#xf20c;</span>
      </BarButton>

      <BarButton name="clients" active={active} onClick={setActive}>
        <span className="material-icons">&#xea21;</span>
      </BarButton>

      <BarButton name="plants" active={active} onClick={setActive}>
        <span className="material-icons">&#xea0b;</span>
      </BarButton>

      <BarButton name="users" active={active} onClick={setActive}>
        <span className="material-icons">&#xf02e;</span>
      </BarButton>
    </Container>
  )
}

export default Sidebar
