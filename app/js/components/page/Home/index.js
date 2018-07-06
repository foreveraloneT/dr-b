import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { BottomAddMenu } from '../../common'
import { GroupList } from '../../feature'
import * as groupSelector from '../../../selectors/group'
import './index.scss'

class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    groupList: PropTypes.array.isRequired,
  }

  goToAddGroupPage = () => {
    const { history } = this.props
    history.push('/group/create')
  }

  render() {
    const { groupList } = this.props
    return (
      <div className="home-container">
        <GroupList groupList={groupList} />
        <BottomAddMenu onClick={this.goToAddGroupPage} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  groupList: groupSelector.getArrayWithCountPatient(state),
})

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Home)
