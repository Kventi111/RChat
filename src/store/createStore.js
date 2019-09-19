import { createStore,applyMiddleware,compose } from "redux"
// import {createLogger} from "redux-logger"
// import rootSaga from '../application/saga'
// import createSagaMiddleware from 'redux-saga';

import rootReducers from '../reducers/combineReducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const sagaMiddleware = createSagaMiddleware()

// const logger = createLogger({
//   collapsed: (getState, action, logEntry) => !logEntry.error
// });

export default () => {
  const store = createStore(rootReducers,composeEnhancers())
  
  return store
}