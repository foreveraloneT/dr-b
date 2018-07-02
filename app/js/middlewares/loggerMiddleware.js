import { createLogger } from 'redux-logger'
import {

} from '../actions/action-types'

// const excludeActions = [

// ]

// const interestedAction = [

// ]

// excludes
// const filterAction = (getState, action) => !excludeActions.includes(action.type)

// include
// const filterAction = (getState, action) => interestedAction.includes(action.type)

// export default createLogger({
//   predicate: filterAction,
// })

export default createLogger()
