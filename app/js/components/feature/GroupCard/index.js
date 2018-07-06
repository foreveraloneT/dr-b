import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
} from '@material-ui/core'

import { DeleteButtonIcon } from '../../common'
import { deleteGroup } from '../../../actions/group'
import './index.scss'

class GroupCard extends Component {
  static propTypes = {
    group: PropTypes.object.isRequired,
    deleteGroupRequest: PropTypes.func.isRequired,
  }

  doDeleteGroup = () => {
    const { group, deleteGroupRequest } = this.props
    if (group.countPatient === 0) {
      deleteGroupRequest(group._id)
    } else {
      alert('Error, please remove all patient in this group before this action !!!')
    }
  }

  render() {
    const { group, deleteGroupRequest, ...props } = this.props
    return (
      <Card
        elevation={1}
        className="group-card-wrapper"
        style={{ borderColor: group.color }}
        {...props}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="headline"
            component="h2"
            color="primary"
          >
            ({group.countPatient}) {group.name}
          </Typography>
          <Typography component="p">
            {group.description}
          </Typography>
        </CardContent>
        <CardActions
          disableActionSpacing
          className="card-action"
        >
          <DeleteButtonIcon onDelete={this.doDeleteGroup} />
        </CardActions>
      </Card>
    )
  }
}

const mapDispatchToProps = {
  deleteGroupRequest: deleteGroup.request,
}

export default connect(null, mapDispatchToProps)(GroupCard)
