import { values } from 'lodash'

export const getGroupArray = state => values(state.group.data)
