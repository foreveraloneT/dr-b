import { all } from 'redux-saga/effects'

import groupSaga from './group-saga'

export default function* rootSaga() {
  yield all([
    groupSaga(),
  ])
}
