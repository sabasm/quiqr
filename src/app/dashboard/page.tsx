
import React from 'react';
import { NextSeo } from 'next-seo';
import { DashboardSummary } from './components/DashboardSummary';
import { useDashboard } from './hooks/useDashboard';
import { useAuth } from '../../hooks/useAuth';

export default function DashboardPage() {
  const { user } = useAuth();
  const { dashboard, loading, error } = useDashboard(user?.id || '');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <NextSeo
        title="User Dashboard"
        description="View your account metrics and performance"
      />
      <main>
        <h1>Dashboard</h1>
        {dashboard && <DashboardSummary metrics={[dashboard.metrics]} />}
      </main>
    </>
  );
}


