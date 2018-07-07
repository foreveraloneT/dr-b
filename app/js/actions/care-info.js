import {
  CREATE_CARE,
  GET_LIST_CARE,
  DELETE_CARE,
  makeBasicActionCreator,
  makeDeleteActionCreator,
} from './action-types'

export const createCareInfo = makeBasicActionCreator(
  CREATE_CARE.REQUEST,
  CREATE_CARE.SUCCESS,
  CREATE_CARE.FAILURE,
)

export const getAllCareInfo = makeBasicActionCreator(
  GET_LIST_CARE.REQUEST,
  GET_LIST_CARE.SUCCESS,
  GET_LIST_CARE.FAILURE,
)

export const deleteCareInfo = makeDeleteActionCreator(
  DELETE_CARE.REQUEST,
  DELETE_CARE.SUCCESS,
  DELETE_CARE.FAILURE
)
