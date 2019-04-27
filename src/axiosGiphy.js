import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://api.giphy.com/v1/gifs'
});

export default instance;