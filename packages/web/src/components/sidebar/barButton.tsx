import React from 'react'

import { Button } from './styled'

type Props = {
  name: string
  active: string
  onClick: (nome: string) => void
  children
}

const BarButton = ({ name, active, onClick, children }: Props) => (
  <Button
    className={active === name ? '--active' : ''}
    onClick={() => onClick(name)}
  >
    {children}
  </Button>
)

export default BarButton
