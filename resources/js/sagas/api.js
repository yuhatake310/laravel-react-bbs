import axios from 'axios';

const ROOT_URL = 'http://reactbbs.test/api';

export function getBoards() {
    return axios.get(ROOT_URL + '/boards');
}

export function getThread(id) {
    return axios.get(ROOT_URL + `/threads/${id}`);
}

export function createThreadApi(values) {
    return axios.post(ROOT_URL + '/threads', { board_id: values.board_id, name: values.name });
}

export function createMessageApi(values) {
    return axios.post(ROOT_URL + '/message', { thread_id: values.thread_id, content: values.content });
}

export function getUser() {
    return axios.get(ROOT_URL + '/user');
}

export function deleteUserApi() {
    let id = '';
    let response = '';
    axios.get(ROOT_URL + '/user').then(function (value) {
        id = value.data.id;
        response = axios.delete(ROOT_URL + `/user/${id}`);
        localStorage.clear();
        location.href = 'http://reactbbs.test/';
    });
    return response;
}

export function updateUserApi(values) {
    let id = '';
    let response = '';
    axios.get(ROOT_URL + '/user').then(function (value) {
        id = value.data.id;
        response = axios.put(ROOT_URL + `/user/${id}`, { email: values.email, name: values.name });;
        location.href = 'http://reactbbs.test/users/show';
    });
    return response;
}
