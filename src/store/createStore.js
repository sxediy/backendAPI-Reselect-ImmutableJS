import { applyMiddleware, createStore, compose } from 'redux';
import { Map } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware)
)(createStore);

const initialState = Map({});

const store = createStoreWithMiddleware(rootreducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(sagas);

export default store;
