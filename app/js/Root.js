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
  Group,
  CreatePatient,
  Patient,
} from './components/page'
import { ScrollToTop } from './components/common'
import { getAllGroup } from './actions/group'
import { getAllPatient } from './actions/patient'

class Root extends Component {
  static propTypes = {
    getAllGroupRequest: PropTypes.func.isRequired,
    getAllPatientRequest: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {
      getAllGroupRequest,
      getAllPatientRequest,
    } = this.props

    getAllGroupRequest()
    getAllPatientRequest()
  }

  render() {
    return (
      <Router>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route path='/group/create' exact component={ CreateGroup } />
              <Route path='/group/:id' exact component={ Group } />
              <Route path='/group/:groupId/patient/create' exact component={ CreatePatient } />
              <Route path='/patient/:id' exact component={ Patient } />
              <MainLayout>
                <Switch>
                  <Route path='/' exact component={ Home } />
                  <Route path='/favorite' exact component={ Favorite } />
                  <Route path='/others' exact component={ Others } />
                  <Route path='*' render={ () => <h1>Page Not Found</h1> } />
                </Switch>
              </MainLayout>
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
      </Router>
    )
  }
}

const mapDispatchToProps = {
  getAllGroupRequest: getAllGroup.request,
  getAllPatientRequest: getAllPatient.request,
}

export default connect(null, mapDispatchToProps)(Root)
