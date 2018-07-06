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
} from '../actions/action-types'
import {
  createPatient,
  getAllPatient,
} from '../actions/patient'
import Patient from '../lib/model/Patient'

const patient = new Patient()

// worker
export function* doCreatePatient({ params }) {
  try {
    const result = yield call(patient.add, params)
    yield put(createPatient.success(result))
  } catch (error) {
    console.log(error)
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

// watcher
export function* watchCreatePatientRequest() {
  yield throttle(500, CREATE_PATIENT.REQUEST, doCreatePatient)
}

export function* watchGetAllPatientRequest() {
  yield takeEvery(GET_LIST_PATIENT.REQUEST, doGetPatient)
}

export default function* homeSaga() {
  yield all([
    watchCreatePatientRequest(),
    watchGetAllPatientRequest(),
  ])
}
