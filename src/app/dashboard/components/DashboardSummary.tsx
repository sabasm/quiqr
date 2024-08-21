
import React, { useMemo } from 'react';
import { DashboardMetrics } from '../types/Dashboard';

interface DashboardSummaryProps {
  metrics: DashboardMetrics[];
}

export const DashboardSummary: React.FC<DashboardSummaryProps> = ({ metrics }) => {
  const totalRevenue = useMemo(() => {
    return metrics.reduce((sum, metric) => sum + metric.revenue, 0);
  }, [metrics]);

  return (
    <div>
      <h2>Dashboard Summary</h2>
      <p>Total Revenue: ${totalRevenue}</p>
      <p>Total Users: {metrics[0].totalUsers}</p>
      <p>Active Subscriptions: {metrics[0].activeSubscriptions}</p>
    </div>
  );
};


