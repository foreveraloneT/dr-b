import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'


import GroupCard from '../GroupCard'
import { NoData } from '../../common'


class GroupList extends Component {
  static propTypes = {
    groupList: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
  }

  render() {
    const { groupList, history } = this.props
    if (groupList.length === 0) {
      return (
        <NoData />
      )
    }

    return (
      <div className="group-list-wrapper">
        {
          groupList.sort((group1, group2) => parseInt(group2.createAt, 10) - parseInt(group1.createAt, 10))
            .map(group => (
              <GroupCard
                key={group._id}
                group={group}
                onClick={() => { history.push(`/group/${group._id}`) }}
              />
            ))
        }
      </div>
    )
  }
}

export default withRouter(GroupList)
