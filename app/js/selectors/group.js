import { values } from 'lodash'

import * as patientSelector from './patient'

export const getArray = state => values(state.group.data)

export const getById = (state, { id }) => state.group.data[id] || {}

export const getArrayWithCountPatient = (state) => {
  const patientCount = patientSelector.getCountByGroup(state)
  return getArray(state).map(item => ({
    ...item,
    countPatient: patientCount[item._id] || 0
  }))
}

export const getByIdWithCountPatient = (state, { id }) => ({
  ...getById(state, { id }),
  countPatient: patientSelector.getCountByGroup(state)[id] || 0
})
