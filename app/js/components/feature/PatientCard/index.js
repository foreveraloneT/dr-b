import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  Delete as DeleteIcon,
} from '@material-ui/icons'

import './index.scss'

// const basePath = '/static/'
const malePic = '/static/images/male.png'
const femalePic = '/static/images/female.png'

const PatientCard = ({ patient, ...props }) => (
  <Card
    elevation={1}
    className="patient-card-wrapper"
    style={{ borderColor: patient.color }}
    {...props}
  >
    <CardMedia
      className="cover"
      image={patient.gender === 'male' ? malePic : femalePic}
    />
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
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </div>
  </Card>
)

PatientCard.propTypes = {
  patient: PropTypes.object.isRequired,
}

export default PatientCard
