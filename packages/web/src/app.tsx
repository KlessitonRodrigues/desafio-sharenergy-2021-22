import React from 'react'
import { GlobalStyle, Theme } from './appStyle'
import Routes from './routes'
import './data/main'

const App = () => (
  <div>
    <GlobalStyle />
    <Theme>
      <Routes />
    </Theme>
  </div>
)

export default App
