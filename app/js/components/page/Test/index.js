import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Icon } from '../../common'
import { letPing } from '../../../actions/ping-pong'
import { pingPongSelector } from '../../../selectors/ping-pong'
import GlobalConfig from '../../../lib/utils/GlobalConfig'
import './index.scss'

class Test extends Component {
  static propTypes = {
    isPing: PropTypes.bool.isRequired,
  }

  onClickHandler = () => {
    this.props.letPing(1000)
  }

  render() {
    const icon1 = 'http://icons.veryicon.com/png/Movie%20%26%20TV/Doraemon/joy.png'
    const icon2 = 'http://icons.veryicon.com/png/Movie%20%26%20TV/Doraemon/sorry.png'
    return (
      <div className="test-container">
        <img src='/static/images/logo.png' />
        <div>
          <Icon
            size={50}
            iconImage={icon1}
            hoverImage={icon2}
            onClick={() => alert('Hello')}
          />
        </div>
        <div>
          <Icon
            size={50}
            iconClassName='ion-heart'
          />
        </div>
        <div className="green-text">This is test page.</div>
        <div>
          PING: { String(this.props.isPing) }
        </div>
        <div>
          <button onClick={this.onClickHandler}>Click Me</button>
        </div>
        <div>
          Endpoint (from config file): {GlobalConfig.get('API_ENDPOINT')}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isPing: pingPongSelector(state),
})

const mapDispatchToProps = dispatch => ({
  letPing: (duration = 0) => dispatch(letPing(duration)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Test)
