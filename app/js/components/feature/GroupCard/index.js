import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from '@material-ui/core'
import {
  Delete as DeleteIcon,
} from '@material-ui/icons'

import './index.scss'

const GroupCard = ({ group }) => (
  <Card
    elevation={1}
    className="group-card-wrapper"
    style={{ borderColor: group.color }}
  >
    <CardContent>
      <Typography
        gutterBottom
        variant="headline"
        component="h2"
        color="primary"
      >
        {group.name}
      </Typography>
      <Typography component="p">
        {group.description}
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
  </Card>
)

GroupCard.propTypes = {
  group: PropTypes.object.isRequired,
}

export default GroupCard
