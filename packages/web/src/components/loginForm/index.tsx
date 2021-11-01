import React, { useContext, useState } from 'react'

import { login } from '../../data/api/auth'
import TextInput from '../../templates/textInput/index'
import Button from '../../templates/button/index'
import { GlobalContext } from '../../providers/global/index'
import { Container } from './style'

const LoginForm = () => {
  const [formData, setFormData] = useState({ user: '', password: '' })
  const [, dispatch] = useContext(GlobalContext)

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
        onClick={async () => {
          dispatch({ type: 'LOADING_TRUE' })
          const res = await login(formData)

          if (res.success) {
            window.location.hash = 'home'
            return dispatch({ type: 'LOADING_FALSE' })
          }
          dispatch({ type: 'LOADING_ERROR_MSG', payload: res.msg })
        }}
      />
    </Container>
  )
}

export default LoginForm
