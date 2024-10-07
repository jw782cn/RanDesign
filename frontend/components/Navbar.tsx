"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
    const pathname = usePathname()
    const days = [
        { id: 1, name: 'Day 1' },
        { id: 2, name: 'Day 2' },
        { id: 3, name: 'Day 3' },
        { id: 4, name: 'Day 4' },
        { id: 5, name: 'Day 5' },
        { id: 6, name: 'Day 6' },
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
                        <Link 
                            key={day.id} 
                            href={`/day${day.id}`} 
                            className={`
                                px-3 py-2 rounded-md transition-all duration-300 ease-in-out
                                ${pathname === `/day${day.id}` 
                                    ? 'bg-gray-200 text-gray-800 font-semibold' 
                                    : 'hover:bg-gray-100'
                                }
                            `}
                        >
                            <span className={`
                                ${pathname === `/day${day.id}` 
                                    ? 'text-gray-800 font-semibold' 
                                    : 'text-gray-600'
                                }
                            `}>
                                {day.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
