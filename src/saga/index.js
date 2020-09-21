import {
  call,
  delay,
  fork,
  put,
  select,
  take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import {STATUS_CODE} from './../constants'
import {getList} from './../apis/news';
import *as typeAction from "./../constants/new"
import { fetchListNewsError, fetchListNewsSuccess } from "../actions/news";
function* watchFetchListNewsAction() {
  while(true){
    const action = yield take(typeAction.FETCH_NEWS);
    const resp = yield call(getList);
    const {status, data} = resp;
    if(status === STATUS_CODE.SUCCESS ){
      yield put(fetchListNewsSuccess(data));
    }
    else{
      yield put(fetchListNewsError(data))
    }
  }
}

function* rootSaga() {
  yield fork(watchFetchListNewsAction);

  }
  export default rootSaga;