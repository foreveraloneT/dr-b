import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { TitleWithBackLayout } from '../../layout'
import { BottomAddMenu } from '../../common'
import { GroupCard } from '../../feature'
import * as groupSelector from '../../../selectors/group'
import './index.scss'

class Group extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    group: PropTypes.object.isRequired,
  }

  goToAddGroupPage = () => {
    const { history } = this.props
    history.push('/group/create')
  }

  render() {
    const { group } = this.props
    return (
      <TitleWithBackLayout
        className="group-container"
        title={group.name}
        componentAfterAppBar={
          <GroupCard group={group} square={true} />
        }
      >

        <BottomAddMenu onClick={this.goToAddGroupPage} />
      </TitleWithBackLayout>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  group: groupSelector.getById(state, { id: match.params.id }),
})

export default compose(
  connect(mapStateToProps),
  withRouter,
)(Group)
