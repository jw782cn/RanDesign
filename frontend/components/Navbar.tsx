import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Chenran's Frontend Design Challenge Logo"
            width={30}
            height={30}
          />
          <span className="text-2xl font-bold text-gray-800">RanDesign</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/day1" className="text-gray-600 hover:text-gray-800">Day 1</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
