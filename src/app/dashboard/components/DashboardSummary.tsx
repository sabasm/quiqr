import React from 'react';
import { useDashboard } from '../hooks/useDashboard';
import { useAuth } from '../../../hooks/useAuth';

export const DashboardSummary: React.FC = () => {
  const { user } = useAuth();
  const { dashboard, loading, error } = useDashboard(user?.id || '');

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!dashboard) return <p>No dashboard data found.</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold">Summary</h2>
      <p>Total Users: {dashboard.metrics.totalUsers}</p>
      <p>Active Subscriptions: {dashboard.metrics.activeSubscriptions}</p>
      <p>Revenue: ${dashboard.metrics.revenue.toFixed(2)}</p>
    </div>
  );
};


