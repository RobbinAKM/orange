import axios from 'axios';

const instance = axios.create({
  baseURL:"http://89fff152ece4.ngrok.io/"
});

export default instance;
