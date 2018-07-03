import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'

import { MainLayout } from './components/layout'
import {
  Home,
  Test,
} from './components/page'

class Root extends Component {
  render() {
    return (
      <Router>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={ Home } />
            <Route path='/Test' exact component={ Test } />
            <Route path='*' render={ () => <h1>Page Not Found</h1> } />
          </Switch>
        </BrowserRouter>
      </Router>
    )
  }
}

export default Root
