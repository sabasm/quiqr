import { useState, useEffect } from 'react';
import { DashboardService } from '../services/DashboardService';
import { Dashboard } from '../types/Dashboard';

export const useDashboard = (userId: string) => {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await DashboardService.getDashboard(userId);
        setDashboard(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, [userId]);

  return { dashboard, loading, error };
};


