import { useState, useCallback } from 'react';
import { ApiService } from '../services/ApiService';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const apiCall = useCallback(async (method: string, url: string, data?: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await ApiService[method](url, data);
      setLoading(false);
      return response;
    } catch (err) {
      setError(err as Error);
      setLoading(false);
      throw err;
    }
  }, []);

  return { apiCall, loading, error };
};


