"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeDisplay } from '@/components/magicui/CodeDisplay';
import CreateButton from './CreateButton';
import { code } from './day2';
import ClientTweetCard from "@/components/magicui/client-tweet-card";

const buttonDescription = `This 'Create New' button combines functionality with modern UI design. Initially compact, it expands on click to reveal a grid of creation options. It features a sleek initial design with hover and click animations, an expanded view with multiple creation options, smooth transitions between states, and a responsive, accessible design. The button enhances user experience by providing quick access to various creation options in a visually appealing, interactive format.`;

export default function Day2() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          {/* Button showcase section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-center">Day 2: Interactive Button</h2>
            <div className="flex items-center justify-center w-full h-96 border border-gray-100 rounded-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <CreateButton />
              </motion.div>
            </div>
          </div>
          
          {/* Description and Code section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between bg-gray-100 p-4 rounded-lg">
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
                    <h3 className="text-2xl font-semibold mb-2">Button Design Description</h3>
                    <p className="text-gray-700 mb-6">{buttonDescription}</p>
                  </div>
                  {/* Inspiration section */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Inspiration</h3>
                    <ClientTweetCard id="1833548581342487020" className="shadow-2xl max-w-sm" />
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
                    code={code}
                    language="typescript"
                    filename="CreateButton.tsx"
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