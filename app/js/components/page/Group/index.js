import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { TitleWithBackLayout } from '../../layout'
import { BottomAddMenu } from '../../common'
import { GroupCard, PatientList } from '../../feature'
import * as groupSelector from '../../../selectors/group'
import * as patientSelector from '../../../selectors/patient'
import './index.scss'

class Group extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    group: PropTypes.object.isRequired,
    patientList: PropTypes.array.isRequired,
  }

  goToAddGroupPage = () => {
    const { history, match } = this.props
    history.push(`/group/${match.params.id}/patient/create`)
  }

  render() {
    const { group, patientList } = this.props
    return (
      <TitleWithBackLayout
        className="group-container"
        title={group.name}
        componentAfterAppBar={
          <GroupCard group={group} square={true} />
        }
      >
        <div style={{ paddingBottom: 60 }}>
          <PatientList patientList={patientList} />
          <BottomAddMenu onClick={this.goToAddGroupPage} />
        </div>
      </TitleWithBackLayout>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  group: groupSelector.getByIdWithCountPatient(state, { id: match.params.id }),
  patientList: patientSelector.getArrayByGroup(state, { groupId: match.params.id }),
})

export default compose(
  connect(mapStateToProps),
  withRouter,
)(Group)
