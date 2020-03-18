import {
    USER_FETCH_SUCCEEDED,
} from '../actions';

export default (users = {}, action) => {
    switch (action.type) {
        case USER_FETCH_SUCCEEDED:
            return Object.assign({}, users, {
                users: action.payload,
            });
        default:
            return users;
    }
};
