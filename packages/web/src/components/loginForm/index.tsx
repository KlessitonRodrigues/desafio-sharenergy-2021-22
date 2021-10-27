import React from 'react'

import { login } from '../../data/api/auth'
import { Container } from './style'

const loginForm = () => (
  <Container>
    <input type="text" />
    <input type="text" />
    <button
      type="button"
      onClick={() => {
        login({ name: 'admin', password: '12345' })
          .then((token) => alert(token))
          .catch((err) => alert(err))
      }}
    >
      submit
    </button>
  </Container>
)

export default loginForm
