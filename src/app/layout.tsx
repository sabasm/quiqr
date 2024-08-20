import React from 'react';
import { Metadata } from 'next';
import { MasterProvider } from '../providers/MasterProvider';
import { Navbar } from '../shared/components/Navbar';
import { Footer } from '../shared/components/Footer';

export const metadata: Metadata = {
  title: 'Quiqr App',
  description: 'A Next.js application using Fractal Modular Compositional Structure',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MasterProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </MasterProvider>
      </body>
    </html>
  );
}


