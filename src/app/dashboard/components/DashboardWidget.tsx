import React from 'react';

interface DashboardWidgetProps {
  title: string;
  value: number | string;
}

export const DashboardWidget: React.FC<DashboardWidgetProps> = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};


