import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { TitleWithBackLayout } from '../../layout'
import { BottomAddMenu } from '../../common'
import { PatientCard, CareInfoList } from '../../feature'
import * as patientSelector from '../../../selectors/patient'
import * as careInfoSelector from '../../../selectors/care-info'
import './index.scss'

class Patient extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired,
    careInfoList: PropTypes.array.isRequired,
  }

  goToAddCareInfoPage = () => {
    const { history, match } = this.props
    history.push(`/patient/${match.params.id}/care-info/create`)
  }

  render() {
    const { patient, history, careInfoList } = this.props
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
        <CareInfoList careInfoList={careInfoList} />
        <div style={{ paddingBottom: 60 }}>
          <BottomAddMenu onClick={this.goToAddCareInfoPage} />
        </div>
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
)(Patient)
