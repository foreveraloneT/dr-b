import { applyMiddleware, compose, createStore } from 'redux'

import loggerMiddleware from '../middlewares/loggerMiddleware'
import epicMiddleware from '../middlewares/epicMiddleware'
import rootReducer from '../reducers'

const middlewares = [epicMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware)
}

const storeEnhancer = [applyMiddleware(...middlewares)]
const finalCreateStore = compose(...storeEnhancer)(createStore)
const configureStore = initialState => finalCreateStore(rootReducer, initialState)

export default configureStore
