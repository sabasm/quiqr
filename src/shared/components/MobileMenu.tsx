import React, { useState } from 'react';
import Link from 'next/link';

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500">
        Menu
      </button>
      {isOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md">
          <ul>
            {links.map((link, index) => (
              <li key={index} className="border-b">
                <Link href={link.href} className="block px-4 py-2">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};


