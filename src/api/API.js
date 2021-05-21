import axios from 'axios';
import { baseUrl } from './keys';

export default axios.create({
  baseURL: `${baseUrl}`
});