import React from 'react';
import Link from 'next/link';
import { MobileMenu } from './MobileMenu';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Your Logo
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="text-gray-600 hover:text-gray-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <MobileMenu links={links} />
      </div>
    </header>
  );
};


