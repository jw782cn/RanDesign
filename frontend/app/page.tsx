'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import ClientTweetCard from "@/components/magicui/client-tweet-card";
import VillaCard from '@/components/VillaCard';

const projectDescription = "Hi 👋 I'm Chenran, and this is my frontend design challenge project. Every day there's a new design challenge, showcasing different UI components and layout techniques. Through this project, I aim to improve my frontend skills while providing inspiration and reference for other learners.";

const featuredDays = [
  {
    day: 1,
    title: "Card Design",
    description: "Explore modern card design, blending aesthetics and functionality.",
  },
  // More days can be added as needed
];

// Add this new villa object
const latestVilla = {
  imageSrc: "/image.jpg",
  name: "Villa Banovi",
  pricePerNight: 224,
  rating: 4.5,
  location: "Vinjerac, Croatia"
};

export default function Home() {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 text-center"
        >
          RanDesign
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl font-semibold mb-8 text-center text-gray-600"
        >
          Chenran's Frontend Design Challenge
        </motion.h2>
        
        {/* Project description section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
          <p className="text-gray-700 mb-6">{projectDescription}</p>
        </motion.div>
        
        {/* Featured days section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Daily Challenges</h3>
          <div className="space-y-4">
            {featuredDays.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link href={`/day${day.day}`} className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                  <h4 className="text-xl font-semibold">Day {day.day}: {day.title}</h4>
                  <p className="text-gray-600">{day.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Latest challenge section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Latest Challenge: Day 1 - Card Design</h3>
          <div className="flex justify-center">
            <VillaCard
              imageSrc={latestVilla.imageSrc}
              name={latestVilla.name}
              pricePerNight={latestVilla.pricePerNight}
              rating={latestVilla.rating}
              location={latestVilla.location}
            />
          </div>
          <div className="mt-4 text-center">
            <Link href="/day1" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
              View Details <span className="ml-2">→</span>
            </Link>
          </div>
        </motion.div>
        
        {/* Inspiration section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Project Inspiration</h3>
          <ClientTweetCard id="1831037740974293117" className="shadow-2xl max-w-sm mx-auto mb-6" />
        </motion.div>
        
        {/* Join challenge section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">About</h3>
          <p className="text-gray-700 mb-4">Like this project? Give it a star on GitHub or follow the project progress on Twitter!</p>
          <div className="flex space-x-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/jw782cn/animation-practice" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://x.com/Nin19536" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Twitter
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}