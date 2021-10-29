import React from 'react'

import { Container, Button } from './style'

const Sidebar = () => {
  return (
    <Container>
      <Button>
        <span className="material-icons">&#xf20c;</span>
      </Button>
      <Button>
        <span className="material-icons">&#xea21;</span>
      </Button>
      <Button>
        <span className="material-icons">&#xea0b;</span>
      </Button>
      <Button>
        <span className="material-icons">&#xf02e;</span>
      </Button>
      <Button>
        <span className="material-icons">&#xf02e;</span>
      </Button>
    </Container>
  )
}

export default Sidebar
