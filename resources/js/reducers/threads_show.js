import {
    THREAD_FETCH_SUCCEEDED,
} from '../actions';

export default (threads = {}, action) => {
    switch (action.type) {
        case THREAD_FETCH_SUCCEEDED:
            return Object.assign({}, threads, {
                threads: action.payload,
            });
        default:
            return threads;
    }
};
