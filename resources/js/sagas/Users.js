import { call, put, takeEvery } from 'redux-saga/effects';
import { getUser, deleteUserApi, updateUserApi } from '../sagas/api';
import { READ_USER, DELETE_USER, UPDATE_USER } from '../actions';
import {
    userFetchSucceeded,
    userFetchFailed,
    userDeleteSucceeded,
    userDeleteFailed,
    userUpdateSucceeded,
    userUpdateFailed
} from '../actions';

function* fetchUser() {
    try {
        const response = yield call(getUser);
        const payload = response.data;
        const meta = { statusCode: response.status, statusText: response.statusText };
        yield put(userFetchSucceeded(payload, meta));
    } catch (ex) {
        yield put(userFetchFailed(ex));
    }
}

export function* watchReadUser() {
    yield takeEvery(READ_USER, fetchUser);
}

function* deleteUser() {
    try {
        const response = yield call(deleteUserApi);
        const payload = response.data;
        const meta = { statusCode: response.status, statusText: response.statusText };
        yield put(userDeleteSucceeded(payload, meta));
    } catch (ex) {
        yield put(userDeleteFailed(ex));
    }
}

export function* watchDeleteUser() {
    yield takeEvery(DELETE_USER, deleteUser);
}

function* updateUser(action) {
    const userData = action.values;
    const response = yield call(updateUserApi, userData);
    if (response) {
        yield put(userUpdateSucceeded(response.data));
    } else {
        yield put(userUpdateFailed('エラー'));
    }
}

export function* watchUpdateUser() {
    yield takeEvery(UPDATE_USER, updateUser);
}

