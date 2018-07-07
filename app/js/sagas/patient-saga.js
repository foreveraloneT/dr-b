import {
  call,
  put,
  all,
  throttle,
  takeEvery,
} from 'redux-saga/effects'

import {
  CREATE_PATIENT,
  GET_LIST_PATIENT,
  DELETE_PATIENT,
} from '../actions/action-types'
import {
  createPatient,
  getAllPatient,
  deletePatient,
} from '../actions/patient'
import Patient from '../lib/model/Patient'
import CareInfo from '../lib/model/CareInfo'

const patient = new Patient()
const careInfo = new CareInfo()

// worker
export function* doCreatePatient({ params }) {
  try {
    const result = yield call(patient.add, params)
    yield put(createPatient.success(result))
  } catch (error) {
    yield put(createPatient.failure(error))
  }
}

export function* doGetPatient() {
  try {
    const result = yield call(patient.getAll)
    yield put(getAllPatient.success(result))
  } catch (error) {
    yield put(getAllPatient.failure(error))
  }
}

export function* doDeletePatient({ id }) {
  try {
    const canDelete = yield call(patient.deleteById, id)
    if (canDelete) {
      yield call(careInfo.deleteByPatientId, id)
    }
    yield put(deletePatient.success(id))
  } catch (error) {
    yield put(deletePatient.failure(error))
  }
}


// watcher
export function* watchCreatePatientRequest() {
  yield throttle(500, CREATE_PATIENT.REQUEST, doCreatePatient)
}

export function* watchGetAllPatientRequest() {
  yield takeEvery(GET_LIST_PATIENT.REQUEST, doGetPatient)
}

export function* watchDeleteGroupRequest() {
  yield yield throttle(500, DELETE_PATIENT.REQUEST, doDeletePatient)
}

export default function* homeSaga() {
  yield all([
    watchCreatePatientRequest(),
    watchGetAllPatientRequest(),
    watchDeleteGroupRequest(),
  ])
}
