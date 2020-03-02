import { call, put, takeEvery } from 'redux-saga/effects';
import { getBoards } from '../sagas/api';
import { READ_BOARDS } from '../actions';
import { boardFetchSucceeded, boardFetchFailed } from '../actions';

function* fetchBoard() {
    try {
        const response = yield call(getBoards);
        const payload = response.data;
        const meta = { statusCode: response.status, statusText: response.statusText };
        yield put(boardFetchSucceeded(payload, meta));
    } catch (ex) {
        yield put(boardFetchFailed(ex));
    }
}

export function* watchReadBoards() {
    yield takeEvery(READ_BOARDS, fetchBoard);
}
