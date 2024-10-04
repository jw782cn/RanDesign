import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const days = [
        { id: 1, name: 'Day 1' },
        { id: 2, name: 'Day 2' },
        { id: 3, name: 'Day 3' },
    ];
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
          {days.map((day) => (
            <Link key={day.id} href={`/day${day.id}`} className="text-gray-600 hover:text-gray-800">
              {day.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
