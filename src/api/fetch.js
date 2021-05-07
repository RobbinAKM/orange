import axios from 'axios';

const instance = axios.create({
  baseURL:"http://008f48eca638.ngrok.io/"
});

export default instance;
