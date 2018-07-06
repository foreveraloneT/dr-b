import { values, countBy } from 'lodash'

export const getArray = state => values(state.patient.data)

export const getArrayByGroup = (state, { groupId }) =>
  values(state.patient.data)
    .filter(item => item.groupId === groupId)

export const getCountByGroup = state => countBy(getArray(state), 'groupId')