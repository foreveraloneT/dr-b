import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { TitleWithBackLayout } from '../../layout'
import { BottomAddMenu } from '../../common'
import { PatientCard } from '../../feature'
import * as patientSelector from '../../../selectors/patient'
import './index.scss'

class Patient extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired,
  }

  goToAddCareInfoPage = () => {
    const { history, match } = this.props
    history.push(`/patient/${match.params.id}/care-info/create`)
  }

  render() {
    const { patient, history } = this.props
    return (
      <TitleWithBackLayout
        className="patient-container"
        title={patient.fullname}
        componentAfterAppBar={
          <PatientCard
            patient={patient}
            square={true}
            onDeleteSuccess={() => { history.goBack() }}
          />
        }
      >
        <div style={{ paddingBottom: 60 }}>
          <BottomAddMenu onClick={this.goToAddCareInfoPage} />
        </div>
      </TitleWithBackLayout>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  patient: patientSelector.getById(state, { id: match.params.id }),
})

export default compose(
  connect(mapStateToProps),
  withRouter,
)(Patient)
