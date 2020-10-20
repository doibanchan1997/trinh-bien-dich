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
import {getList, addNews, updateNews, deleteNews} from './../apis/news';
import *as typeAction from "./../constants/new";
import { uuid } from 'uuidv4';
import {fetchListNewsError, fetchListNewsSuccess , addNewsError, addNewsSuccess, updateNewsSuccess, updateNewsError, deleteNewsSuccess} from "../actions/news";
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

function* updateNewsSaga ({payload}){
  const {titleNews,  nameNews, authorNews, news} = payload
  const newsEditing = yield select(state => state.news.newsEditing);
  const resp = yield call(updateNews, {titleNews, nameNews, authorNews, news}, newsEditing.id);
  const {data, status: statusCode} = resp;
  if(statusCode === STATUS_CODE.SUCCESS){
    yield put(updateNewsSuccess(data));
    yield put(hiddenModal());

  }else{
    yield put(updateNewsError(data));
  }
}

function* deleteNewsSaga ({payload}) {
  const {id} = payload;
  const resp  = yield call(deleteNews, id);
  const {data, status: statusCode} = resp;
  if(statusCode === STATUS_CODE.SUCCESS){
    yield put(deleteNewsSuccess(id));
    console.log(id);

    yield put(hiddenModal());

  }else{
    yield put(updateNewsError(data));
  }
}

function* rootSaga() {
  yield fork(watchFetchListNewsAction);
  yield takeLatest(typeAction.ADD_NEWS, addNewsSaga);
  yield takeLatest(typeAction.UPDATE_NEWS, updateNewsSaga);
  yield takeLatest (typeAction.DELETE_NEWS, deleteNewsSaga)
  }
  export default rootSaga;