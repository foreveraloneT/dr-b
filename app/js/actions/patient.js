import {
  CREATE_PATIENT,
  GET_LIST_PATIENT,
  makeBasicActionCreator,
} from './action-types'

export const createPatient = makeBasicActionCreator(
  CREATE_PATIENT.REQUEST,
  CREATE_PATIENT.SUCCESS,
  CREATE_PATIENT.FAILURE,
)

export const getAllPatient = makeBasicActionCreator(
  GET_LIST_PATIENT.REQUEST,
  GET_LIST_PATIENT.SUCCESS,
  GET_LIST_PATIENT.FAILURE,
)
