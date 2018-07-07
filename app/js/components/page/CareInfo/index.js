import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import moment from 'moment'

import { TitleWithBackLayout } from '../../layout'
import { PatientCard } from '../../feature'
import {
  Paper,
} from '../../common'
import * as careInfoSelector from '../../../selectors/care-info'
import * as patientSelector from '../../../selectors/patient'

class CareInfo extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    careInfo: PropTypes.object.isRequired,
    patient: PropTypes.object.isRequired,
  }

  render() {
    const {
      patient,
      careInfo: {
        date,
        debridement,
        adjunctive,
        oxygenTherapy,
        color,
        remark,
      }
    } = this.props
    return (
      <TitleWithBackLayout
        className="care-detail-container"
        title={moment(Number(date)).format('dddd Do MMMM YYYY')}
      >
        <div style={{ paddingBottom: 60 }}>
          <PatientCard patient={patient} />
          <Paper style={{ borderLeft: `5px solid ${color}` }}>
            <Table style={{ border: '1px solid #e8e8e8' }}>
              <TableHead>
                <TableRow>
                  <TableCell>Topic</TableCell>
                  <TableCell>Option</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell><b>Debridment</b></TableCell>
                  <TableCell>{debridement}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Adjunctive</b></TableCell>
                  <TableCell>{adjunctive}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><b>Oxygen therapy</b></TableCell>
                  <TableCell>{oxygenTherapy}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Typography style={{ marginTop: 10 }}>
              <b>Remark:</b>
            </Typography>
            <Typography>
              {remark || '-'}
            </Typography>
          </Paper>
        </div>
      </TitleWithBackLayout>
    )
  }
}

const mapStateToProps = (state, { match }) => {
  const careInfo = careInfoSelector.getById(state, { id: match.params.id })
  const patient = patientSelector.getByIdWithCountCareInfo(state, { id: careInfo.patientId })

  return {
    careInfo,
    patient,
  }
}

export default compose(
  connect(mapStateToProps),
  withRouter,
)(CareInfo)
