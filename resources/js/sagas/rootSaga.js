import { fork } from 'redux-saga/effects';
import { watchReadBoards } from './Boards';
import { watchReadThread, watchCreateThread } from './Threads';
import { watchCreateMessage } from './Messages';
import { watchReadUser, watchDeleteUser, watchUpdateUser } from './Users';

export default function* rootSaga() {
    yield fork(watchReadBoards);
    yield fork(watchReadThread);
    yield fork(watchCreateThread);
    yield fork(watchCreateMessage);
    yield fork(watchReadUser);
    yield fork(watchDeleteUser);
    yield fork(watchUpdateUser);
}
