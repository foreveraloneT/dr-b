import { values, countBy } from 'lodash'

export const getArray = state => values(state.careInfo.data)

export const getById = (state, { id }) => state.careInfo.data[id] || {}

export const getArrayByPatient = (state, { patientId }) =>
  getArray(state).filter(item => item.patientId === patientId)

export const getCountByPatient = state => countBy(getArray(state), 'patientId')
