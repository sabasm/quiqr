import React from 'react';
import { DashboardSummary } from './components/DashboardSummary';
import { Main } from '../../shared/components/Main';

export default function DashboardPage() {
  return (
    <Main>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <DashboardSummary />
    </Main>
  );
}


