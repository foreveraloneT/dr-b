import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'

import {
  MainLayout,
} from './components/layout'
import {
  Home,
  CreateGroup,
  Favorite,
  Others,
} from './components/page'
import { getAllGroup } from './actions/group'

class Root extends Component {
  static propTypes = {
    getAllGroupRequest: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      getAllGroupRequest,
    } = this.props

    getAllGroupRequest()
  }

  render() {
    return (
      <Router>
        <BrowserRouter>
          <Switch>
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

const mapDispatchToProps = {
  getAllGroupRequest: getAllGroup.request,
}

export default connect(null, mapDispatchToProps)(Root)
