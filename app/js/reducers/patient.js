import { keyBy } from 'lodash'

import createReducer from '../lib/utils/create-reducer'
import {
  GET_LIST_PATIENT,
  CREATE_PATIENT,
} from '../actions/action-types'

const initialState = {
  isLoading: false,
  isError: false,
  data: {},
}

export default createReducer(
  initialState,
  {
    // create
    [CREATE_PATIENT.REQUEST]: state => ({
      ...state,
      isError: false,
      isLoading: true,
    }),
    [CREATE_PATIENT.SUCCESS]: (state, action) => ({
      isLoading: false,
      isError: false,
      data: {
        ...state.data,
        [action.payload._id]: action.payload,
      },
    }),
    [CREATE_PATIENT.FAILURE]: state => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    // read
    [GET_LIST_PATIENT.REQUEST]: () => ({
      isLoading: true,
      isError: false,
      data: {},
    }),
    [GET_LIST_PATIENT.SUCCESS]: (state, action) => ({
      isLoading: false,
      isError: false,
      data: keyBy(action.payload, item => item._id),
    }),
    [GET_LIST_PATIENT.FAILURE]: () => ({
      isLoading: false,
      isError: true,
      data: {},
    }),
  }
)
