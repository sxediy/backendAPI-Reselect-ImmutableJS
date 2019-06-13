import { call, put, takeLatest } from 'redux-saga/effects';
import { getFetch } from '../service/restAPI';


function* picturesDataSaga() {
  try {
    // селектор в стейт, там уже есть урл, прилетевший из компонента

    const ressoursePath = 'gifs/random';
    const qsParams = 'api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA';


    const responseToJSON = yield call(getFetch, { ressoursePath, qsParams });
    if (responseToJSON && responseToJSON.meta && responseToJSON.meta.msg === 'OK') {
      yield put({ type: 'RECEIVE_CURRENT_PICTURE', payload: responseToJSON });
      yield put({ type: 'ADD_PICTURE_TO_HISTORY', payload: responseToJSON.data });
    }
  } catch (error) {
    yield put({ type: 'FAIL_CURRENT_PICTURE', payload: error.message, error: true });
  }
}

export default function* () {
  yield takeLatest('REQUEST_CURRENT_PICTURE', picturesDataSaga);
}
