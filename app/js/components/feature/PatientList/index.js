import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import PatientCard from '../PatientCard'
import { NoData } from '../../common'

class PatientList extends Component {
  static propTypes = {
    patientList: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
  }

  render() {
    const { patientList, history } = this.props

    if (patientList.length === 0) {
      return (
        <NoData />
      )
    }
    return (
      <div className="patient-list-wrapper">
        {
          patientList.sort((patient1, patient2) => parseInt(patient2.createAt, 10) - parseInt(patient1.createAt, 10))
            .map(patient => (
              <PatientCard key={patient._id} patient={patient} />
            ))
        }
      </div>
    )
  }
}

export default withRouter(PatientList)
