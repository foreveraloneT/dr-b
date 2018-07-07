import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isFunction, omit } from 'lodash'
import moment from 'moment'
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from '@material-ui/core'
import { LocalHospital as HospitalIcon } from '@material-ui/icons'

import { DeleteButtonIcon } from '../../common'
import { deletePatient } from '../../../actions/patient'
import './index.scss'

const malePic = '/static/images/male.png'
const femalePic = '/static/images/female.png'

class PatientCard extends Component {
  static propTypes = {
    patient: PropTypes.object.isRequired,
    deletePatientRequest: PropTypes.func.isRequired,
    onDeleteSuccess: PropTypes.func,
  }

  doDeletePatient = () => {
    const { patient, deletePatientRequest, onDeleteSuccess } = this.props
    deletePatientRequest(patient._id)
    if (isFunction(onDeleteSuccess)) {
      onDeleteSuccess()
    }
  }

  render() {
    const { patient, ...props } = this.props
    return (
      <Card
        elevation={1}
        className="patient-card-wrapper"
        style={{ borderColor: patient.color }}
        {...omit(props, ['deletePatientRequest', 'onDeleteSuccess'])}
      >
        <div className="avatar-detail">
          <CardMedia
            className="cover"
            image={patient.gender === 'male' ? malePic : femalePic}
          />
          <Typography align="center" component="div">
            <HospitalIcon />
            <div
              style={{
                display: 'inline-block',
                position: 'relative',
                top: -4,
                left: 2,
              }}
            >
              <h1>{patient.countCareInfo}</h1>
            </div>
          </Typography>
        </div>

        <div className="detail">
          <CardContent>
            <Typography
              gutterBottom
              variant="headline"
              component="h2"
              color="primary"
            >
              {patient.fullname}
            </Typography>
            <Typography><b>ID:</b> {patient.id}</Typography>
            <Typography><b>Gender:</b> {patient.gender}</Typography>
            <Typography><b>Age:</b> {Number(moment().format('YYYY')) - Number(patient.yearOfBirth)}</Typography>
            <Typography component="p" style={{ marginTop: 8 }}>
              {patient.note}
            </Typography>
          </CardContent>
          <CardActions
            disableActionSpacing
            className="card-action"
          >
            <DeleteButtonIcon onDelete={this.doDeletePatient} />
          </CardActions>
        </div>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  deletePatientRequest: deletePatient.request,
}

export default connect(null, mapDispatchToProps)(PatientCard)
