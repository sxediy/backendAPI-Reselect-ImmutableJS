import { call, put, takeLatest } from 'redux-saga/effects';
import { getFetch } from '../service/restAPI';


function* picturesDataSaga() {
  try {
    // селектор в стейт, там уже есть урл, прилетевший из компонента
    const fetchURL = 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';


    const responseToJSON = yield call(getFetch, fetchURL);
    if (responseToJSON && responseToJSON.meta && responseToJSON.meta.msg === 'OK') {
      yield put({ type: 'PICTURESDATA_SUCCESS', payload: responseToJSON });
    }
  } catch (error) {
    yield put({ type: 'PICTURESDATA_FAIL', payload: error.message, error: true });
  }
}

export default function* () {
  yield takeLatest('GET_PICTURESDATA', picturesDataSaga);
}
