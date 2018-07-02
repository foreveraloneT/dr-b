const getCallAPIAction = action => ({
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

export const PING = 'PING'
export const PONG = 'PONG'
