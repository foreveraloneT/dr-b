import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isFunction, omit } from 'lodash'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core'
import moment from 'moment'

import { DeleteButtonIcon } from '../../common'
import { deleteCareInfo } from '../../../actions/care-info'
import './index.scss'

class CareInfoCard extends Component {
  static propTypes = {
    careInfo: PropTypes.object.isRequired,
    deleteCareInfoRequest: PropTypes.func.isRequired,
    onDeleteSuccess: PropTypes.func,
  }

  doDeleteCareInfo = () => {
    const { careInfo, deleteCareInfoRequest, onDeleteSuccess } = this.props
    deleteCareInfoRequest(careInfo._id)
    if (isFunction(onDeleteSuccess)) {
      onDeleteSuccess()
    }
  }

  render() {
    const { careInfo, ...props } = this.props
    return (
      <Card
        elevation={1}
        className="info-card-wrapper"
        style={{ borderColor: careInfo.color }}
        {...omit(props, ['onDeleteSuccess', 'deleteCareInfoRequest'])}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            color="primary"
          >
            {moment(Number(careInfo.date)).format('dddd Do MMMM YYYY')}
          </Typography>
          <Typography component="p">
            {careInfo.remark}
          </Typography>
        </CardContent>
        <CardActions
          disableActionSpacing
          className="card-action"
        >
          <DeleteButtonIcon onDelete={this.doDeleteCareInfo} />
        </CardActions>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  deleteCareInfoRequest: deleteCareInfo.request,
}

export default connect(null, mapDispatchToProps)(CareInfoCard)
