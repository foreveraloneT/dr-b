import {
  PING,
  PONG,
} from '../actions/action-types'

const initialState = false

export default (state = initialState, action) => {
  switch (action.type) {
    case PING:
      return true
    case PONG:
      return false
    default:
      return state
  }
}
