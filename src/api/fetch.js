import axios from 'axios';

const instance = axios.create({
  baseURL:"http://b66c96ddd816.ngrok.io/"
});

export default instance;
