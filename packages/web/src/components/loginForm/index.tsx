import React from 'react'

// import { login } from '../../data/api/auth'
import { getClients } from '../../data/api/clients'
import { Container } from './style'

const loginForm = () => (
  <Container>
    <input type="text" />
    <input type="text" />
    <button
      type="button"
      onClick={() => getClients().then((res) => console.log(res))}
    >
      submit
    </button>
  </Container>
)

export default loginForm
