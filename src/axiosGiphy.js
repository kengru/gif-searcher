import axios from 'axios';

// Creating an instance with baseURL to giphy.
const instance = axios.create({
  baseURL: 'http://api.giphy.com/v1'
});

export default instance;