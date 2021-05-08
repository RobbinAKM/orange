import axios from 'axios';

const instance = axios.create({
  baseURL:"http://4d86b7ed49dd.ngrok.io/"
});

export default instance;
