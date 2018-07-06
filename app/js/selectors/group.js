import { values } from 'lodash'

export const getArray = state => values(state.group.data)

export const getById = (state, { id }) => state.group.data[id] || {}
