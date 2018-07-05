const getBasicAction = action => ({
  REQUEST: `${action}_REQUEST`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
})

export const makeActionCreator = (type, ...argNames) => (...args) => {
  let action = { type }
  argNames.forEach((arg, index) => {
    action[arg] = args[index]
  })
  return action
}

export const makeBasicActionCreator = (requestAction, successAction, failureAction) => ({
  request: makeActionCreator(requestAction, 'params'),
  success: makeActionCreator(successAction, 'payload'),
  failure: makeActionCreator(failureAction, 'error'),
})

export const CREATE_GROUP = getBasicAction('CREATE_GROUP')
export const GET_LIST_GROUP = getBasicAction('GET_LIST_GROUP')
