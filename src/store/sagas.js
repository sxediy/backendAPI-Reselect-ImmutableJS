import { call, put, takeLatest } from 'redux-saga/effects';
import { getFetch } from '../service/restAPI';


function* picturesDataSaga() {
  try {
    // селектор в стейт, там уже есть урл, прилетевший из компонента

    const ressoursePath = 'gifs/random';
    const qsParams = 'api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';


    const responseToJSON = yield call(getFetch, { ressoursePath, qsParams });
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
