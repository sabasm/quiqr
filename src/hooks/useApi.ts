import { ApiService } from '../services/ApiService';

const useApi = () => {
  const apiService = new ApiService();

  return {
    get: (endpoint: string) => apiService.get(endpoint),
  };
};

export default useApi;


