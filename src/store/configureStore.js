import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import {createLogger} from 'redux-logger'

const loggerMiddleware = createLogger()

const configureStore = preloadedState => createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware 
  )
)

export default configureStore
