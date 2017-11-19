import './styles/base.css'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './containers/landing'
import Register from './containers/register'
import Confirmation from './containers/confirmation'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      {/* <Route path='/' component={ Landing } /> */}
      <Route path='/register' component={ Register } />
      <Route path='/confirmation' component={ Confirmation } />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))
