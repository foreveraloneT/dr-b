import { all } from 'redux-saga/effects'

import groupSaga from './group-saga'
import patientSaga from './patient-saga'

export default function* rootSaga() {
  yield all([
    groupSaga(),
    patientSaga(),
  ])
}
