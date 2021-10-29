import React, { useState } from 'react'

import { login } from '../../data/api/auth'
import TextInput from '../../templates/textInput/index'
import Button from '../../templates/button/index'
import { Container } from './style'

const LoginForm = () => {
  const [formData, setFormData] = useState({ user: '', password: '' })

  return (
    <Container>
      <TextInput
        value={formData.user}
        onChange={(user) => setFormData({ ...formData, user })}
        label="Usuário"
      />
      <TextInput
        type="password"
        value={formData.password}
        onChange={(password) => setFormData({ ...formData, password })}
        label="Senha"
      />
      <Button
        text="Login"
        onClick={() =>
          login(formData).then((res) => {
            if (res.success) window.location.hash = 'home'
          })
        }
      />
    </Container>
  )
}

export default LoginForm
