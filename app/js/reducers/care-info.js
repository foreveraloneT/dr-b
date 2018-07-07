import { keyBy, omit } from 'lodash'

import createReducer from '../lib/utils/create-reducer'
import {
  GET_LIST_CARE,
  CREATE_CARE,
  DELETE_CARE,
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
    [CREATE_CARE.REQUEST]: state => ({
      ...state,
      isError: false,
      isLoading: true,
    }),
    [CREATE_CARE.SUCCESS]: (state, action) => ({
      isLoading: false,
      isError: false,
      data: {
        ...state.data,
        [action.payload._id]: action.payload,
      },
    }),
    [CREATE_CARE.FAILURE]: state => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    // read
    [GET_LIST_CARE.REQUEST]: () => ({
      isLoading: true,
      isError: false,
      data: {},
    }),
    [GET_LIST_CARE.SUCCESS]: (state, action) => ({
      isLoading: false,
      isError: false,
      data: keyBy(action.payload, item => item._id),
    }),
    [GET_LIST_CARE.FAILURE]: () => ({
      isLoading: false,
      isError: true,
      data: {},
    }),
    // delete
    [DELETE_CARE.REQUEST]: state => ({
      ...state,
      isError: false,
      isLoading: true,
    }),
    [DELETE_CARE.SUCCESS]: (state, action) => ({
      isLoading: false,
      isError: false,
      data: omit(state.data, [action.id])
    }),
    [DELETE_CARE.FAILURE]: state => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
  }
)
