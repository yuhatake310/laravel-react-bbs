import axios from 'axios';

const ROOT_URL = 'http://reactbbs.test/api/';

export function getBoards() {
    return axios.get(ROOT_URL + 'boards');
}
