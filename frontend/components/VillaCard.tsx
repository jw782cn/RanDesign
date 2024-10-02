"use client";

import Image from 'next/image';
import { useState } from 'react';
import { IoLocation } from 'react-icons/io5';
interface VillaCardProps {
  imageSrc: string;
  name: string;
  pricePerNight: number;
  rating: number;
  location: string;
}

export default function VillaCard({ imageSrc, name, pricePerNight, rating, location }: VillaCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-80 h-96 rounded-3xl overflow-hidden transition-all duration-300 ease-in-out ${
        isHovered ? 'shadow-2xl translate-y-[-4px]' : 'shadow-lg'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`absolute inset-0 transition-transform duration-300 ease-in-out ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
      >
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className={`absolute bottom-2 left-2 right-2 bg-white bg-opacity-20 backdrop-blur-md rounded-2xl transition-all duration-300 ease-in-out
        ${isHovered ? 'h-36' : 'h-12'}`}>
        <div className="flex justify-between items-center px-4 py-3">
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="text-sm text-white font-bold">${pricePerNight}<span className="font-normal">/night</span></p>
        </div>
        <div className="overflow-hidden h-full transition-all duration-300 ease-in-out" style={{height: isHovered ? 'auto' : '0'}}>
          <div className={`flex items-center text-white px-4 transition-all duration-300 ease-in-out ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <span className="mr-2 text-xs">Rating</span>
            <div className="w-16 h-1 bg-gray-300 rounded-full">
              <div className="h-full bg-white rounded-full" style={{width: `${rating * 20}%`}}></div>
            </div>
          </div>
          <div className='flex flex-col justify-end h-16'>
          <div className={`flex items-center justify-between text-white mt-2 pl-4 transition-all duration-300 ease-in-out ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <div className="flex items-center">
              <IoLocation className="mr-1 text-white" />
              <p className="text-sm">{location}</p>
            </div>
            <div className="pr-2">
              <button 
                className={`text-sm bg-black text-white rounded-xl px-4 py-2 transition-all duration-300 ease-in-out ${
                  isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
              >
                Reserve
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}