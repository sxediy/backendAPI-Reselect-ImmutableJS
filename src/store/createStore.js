import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

const store = createStoreWithMiddleware(rootreducer, {});

sagaMiddleware.run(sagas);

export default store;
