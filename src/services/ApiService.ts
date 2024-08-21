import axios, { AxiosInstance } from 'axios';
import { axiosConfig } from '../config/axiosConfig';

export class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create(axiosConfig);
  }

  get<T>(endpoint: string) {
    return this.axiosInstance.get<T>(endpoint);
  }

  post<T>(endpoint: string, data: any) {
    return this.axiosInstance.post<T>(endpoint, data);
  }

  put<T>(endpoint: string, data: any) {
    return this.axiosInstance.put<T>(endpoint, data);
  }

  delete<T>(endpoint: string) {
    return this.axiosInstance.delete<T>(endpoint);
  }
}


