export const READ_BOARDS = 'READ_BOARDS';
export const BOARD_FETCH_SUCCEEDED = 'BOARD_FETCH_SUCCEEDED';
export const BOARD_FETCH_FAILED = 'BOARD_FETCH_FAILED';
export const READ_THREAD = 'READ_THREAD';
export const THREAD_FETCH_SUCCEEDED = 'THREAD_FETCH_SUCCEEDED';
export const THREAD_FETCH_FAILED = 'THREAD_FETCH_FAILED';
export const CREATE_THREAD = 'CREATE_THREAD';
export const THREAD_CREATE_SUCCEEDED = 'THREAD_CREATE_SUCCEEDED';
export const THREAD_CREATE_FAILED = 'THREAD_CREATE_FAILED';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const MESSAGE_CREATE_SUCCEEDED = 'MESSAGE_CREATE_SUCCEEDED';
export const MESSAGE_CREATE_FAILED = 'MESSAGE_CREATE_FAILED';
export const READ_USER = 'READ_USER';
export const USER_FETCH_SUCCEEDED = 'USER_FETCH_SUCCEEDED';
export const USER_FETCH_FAILED = 'USER_FETCH_FAILED';
export const DELETE_USER = 'DELETE_USER';
export const USER_DELETE_SUCCEEDED = 'USER_DELETE_SUCCEEDED';
export const USER_DELETE_FAILED = 'USER_DELETE_FAILED';
export const UPDATE_USER = 'UPDATE_USER';
export const USER_UPDATE_SUCCEEDED = 'USER_UPDATE_SUCCEEDED';
export const USER_UPDATE_FAILED = 'USER_UPDATE_FAILED';

export const readBoards = () => ({
    type: READ_BOARDS,
});

export const boardFetchSucceeded = (payload, meta) => ({
    type: BOARD_FETCH_SUCCEEDED,
    payload,
    meta,
});

export const boardFetchFailed = (payload) => ({
    type: BOARD_FETCH_FAILED,
    error: true,
    payload,
});

export const getThread = (id) => ({
    type: READ_THREAD,
    id,
});

export const threadFetchSucceeded = (payload, meta) => ({
    type: THREAD_FETCH_SUCCEEDED,
    payload,
    meta,
});

export const threadFetchFailed = (payload) => ({
    type: THREAD_FETCH_FAILED,
    error: true,
    payload,
});

export const createThread = (values) => ({
    type: CREATE_THREAD,
    values,
});

export const threadCreateSucceeded = (payload, meta) => ({
    type: THREAD_CREATE_SUCCEEDED,
    payload,
    meta,
});

export const threadCreateFailed = (payload) => ({
    type: THREAD_CREATE_FAILED,
    error: true,
    payload,
});

export const createMessage = (values) => ({
    type: CREATE_MESSAGE,
    values,
});

export const messageCreateSucceeded = (payload, meta) => ({
    type: MESSAGE_CREATE_SUCCEEDED,
    payload,
    meta,
});

export const messageCreateFailed = (payload) => ({
    type: MESSAGE_CREATE_FAILED,
    error: true,
    payload,
});

export const getUser = () => ({
    type: READ_USER,
});

export const userFetchSucceeded = (payload, meta) => ({
    type: USER_FETCH_SUCCEEDED,
    payload,
    meta,
});

export const userFetchFailed = (payload) => ({
    type: USER_FETCH_FAILED,
    error: true,
    payload,
});

export const deleteUser = () => ({
    type: DELETE_USER,
});

export const userDeleteSucceeded = (payload, meta) => ({
    type: USER_DELETE_SUCCEEDED,
    payload,
    meta,
});

export const userDeleteFailed = (payload) => ({
    type: USER_DELETE_FAILED,
    error: true,
    payload,
});

export const putUser = (values) => ({
    type: UPDATE_USER,
    values,
});

export const userUpdateSucceeded = (payload, meta) => ({
    type: USER_UPDATE_SUCCEEDED,
    payload,
    meta,
});

export const userUpdateFailed = (payload) => ({
    type: USER_UPDATE_FAILED,
    error: true,
    payload,
});
