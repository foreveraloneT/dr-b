import {
  call,
  put,
  all,
  throttle,
  takeEvery,
} from 'redux-saga/effects'

import {
  CREATE_GROUP,
  GET_LIST_GROUP,
} from '../actions/action-types'
import {
  createGroup,
  getAllGroup,
} from '../actions/group'
import Group from '../lib/model/Group'

const group = new Group()

// worker
export function* doCreateGroup({ params }) {
  try {
    const result = yield call(group.add, params)
    yield put(createGroup.success(result))
  } catch (error) {
    yield put(createGroup.failure(error))
  }
}

export function* doGetGroup() {
  try {
    const result = yield call(group.getAll)
    yield put(getAllGroup.success(result))
  } catch (error) {
    yield put(getAllGroup.failure(error))
  }
}

// watcher
export function* watchCreateGroupRequest() {
  yield throttle(500, CREATE_GROUP.REQUEST, doCreateGroup)
}

export function* watchGetAllGroupRequest() {
  yield takeEvery(GET_LIST_GROUP.REQUEST, doGetGroup)
}

export default function* homeSaga() {
  yield all([
    watchCreateGroupRequest(),
    watchGetAllGroupRequest(),
  ])
}
