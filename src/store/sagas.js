import { takeLatest, put, call, fork, all } from "redux-saga/effects";
import {
  fetchMailsSuccess,
  fetchMailsFailure,
  setFilterSuccess,
  searchMailSuccess,
} from "./action";
import { FILTER_MAIL, FETCH_MAILS, SEARCH_MAIL } from "./constants";
import { fetchMails } from "../services/mailService";

function* fetchMailsSaga() {
  try {
    const mails = yield call(fetchMails);
    yield put(fetchMailsSuccess(mails));
  } catch (error) {
    yield put(fetchMailsFailure(error.message));
  }
}

function* filterMailsSaga({ payload: filter }) {
  /*
  Ideally we should call api with filter(query params)
  e.g.    domain/mails?tag=spam
  but our api doesn't support filtering that's why fetching ang then filtering
  */
  const mails = yield call(fetchMails);

  const filteredMails = mails.filter((mail) => mail.tag === filter);
  yield put(setFilterSuccess(filteredMails));
}

function* searchMailsSaga({ payload: searchTerm }) {
  const mails = yield call(fetchMails);
  const filteredMails = mails.filter(
    (mail) =>
      mail.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );
  yield put(searchMailSuccess(filteredMails));
}

function* watchFilterMails() {
  yield takeLatest(FILTER_MAIL, filterMailsSaga);
}

function* watchFetchMailsSaga() {
  yield takeLatest(FETCH_MAILS, fetchMailsSaga);
}

function* watchSearchMailsSaga() {
  yield takeLatest(SEARCH_MAIL, searchMailsSaga);
}

const sagas = [
  fork(watchFilterMails),
  fork(watchFetchMailsSaga),
  fork(watchSearchMailsSaga),
];

function* rootSaga() {
  yield all([...sagas]);
}

export default rootSaga;
