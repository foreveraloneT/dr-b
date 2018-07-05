import { combineReducers } from 'redux'

import error from './error'
import group from './group'

const rootReducer = combineReducers({
  error,
  group,
})

export default rootReducer
