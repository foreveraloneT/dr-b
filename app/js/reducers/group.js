import { keyBy } from 'lodash'

import createReducer from '../lib/utils/create-reducer'
import {
  GET_LIST_GROUP,
  CREATE_GROUP,
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
    [CREATE_GROUP.REQUEST]: state => ({
      ...state,
      isError: false,
      isLoading: true,
    }),
    [CREATE_GROUP.SUCCESS]: (state, action) => ({
      isLoading: false,
      isError: false,
      data: {
        ...state.data,
        [action.payload._id]: action.payload,
      },
    }),
    [CREATE_GROUP.FAILURE]: state => ({
      ...state,
      isLoading: false,
      isError: true,
    }),
    // read
    [GET_LIST_GROUP.REQUEST]: () => ({
      isLoading: true,
      isError: false,
      data: {},
    }),
    [GET_LIST_GROUP.SUCCESS]: (state, action) => ({
      isLoading: false,
      isError: false,
      data: keyBy(action.payload, item => item._id),
    }),
    [GET_LIST_GROUP.FAILURE]: () => ({
      isLoading: false,
      isError: true,
      data: {},
    }),
  }
)
