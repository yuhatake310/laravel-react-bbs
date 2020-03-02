import { fork } from 'redux-saga/effects';
import { watchReadBoards } from './Boards';

export default function* rootSaga() {
    yield fork(watchReadBoards);
}
