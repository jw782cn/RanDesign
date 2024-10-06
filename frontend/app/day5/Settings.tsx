"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SettingsProps {
  // You can add props here if needed
}

interface CustomSliderProps {
  id: string;
  value: number;
  onChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({ id, value, onChange }) => {
  return (
    <div className="flex items-center w-full">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-10 mr-2 p-1 text-sm border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent text-orange-800"
        min="0"
        max="100"
        style={{
          WebkitAppearance: 'none',
          MozAppearance: 'textfield',
          appearance: 'textfield'
        }}
      />
      <style jsx>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
      <div className="relative flex-grow h-6">
        <input
          type="range"
          id={id}
          min="0"
          max="100"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute w-full h-full opacity-0 cursor-pointer z-10"
        />
        <div className="absolute top-1/2 left-0 w-full h-6 bg-orange-200 rounded-md transform -translate-y-1/2">
          <div
            className="absolute top-0 left-0 h-full bg-orange-500 rounded-md"
            style={{ width: `${value}%` }}
          ></div>
        </div>
        <div
          className="absolute top-1/2 left-0 w-8 h-8 bg-white border-2 border-orange-500 rounded-sm shadow transform -translate-y-1/2"
          style={{ left: `calc(${value}% - 16px)` }}
        ></div>
      </div>
    </div>
  );
};

const Settings: React.FC<SettingsProps> = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [sliderValues, setSliderValues] = useState({
    vertical: 50,
    horizontal: 50,
    upscale: 50
  });
  const [activeTab, setActiveTab] = useState('Dimensions'); // 新增状态

  const sliders = [
    { id: 'vertical', label: 'Vertical' },
    { id: 'horizontal', label: 'Horizontal' },
    { id: 'upscale', label: 'Upscale' }
  ];

  const handleSliderChange = (id: string, value: number) => {
    setSliderValues(prev => ({ ...prev, [id]: value }));
  };

  const handleApplyChanges = () => {
    console.log('Applied changes:', sliderValues);
    setIsExpanded(false);
  };

  return (
    <div className='w-full h-1/2 flex items-center justify-center'>
      <motion.div
        layout
        className='rounded-lg shadow-md border-2 border-orange-200 overflow-hidden bg-orange-50'
        initial={false}
        animate={{
          width: isExpanded ? '30rem' : '9rem',
          height: isExpanded ? '16rem' : '3rem',
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          duration: 0.3
        }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {isExpanded ? (
            <motion.div
              key="expanded"
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.3
                }
              }}
            >
              {/* Expanded content */}
              <div className="h-full overflow-y-auto text-orange-800">
                <div className="border-orange-200">
                  <div className='flex items-center justify-between border-b-2 border-orange-200'>
                    <div className='flex items-center justify-between px-4 py-2 space-x-2'>
                      {['Dimensions', 'Style', 'Export'].map((tab) => (
                        <button
                          key={tab}
                          className={`transition-colors rounded-lg px-3 py-1 outline-none ${
                            activeTab === tab
                              ? 'bg-orange-200 text-orange-900 hover:bg-orange-300'
                              : 'bg-transparent text-orange-700 hover:bg-orange-100'
                          }`}
                          onClick={() => setActiveTab(tab)}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ filter: "blur(10px)" }}
                  animate={{ filter: "blur(0px)" }}
                  transition={{ duration: 0.3 }}
                  className='p-4 flex flex-col'
                >
                  <div className="space-y-4">
                    {sliders.map(slider => (
                      <div key={slider.id} className='flex items-center justify-between'>
                        <label htmlFor={slider.id} className="block mb-1">{slider.label}</label>
                        <div className='w-2/3 h-6 px-5'>
                          <CustomSlider
                            id={slider.id}
                            value={sliderValues[slider.id as keyof typeof sliderValues]}
                            onChange={(value) => handleSliderChange(slider.id, value)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='flex items-center justify-end'>
                  <button
                    onClick={handleApplyChanges}
                    className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                  >
                    Apply Changes
                  </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              className='flex items-center justify-center w-full h-full'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15
              }}
            >
              <button
                onClick={() => setIsExpanded(true)}
                className="text-orange-500 hover:text-orange-300 px-4 py-2 rounded transition-colors"
              >
                Add Style
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Settings;