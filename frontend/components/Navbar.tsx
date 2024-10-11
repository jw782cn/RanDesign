"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    const days = [
        { id: 1, name: 'Day 1' },
        { id: 2, name: 'Day 2' },
        { id: 3, name: 'Day 3' },
        { id: 4, name: 'Day 4' },
        { id: 5, name: 'Day 5' },
        { id: 6, name: 'Day 6' },
        { id: 7, name: 'Day 7' },
        { id: 8, name: 'Day 8' },
        { id: 9, name: 'Day 9' },
        { id: 10, name: 'Day 10' },
    ];

    const currentDay = days.find(day => pathname === `/day${day.id}`) || { id: 0, name: 'Home' };

    return (
        <nav className="bg-white shadow-md border-b border-gray-200">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo.svg"
                        alt="Chenran's Frontend Design Challenge Logo"
                        width={26}
                        height={26}
                    />
                    <span className="text-xl text-gray-800 font-semibold">RanDesign</span>
                </Link>
                <div className="relative">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="px-2.5 py-1.5 rounded-md bg-gray-100 text-gray-800 text-sm flex items-center border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                    >
                        {currentDay.name}
                        <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div className="absolute right-0 mt-1 py-1 w-44 bg-white rounded-md shadow-sm z-20 border border-gray-200">
                            {days.map((day) => (
                                <Link
                                    key={day.id}
                                    href={`/day${day.id}`}
                                    className={`
                                        block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50
                                        ${pathname === `/day${day.id}` ? 'bg-gray-100' : ''}
                                    `}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {day.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
