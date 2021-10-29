import React from 'react'
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom'

import If from './templates/if/index'
import Login from './pages/login/index'
import Home from './pages/home/index'
import { defaults } from './data/axios'

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Redirect path="/" to="/login" />
      <If test={!!defaults.token}>a</If>
    </Switch>
  </HashRouter>
)

export default Routes
