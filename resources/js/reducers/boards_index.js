import {
    BOARD_FETCH_SUCCEEDED,
} from '../actions';

export default (boards = {}, action) => {
    switch (action.type) {
        case BOARD_FETCH_SUCCEEDED:
            return Object.assign({}, boards, {
                boards: action.payload,
            });
        default:
            return boards;
    }
};
