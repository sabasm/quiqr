import React from 'react';
import Link from 'next/link';
import { useAuth } from '../../hooks/useAuth';

export const Navbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Quiqr
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          {isAuthenticated ? (
            <>
              <li><Link href="/dashboard">Dashboard</Link></li>
              <li><button onClick={() => logout()}>Logout</button></li>
            </>
          ) : (
            <li><Link href="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};


