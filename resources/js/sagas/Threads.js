import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getThread, createThreadApi } from './api';
import { READ_THREAD, CREATE_THREAD } from '../actions';
import { threadFetchSucceeded, threadFetchFailed, threadCreateSucceeded, threadCreateFailed } from '../actions';

function* fetchThread(action) {
    try {
        const id = action.id;
        const response = yield call(getThread, id);
        const payload = response.data;
        const meta = { statusCode: response.status, statusText: response.statusText };
        yield put(threadFetchSucceeded(payload, meta));
    } catch (ex) {
        yield put(threadFetchFailed(ex));
    }
}

export function* watchReadThread() {
    yield takeEvery(READ_THREAD, fetchThread);
}

function* createThread(action) {
    const threadData = action.values;
    const response = yield call(createThreadApi, threadData);
    if (response) {
        yield put(threadCreateSucceeded(response.data));
    } else {
        yield put(threadCreateFailed('エラー'));
    }
}

export function* watchCreateThread() {
    yield takeLatest(CREATE_THREAD, createThread);
}
