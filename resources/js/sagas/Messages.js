import { call, put, takeLatest } from 'redux-saga/effects';
import { createMessageApi } from './api';
import { CREATE_MESSAGE } from '../actions';
import { messageCreateSucceeded, messageCreateFailed } from '../actions';

function* createMessage(action) {
    const messageData = action.values;
    const response = yield call(createMessageApi, messageData);
    if (response) {
        yield put(messageCreateSucceeded(response.data));
    } else {
        yield put(messageCreateFailed('エラー'));
    }
}

export function* watchCreateMessage() {
    yield takeLatest(CREATE_MESSAGE, createMessage);
}
