import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'

import {
  MainLayout,
} from './components/layout'
import {
  Home,
  Test,
  CreateGroup,
  Favorite,
  Others,
} from './components/page'

class Root extends Component {
  render() {
    return (
      <Router>
        <BrowserRouter>
          <Switch>
            <Route path='/test' exact component={ Test } />
            <Route path='/group/create' exact component={ CreateGroup } />
            <MainLayout>
              <Switch>
                <Route path='/' exact component={ Home } />
                <Route path='/favorite' exact component={ Favorite } />
                <Route path='/others' exact component={ Others } />
                <Route path='*' render={ () => <h1>Page Not Found</h1> } />
              </Switch>
            </MainLayout>
          </Switch>
        </BrowserRouter>
      </Router>
    )
  }
}

export default Root
