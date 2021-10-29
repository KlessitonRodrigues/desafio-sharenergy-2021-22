import React from 'react'

import Sidebar from '../../components/sidebar/index'
import HomePanel from '../../components/homePanel/index'

import { Container } from './style'

const Home = () => (
  <Container>
    <Sidebar />
    <HomePanel/>
  </Container>
)

export default Home
