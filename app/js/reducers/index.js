import { combineReducers } from 'redux'

import error from './error'
import group from './group'
import patient from './patient'

const rootReducer = combineReducers({
  error,
  group,
  patient,
})

export default rootReducer
