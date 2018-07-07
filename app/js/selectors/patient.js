import { values, countBy } from 'lodash'

import * as careInfoSelector from './care-info'

export const getArray = state => values(state.patient.data)

export const getById = (state, { id }) => state.patient.data[id] || {}

export const getArrayByGroup = (state, { groupId }) =>
  values(state.patient.data)
    .filter(item => item.groupId === groupId)

export const getCountByGroup = state => countBy(getArray(state), 'groupId')

export const getArrayByGroupWithCountCareInfo = (state, { groupId }) => {
  const careInfoCount = careInfoSelector.getCountByPatient(state)
  return getArrayByGroup(state, { groupId }).map(item => ({
    ...item,
    countCareInfo: careInfoCount[item._id] || 0
  }))
}

export const getByIdWithCountCareInfo = (state, { id }) => ({
  ...getById(state, { id }),
  countCareInfo: careInfoSelector.getCountByPatient(state)[id] || 0
})
