import React, { Component } from 'react'
import moment from 'moment'
import { omit } from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { Typography } from '@material-ui/core'

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

  syntaxHighlight(text) {
    let json
    if (typeof text !== 'string') {
      json = JSON.stringify(text, undefined, 2);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, (match) => {
      let cls = 'number'
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'key'
        } else {
          cls = 'string'
        }
      } else if (/true|false/.test(match)) {
        cls = 'boolean'
      } else if (/null/.test(match)) {
        cls = 'null'
      }
      return `<span class="${cls}">${match}</span>`
    });
  }

  render() {
    const { patient, history, careInfoList } = this.props
    const careListToShow = careInfoList.map(data => ({
      ...omit(data, ['patientId', 'isSync', 'createAt', 'updateAt']),
      dateFull: moment(Number(data.date)).format('YYYY-MM-DD'),
      dateShort: moment(Number(data.date)).format('dddd Do MMMM YYYY'),
    }))

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
          <Typography variant="headline" gutterBottom>
            JSON Format
          </Typography>
          <pre className='code-container'>
            <code dangerouslySetInnerHTML={{ __html: this.syntaxHighlight(careListToShow) }} />
          </pre>
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
