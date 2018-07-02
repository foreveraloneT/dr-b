import { combineEpics } from 'redux-observable'

import errorEpic from './error-epic'
import pingPongEpic from './ping-pong-epic'

export default combineEpics(
  errorEpic,
  pingPongEpic,
)
