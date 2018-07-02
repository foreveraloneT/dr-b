import { combineReducers } from 'redux'

import error from './error'
import isPing from './ping-pong'

const rootReducer = combineReducers({
  error,
  isPing,
})

export default rootReducer
