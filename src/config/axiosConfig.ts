import axios from 'axios';
import { environment } from './environment';

export const axiosConfig = axios.create({
  baseURL: environment.apiUrl,
  timeout: 10000,
});

