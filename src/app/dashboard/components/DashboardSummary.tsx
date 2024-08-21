import React, { useMemo } from 'react';

export const DashboardSummary: React.FC<DashboardSummaryProps> = ({ metrics }) => {
  const totalRevenue = useMemo(() => {
    return metrics.reduce((sum, metric) => sum + metric.revenue, 0);
  }, [metrics]);

  return (
    <div>
      <h2>Dashboard Summary</h2>
      <p>Total Revenue: ${totalRevenue}</p>
      {/* Other summary information */}
    </div>
  );
};


