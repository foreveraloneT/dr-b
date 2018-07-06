import {
  CREATE_GROUP,
  GET_LIST_GROUP,
  DELETE_GROUP,
  makeBasicActionCreator,
  makeDeleteActionCreator,
} from './action-types'

export const createGroup = makeBasicActionCreator(
  CREATE_GROUP.REQUEST,
  CREATE_GROUP.SUCCESS,
  CREATE_GROUP.FAILURE
)

export const getAllGroup = makeBasicActionCreator(
  GET_LIST_GROUP.REQUEST,
  GET_LIST_GROUP.SUCCESS,
  GET_LIST_GROUP.FAILURE
)

export const deleteGroup = makeDeleteActionCreator(
  DELETE_GROUP.REQUEST,
  DELETE_GROUP.SUCCESS,
  DELETE_GROUP.FAILURE
)
