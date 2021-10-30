import React, { useState } from 'react'

import { Container, Button } from './style'

const Sidebar = () => {
  const [active, setActive] = useState('home')

  return (
    <Container>
      <Button
        className={active === 'home' ? '--active' : ''}
        onClick={() => setActive('home')}
      >
        <span className="material-icons">&#xf20c;</span>
      </Button>
      <Button
        className={active === 'clients' ? '--active' : ''}
        onClick={() => setActive('clients')}
      >
        <span className="material-icons">&#xea21;</span>
      </Button>
      <Button
        className={active === 'plants' ? '--active' : ''}
        onClick={() => setActive('plants')}
      >
        <span className="material-icons">&#xea0b;</span>
      </Button>
      <Button
        className={active === 'users' ? '--active' : ''}
        onClick={() => setActive('users')}
      >
        <span className="material-icons">&#xf02e;</span>
      </Button>
    </Container>
  )
}

export default Sidebar
