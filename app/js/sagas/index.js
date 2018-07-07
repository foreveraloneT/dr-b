import { all } from 'redux-saga/effects'

import groupSaga from './group-saga'
import patientSaga from './patient-saga'
import careInfoSaga from './care-info-saga'

export default function* rootSaga() {
  yield all([
    groupSaga(),
    patientSaga(),
    careInfoSaga(),
  ])
}
