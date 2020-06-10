import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;