import axios, { AxiosInstance } from 'axios';
import { axiosConfig } from '../config/axiosConfig';

export class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create(axiosConfig);
  }

  async get<T>(url: string, params = {}): Promise<T> {
    const response = await this.api.get<T>(url, { params });
    return response.data;
  }

  async post<T>(url: string, data = {}): Promise<T> {
    const response = await this.api.post<T>(url, data);
    return response.data;
  }

  // Add more methods as needed (put, delete, etc.)
}


