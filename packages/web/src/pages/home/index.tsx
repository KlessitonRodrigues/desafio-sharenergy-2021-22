import React from 'react'

import Sidebar from '../../components/sidebar/index'
import HomePanel from '../../components/homePanel/index'
import { GlobalProvider } from '../../providers/global/index'

import { Container } from './style'

const Home = () => (
  <Container>
    <GlobalProvider>
      <Sidebar />
    </GlobalProvider>
    <HomePanel />
  </Container>
)

export default Home
