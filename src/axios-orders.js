import axios from 'axios';

export default axios.create({
  baseURL: 'https://burger-builder-myy.firebaseio.com/'
});