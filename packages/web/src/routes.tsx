import React from 'react'
import { Switch, Redirect, Route, HashRouter } from 'react-router-dom'

import { DataProvider } from './providers/data/index'
import Login from './pages/login/index'
import Home from './pages/home/index'

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <DataProvider>
        <Route path="/home" component={Home} />
      </DataProvider>
      <Redirect from="/" to="/" />
    </Switch>
  </HashRouter>
)

export default Routes
