import { NextSeo } from 'next-seo';

export default function DashboardPage() {
  return (
    <>
      <NextSeo
        title="User Dashboard"
        description="View your account metrics and performance"
      />
      <main>
        <h1>Dashboard</h1>
        <DashboardSummary />
      </main>
    </>
  );
}


