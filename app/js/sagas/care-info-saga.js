import {
  call,
  put,
  all,
  throttle,
  takeEvery,
} from 'redux-saga/effects'

import {
  CREATE_CARE,
  GET_LIST_CARE,
  DELETE_CARE,
} from '../actions/action-types'
import {
  createCareInfo,
  getAllCareInfo,
  deleteCareInfo,
} from '../actions/care-info'
import CareInfo from '../lib/model/CareInfo'

const careInfo = new CareInfo()

// worker
export function* doCreateCareInfo({ params }) {
  try {
    const result = yield call(careInfo.add, params)
    yield put(createCareInfo.success(result))
  } catch (error) {
    yield put(createCareInfo.failure(error))
  }
}

export function* doGetCareInfo() {
  try {
    const result = yield call(careInfo.getAll)
    yield put(getAllCareInfo.success(result))
  } catch (error) {
    yield put(getAllCareInfo.failure(error))
  }
}

export function* doDeleteCareInfo({ id }) {
  try {
    yield call(careInfo.deleteById, id)
    yield put(deleteCareInfo.success(id))
  } catch (error) {
    yield put(deleteCareInfo.failure(error))
  }
}

// watcher
export function* watchCreateCareInfoRequest() {
  yield throttle(500, CREATE_CARE.REQUEST, doCreateCareInfo)
}

export function* watchGetAllCareInfoRequest() {
  yield takeEvery(GET_LIST_CARE.REQUEST, doGetCareInfo)
}

export function* watchDeleteCareInfoRequest() {
  yield yield throttle(500, DELETE_CARE.REQUEST, doDeleteCareInfo)
}

export default function* homeSaga() {
  yield all([
    watchCreateCareInfoRequest(),
    watchGetAllCareInfoRequest(),
    watchDeleteCareInfoRequest(),
  ])
}
