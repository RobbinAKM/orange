import axios from 'axios';

const instance = axios.create({
  baseURL:"http://592acfc37a1b.ngrok.io/"
});

export default instance;
