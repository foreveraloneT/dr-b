import { combineReducers } from 'redux'

import error from './error'
import group from './group'
import patient from './patient'
import careInfo from './care-info'

const rootReducer = combineReducers({
  error,
  group,
  patient,
  careInfo,
})

export default rootReducer
