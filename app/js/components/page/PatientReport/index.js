import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { TitleWithBackLayout } from '../../layout'
import { Paper } from '../../common'
import { PatientCard, CareInfoList } from '../../feature'
import * as patientSelector from '../../../selectors/patient'
import * as careInfoSelector from '../../../selectors/care-info'
import './index.scss'

class PatientReport extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired,
    careInfoList: PropTypes.array.isRequired,
  }

  render() {
    const { patient, history, careInfoList } = this.props
    return (
      <TitleWithBackLayout
        className="patient-container"
        title={`${patient.fullname} - report summary`}
        componentAfterAppBar={
          <PatientCard
            patient={patient}
            square={true}
            onDeleteSuccess={() => { history.goBack() }}
          />
        }
      >
        <Paper>
          {JSON.stringify(careInfoList, null, '\t')}
        </Paper>
      </TitleWithBackLayout>
    )
  }
}

const mapStateToProps = (state, { match }) => ({
  patient: patientSelector.getByIdWithCountCareInfo(state, { id: match.params.id }),
  careInfoList: careInfoSelector.getArrayByPatient(state, { patientId: match.params.id })
})

export default compose(
  connect(mapStateToProps),
  withRouter,
)(PatientReport)
