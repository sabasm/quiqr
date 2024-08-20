import React from 'react';

interface MainProps {
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className="container mx-auto px-4 py-8">
      {children}
    </main>
  );
};


