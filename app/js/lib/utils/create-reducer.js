import { has } from 'lodash'

export default (initialState, actionHandlers) =>
  (state = initialState, action) => {
    if (has(actionHandlers, action.type)) {
      return actionHandlers[action.type](state, action)
    }
    return state
  }

