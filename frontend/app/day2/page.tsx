"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CodeDisplay } from '@/components/magicui/CodeDisplay';
import CreateButton from './CreateButton';

const buttonDescription = "This 'Create New' button design combines functionality with a modern, interactive UI. It features a subtle hover effect that lifts the button slightly and increases its shadow, providing visual feedback to the user. When clicked, the button returns to its original position, creating a satisfying press effect. The design includes a plus icon for clear visual communication of its purpose.";

const buttonCode = `
import React from 'react';

const CreateButton: React.FC = () => {
  return (
    <button
      className="
        flex items-center justify-center
        px-4 py-2 rounded-full
        bg-white text-black
        shadow-md hover:shadow-lg
        transform hover:-translate-y-0.5 active:translate-y-0
        transition duration-150 ease-in-out
      "
    >
      <svg
        className="w-5 h-5 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
      Create New
    </button>
  );
};

export default CreateButton;
`;

export default function Day2() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="bg-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          {/* Button showcase section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-8 text-center">Day 2: Interactive Button</h2>
            <div className="flex flex-col items-center justify-center gap-4 h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
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
                    code={buttonCode}
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