import './styles/base.css'
import 'semantic-ui-css/semantic.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './containers/app'

ReactDOM.render((
  <BrowserRouter>
    <Switch>
      <Route path='/' component={ App } />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))