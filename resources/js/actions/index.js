export const READ_BOARDS = 'READ_BOARDS';
export const BOARD_FETCH_SUCCEEDED = 'BOARD_FETCH_SUCCEEDED';
export const BOARD_FETCH_FAILED = 'BOARD_FETCH_FAILED';

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
