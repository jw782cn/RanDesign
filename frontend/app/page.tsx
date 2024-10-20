'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import ClientTweetCard from "@/components/magicui/client-tweet-card";
import VillaCard from '@/components/VillaCard';
import CreateButton from './day2/CreateButton';
import Command from './day3/Command';
import Upload from './day4/Upload';
import { time } from 'console';
import Transcribe from './day6/Transcribe';
import Settings from './day5/Settings';
import AnimatedButton from './day7/AnimatedButton';
import TagInput from './day8/TagInput';
import Sidebar from './day9/Sidebar';
import TemperatureSlider from './day10/TemperatureSlider';
import VoiceChat from './day11/VoiceChat';
import Tools from './day12/Tools';
import TryForFreeButton from './day13/TryForFreeButton';


const projectDescription = "Hi 👋 I'm Chenran, and this is my frontend design challenge project. I'm embarking on a 50-day journey, with a new design challenge every day, showcasing different UI components and layout techniques. Through this project, I aim to improve my frontend skills while providing inspiration and reference for other learners.";

const featuredDays = [
  {
    day: 1,
    title: "Card Design",
    description: "Explore modern card design, blending aesthetics and functionality.",
  },
  {
    day: 2,
    title: "Interactive Button",
    description: "Create an engaging, animated button with hover effects.",
  },
  {
    day: 3,
    title: "Command Menu",
    description: "Create an interactive command menu with search functionality.",
  },
  {
    day: 4,
    title: "File Upload",
    description: "Create an interactive file upload component with a progress bar.",
  },
  {
    day: 5,
    title: "Settings UI",
    description: "An interactive settings component that allows users to adjust dimensions using sliders.",
  },
  {
    day: 6,
    title: "Transcribe",
    description: "A dynamic speech-to-text transcription component that simulates real-time voice recognition.",
  },
  {
    day: 7,
    title: "Animated Button",
    description: "An interactive animated button component that transitions from 'Doing' to 'Completed' state.",
  },
  {
    day: 8,
    title: "Tag Input",
    description: "An interactive tag input component that allows users to add and remove tags.",
  },
  {
    day: 9,
    title: "Interactive Dashboard",
    description: "An interactive dashboard layout featuring a responsive sidebar and a main content area.",
  },
  {
    day: 10,
    title: "Temperature Slider",
    description: "An interactive temperature slider component that allows users to adjust temperature within a given range.",
  },
  {
    day: 11,
    title: "Voice Chat",
    description: "An interactive voice chat component that allows users to chat with the AI.",
  },
  {
    day: 12,
    title: "Tool Bar",
    description: "An interactive toolbar component that displays selected items and provides quick actions. This component showcases the use of tooltips, icons, and responsive design to create a user-friendly interface for managing selected items efficiently.",
  },
  {
    day: 13,
    title: "Try for Free Button",
    description: "A 'Try for Free' button with an animated hover effect. This component demonstrates the use of Framer Motion for smooth animations, React Icons for visual elements, and responsive design. The button expands and rotates its arrow icon on hover, providing an engaging user interaction.",
  }
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
          className="text-3xl font-semibold mb-2 text-center text-gray-600"
        >
          Chenran's Frontend Design Challenge
        </motion.h2>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center items-center mb-8"
        >
          <a
            href="https://github.com/jw782cn/RanDesign"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <i className="fab fa-github text-xl mr-2"></i>
            <span className="font-semibold">GitHub</span>
          </a>
        </motion.div>

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
        {/* Latest challenges section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Latest Challenges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day 13 Challenge */}
            <div className='col-span-2'>
              <h4 className="text-xl font-semibold mb-2">Day 13: Try for Free Button</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg h-64">
                <div className='h-64 flex items-center'><TryForFreeButton /></div>
              </div>
              <div className="mt-4 text-center">
                <Link href="/day13" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 13 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 12 Challenge */}
            <div className='col-span-2'>
              <h4 className="text-xl font-semibold mb-2">Day 12: Tool Bar</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg h-64">
                <div className='h-64 flex items-center'><Tools /></div>
              </div>
              <div className="mt-4 text-center">
                <Link href="/day12" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 12 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 11 Challenge */}
            <div className='col-span-1'>
              <h4 className="text-xl font-semibold mb-2">Day 11: Voice Chat</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg h-64">
                <div className='h-64 flex items-center'><VoiceChat /></div>
              </div>
              <div className="mt-4 text-center">
                <Link href="/day11" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 11 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 10 Challenge */}
            <div className='col-span-1'>
              <h4 className="text-xl font-semibold mb-2">Day 10: Temperature Slider</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg h-64">
                <TemperatureSlider min={0} max={100} step={1} />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day10" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 10 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 9 Challenge */}
            <div className='col-span-2'>
              <h4 className="text-xl font-semibold mb-2">Day 9: Interactive Dashboard</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg h-[40rem]">
                <Sidebar />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day9" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 9 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 8 Challenge */}
            <div className='col-span-2'>
              <h4 className="text-xl font-semibold mb-2">Day 8: Tag Input</h4>
              <div className="flex justify-center items-start p-4 border border-gray-100 rounded-lg h-96">
                <TagInput />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day8" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 8 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Day 6 Challenge */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Day 6: Transcribe</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg h-72">
                <Transcribe />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day6" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 6 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 7 */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Day 7: Animated Button</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg h-72">
                <AnimatedButton onClick={() => console.log('Button clicked')} />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day7" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 7 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 5 Challenge */}

            <div className="col-span-2">
              <h4 className="text-xl font-semibold mb-2">Day 5: Settings UI</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg h-72">
                <Settings />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day5" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 5 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 4 Challenge */}
            <div className="col-span-2">
              <h4 className="text-xl font-semibold mb-2">Day 4: File Upload</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg">
                <Upload />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day4" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 4 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 3 Challenge */}
            <div className="col-span-2 h-[36rem] mb-4">
              <h4 className="text-xl font-semibold mb-2">Day 3: Command Menu</h4>
              <div className="flex justify-center items-center p-4 border border-gray-100 rounded-lg">
                <Command />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day3" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 3 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
            {/* Day 1 Challenge */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Day 1: Card Design</h4>
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
                <Link href="/day1" className="inline-bloc  h-96 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 1 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>

            {/* Day 2 Challenge */}
            <div>
              <h4 className="text-xl font-semibold mb-2">Day 2: Interactive Button</h4>
              <div className="flex justify-center items-center h-96 border border-gray-100 rounded-lg">
                <CreateButton />
              </div>
              <div className="mt-4 text-center">
                <Link href="/day2" className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out transform hover:scale-105">
                  View Day 2 <span className="ml-2">→</span>
                </Link>
              </div>
            </div>


          </div>
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



        {/* Inspiration section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">Project Inspiration</h3>
          <p className="text-gray-700 mb-4">
            This project draws inspiration from the incredible work of a Twitter user who consistently shares their progress in mastering Tailwind CSS and Framer Motion for dynamic design effects. Their commitment to #BuildInPublic has been truly inspiring, motivating me to embark on this journey of daily UI challenges.
          </p>
          <ClientTweetCard id="1831037740974293117" className="shadow-2xl max-w-sm mx-auto mb-6" />
          <p className="text-gray-600 text-sm italic mt-4">
            Follow along with their journey and get inspired to create your own amazing designs!
          </p>
        </motion.div>
        {/* Join challenge section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg mb-12"
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

        {/* Updated Footer section */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center py-8 border-t border-gray-200"
        >
          <p className="text-xl font-semibold mb-2">Practice Makes Perfect</p>
          <p className="text-gray-600 mb-4">
            "The only way to do great work is to love what you do. Keep pushing forward, and success will follow."
          </p>
          <p className="text-sm text-gray-500 italic">
            - Chenran
          </p>
        </motion.footer>
      </div>
    </div>
  );
}