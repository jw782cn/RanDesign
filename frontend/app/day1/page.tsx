"use client";

import VillaCard from '@/components/VillaCard';
import ClientTweetCard from "@/components/magicui/client-tweet-card";
import { motion, AnimatePresence } from 'framer-motion';
import { CodeDisplay } from '@/components/magicui/CodeDisplay';
import { useState } from 'react';
import { code } from './day1';
// Create an array containing multiple villa information
const villas = [
  {
    imageSrc: "/image.jpg",
    name: "Villa Banovi",
    pricePerNight: 224,
    rating: 4.5,
    location: "Vinjerac, Croatia"
  },
];

const cardDescription = "This Villa card design combines modern aesthetics with practical functionality. It showcases key information about the villa, such as its name, nightly rate, rating, and location. The card expands on hover, revealing more details and a booking button, creating an interactive and engaging user experience.";

export default function Home() {
  const [activeTab, setActiveTab] = useState('description');

  const villaCardCode = code;

  return (
    <div className="bg-white p-4">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="flex flex-col md:flex-row gap-4 items-start">

          {/* Villa cards section */}
          <div className="w-full w-1/2 h-full">
          <h2 className="text-4xl font-bold mb-8 text-center">Day 1: Card Design</h2>
            <div className="flex flex-col items-start gap-4 h-full items-center justify-center h-full">
              {villas.map((villa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VillaCard
                    imageSrc={villa.imageSrc}
                    name={villa.name}
                    pricePerNight={villa.pricePerNight}
                    rating={villa.rating}
                    location={villa.location}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Description and Code section */}
          <div className="w-full w-1/2 flex flex-col justify-between bg-gray-100 p-4 rounded-lg">
            <div className="mb-4">
              <button
                className={`mr-4 px-4 py-2 rounded transition-colors duration-200 ease-in-out
                  ${activeTab === 'description' 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-white text-black border border-black hover:bg-gray-200'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`px-4 py-2 rounded transition-colors duration-200 ease-in-out
                  ${activeTab === 'code' 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'bg-white text-black border border-black hover:bg-gray-200'}`}
                onClick={() => setActiveTab('code')}
              >
                Code
              </button>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'description' ? (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Card Design Description</h3>
                    <p className="text-gray-700 mb-6">{cardDescription}</p>
                  </div>
                  
                  {/* Inspiration section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Inspiration</h3>
                    <ClientTweetCard id="1830911615669051446" className="shadow-2xl max-w-sm" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-[500px] overflow-auto"
                >
                  <CodeDisplay
                    code={villaCardCode}
                    language="typescript"
                    filename="VillaCard.tsx"
                    lightTheme="github-light"
                    darkTheme="github-dark"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
