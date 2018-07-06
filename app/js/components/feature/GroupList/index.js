import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
            <Link key={group._id} to={`/group/${group._id}`}>
              <GroupCard group={group} />
            </Link>
          ))
      }
    </div>
  )
}

GroupList.propTypes = {
  groupList: PropTypes.array.isRequired,
}

export default GroupList
