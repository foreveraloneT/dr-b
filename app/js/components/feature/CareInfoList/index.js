import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import CareInfoCard from '../CareInfoCard'
import { NoData } from '../../common'

class CareInfoList extends Component {
  static propTypes = {
    careInfoList: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired,
  }

  render() {
    const { careInfoList, history } = this.props
    if (careInfoList.length === 0) {
      return (
        <NoData />
      )
    }

    return (
      <div className="care-list-wrapper">
        {
          careInfoList.sort((info1, info2) => parseInt(info2.date, 10) - parseInt(info1.date, 10))
            .map(info => (
              <CareInfoCard
                key={info._id}
                careInfo={info}
                onClick={() => { history.push(`/care-info/${info._id}`) }}
              />
            ))
        }
      </div>
    )
  }
}

export default withRouter(CareInfoList)
