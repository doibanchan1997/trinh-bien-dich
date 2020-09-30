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
import {hiddenModal} from './../actions/modal';
import {STATUS_CODE} from './../constants';
import {getList, addNews} from './../apis/news';
import *as typeAction from "./../constants/new";
import { uuid } from 'uuidv4';
import {fetchListNewsError, fetchListNewsSuccess , addNewsError, addNewsSuccess} from "../actions/news";
function* watchFetchListNewsAction() {
  while(true){
    const action = yield take(typeAction.FETCH_NEWS);
    let page = 1;
    let limit  = 10 ;

    const resp = yield call(getList,page,limit);
    const {status, data} = resp;
    if(status === STATUS_CODE.SUCCESS ){
      yield put(fetchListNewsSuccess(data));
    }
    else{
      yield put(fetchListNewsError(data))
    }
  }
}

//add news saga
function* addNewsSaga({payload}){
  const {titleNews,  nameNews, authorNews, news} = payload
  console.log(payload);
  const resp = yield call(addNews, {
    titleNews,
    authorNews,
    nameNews,
    news,
    id : uuid(),
    
  });
const {status, data} = resp;
if(status === STATUS_CODE.CREATE){
  yield put(addNewsSuccess(data));
  yield put(hiddenModal());
}else{
  yield put(addNewsError(data))
}
}

function* rootSaga() {
  yield fork(watchFetchListNewsAction);
  yield takeLatest(typeAction.ADD_NEWS, addNewsSaga);
  }
  export default rootSaga;