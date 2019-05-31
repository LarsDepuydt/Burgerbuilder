import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactmyburger-larsd.firebaseio.com/'
});

export default instance;