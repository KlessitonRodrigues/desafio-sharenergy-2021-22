import React from 'react'

import './data/main'
import Routes from './routes'
import Load from './templates/load/index'
import { GlobalProvider } from './providers/global/index'
import { GlobalStyle, Theme } from './appStyle'

const App = () => (
  <GlobalProvider>
    <GlobalStyle />
    <Theme>
      <Routes />
      <Load />
    </Theme>
  </GlobalProvider>
)

export default App
