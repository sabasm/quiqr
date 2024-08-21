import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users Management',
  description: 'Manage users in the Quiqr application',
};

export default function UsersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="users-layout">
      {children}
    </div>
  );
}


