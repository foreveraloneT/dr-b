import React from 'react'
import PropTypes from 'prop-types'

import GroupCard from '../GroupCard'
import { NoData } from '../../common'

const GroupList = ({ groupList }) => {
  if (groupList.length === 0) {
    return (
      <NoData />
    )
  }
  return (
    <div className="group-list-wrapper">
      {
        groupList.sort((group1, group2) => group1.createAt < group2.createAt)
          .map(group => (
            <GroupCard
              key={group._id}
              group={group}
            />
          ))
      }
    </div>
  )
}

GroupList.propTypes = {
  groupList: PropTypes.array.isRequired,
}

export default GroupList
