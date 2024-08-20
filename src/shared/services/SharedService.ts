import axios from 'axios';

export class SharedService {
  private static instance: SharedService;
  private constructor() {}

  public static getInstance(): SharedService {
    if (!SharedService.instance) {
      SharedService.instance = new SharedService();
    }
    return SharedService.instance;
  }

  public async get<T>(url: string): Promise<T> {
    const response = await axios.get<T>(url);
    return response.data;
  }

  public async post<T>(url: string, data: any): Promise<T> {
    const response = await axios.post<T>(url, data);
    return response.data;
  }

  // Add more methods as needed
}


