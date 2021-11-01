import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Sidebar from '../../components/sidebar/index'
import HomePanel from '../../components/homePanel/index'
import ClientPanel from '../../components/clientPanel/index'
import { DataProvider } from '../../providers/data/index'
import { Container } from './style'

const Home = () => (
  <Container>
    <Sidebar />
    <DataProvider>
      <Switch>
        <Route path="/home/statistics" component={HomePanel} />
        <Route path="/home/clients" component={ClientPanel} />
        <Redirect from="/" to="/home/statistics" />
      </Switch>
    </DataProvider>
  </Container>
)

export default Home
