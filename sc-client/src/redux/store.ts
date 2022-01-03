import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootreducer from './reducer';
import rootSaga from './sagas/rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// Mounting the middleware on the store
const store = createStore(rootreducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;