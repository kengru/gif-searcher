import axios from 'axios';

// Creating an instance with baseURL to giphy.
const instance = axios.create({
  baseURL: 'https://api.giphy.com/v1'
});

export default instance;