"use client";

import VillaCard from '@/components/VillaCard';
import ClientTweetCard from "@/components/magicui/client-tweet-card";
import { motion } from 'framer-motion';
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
  return (
    <div className="bg-white p-4">
      <div className="max-w-7xl mx-auto h-full">
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
        <h2 className="text-4xl font-bold mb-8 text-start">Day 1: Card Design</h2>
          {/* Villa cards section */}
          <div className="w-full md:w-1/2 h-full">
            <div className="flex flex-col items-start gap-4 h-full">
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
          
          {/* Description section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between bg-gray-100 p-4 rounded-lg">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Card Design Description</h3>
              <p className="text-gray-700 mb-6">{cardDescription}</p>
            </div>
            
            {/* Inspiration section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">Inspiration</h3>
              <ClientTweetCard id="1830911615669051446" className="shadow-2xl max-w-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
