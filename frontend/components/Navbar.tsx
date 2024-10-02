import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-800">Chenran's Practice</a>
        <div className="flex items-center space-x-4">
          <a href="/day1" className="text-gray-600 hover:text-gray-800">Day 1</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
