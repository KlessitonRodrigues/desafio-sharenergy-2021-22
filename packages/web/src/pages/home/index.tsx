import React, { useContext, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { getClients } from '../../data/api/clients'
import { getPlants } from '../../data/api/plants'
import { GlobalContext } from '../../providers/global/index'
import { DataContext } from '../../providers/data/index'
import Sidebar from '../../components/sidebar/index'
import HomePanel from '../../components/homePanel/index'
import ClientPanel from '../../components/clientPanel/index'
import { Container } from './style'

async function getData() {
  const data = { clients: null, plants: null }
  data.clients = await getClients()
  data.plants = await getPlants()
  return data
}

const Home = () => {
  const [, globalDispatch] = useContext(GlobalContext)
  const [, dataDispatch] = useContext(DataContext)

  useEffect(() => {
    async function startUp() {
      globalDispatch({ type: 'LOADING_TRUE' })
      const data = await getData()
      dataDispatch({ type: 'SET_DATA', payload: data })
      globalDispatch({ type: 'LOADING_FALSE' })
    }
    startUp()
  }, [])

  return (
    <Container>
      <Sidebar />
      <Switch>
        <Route path="/home/statistics" component={HomePanel} />
        <Route path="/home/clients" component={ClientPanel} />
        <Redirect from="/" to="/home/statistics" />
      </Switch>
    </Container>
  )
}

export default Home
