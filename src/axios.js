import axios from "axios";

const instance = axios.create({
    // baseURL: 'http://127.0.0.1:5001/clone-c8178/us-central1/api'
    baseURL: 'https://us-central1-clone-c8178.cloudfunctions.net/api'
});

export default instance;