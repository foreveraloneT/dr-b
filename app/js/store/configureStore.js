import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import loggerMiddleware from '../middlewares/loggerMiddleware'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware)
}

const storeEnhancer = [applyMiddleware(...middlewares)]
const finalCreateStore = compose(...storeEnhancer)(createStore)
const configureStore = (initialState) => {
  const store = finalCreateStore(rootReducer, initialState)
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
