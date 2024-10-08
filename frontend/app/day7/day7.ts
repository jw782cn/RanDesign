export const code = `
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';

interface AnimatedButtonProps {
  onClick: () => void;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick }) => {
  const [status, setStatus] = useState<'Next' | 'Planning' | 'Coding' | 'Testing' | 'Deploying' | 'Completed'>('Next');
  const [isPlaying, setIsPlaying] = useState(false);

  const statuses = ['Next', 'Planning', 'Coding', 'Testing', 'Deploying', 'Completed'];

  useEffect(() => {
    if (isPlaying && status !== 'Completed') {
      const timer = setTimeout(() => {
        setStatus(currentStatus => {
          const currentIndex = statuses.indexOf(currentStatus);
          return statuses[currentIndex + 1] as typeof status;
        });
      }, 1000); // Change status every 1 second

      return () => clearTimeout(timer);
    } else if (status === 'Completed') {
      setIsPlaying(false);
    }
  }, [status, isPlaying]);

  const handleClick = () => {
    if (status === 'Next') {
      setIsPlaying(true);
      setStatus('Planning');
    } else if (status === 'Completed') {
      setStatus('Next');
    }
    onClick();
  };

  const buttonVariants = {
    Next: { width: '100px', backgroundColor: '#3B82F6' }, // Blue
    Planning: { width: '140px', backgroundColor: '#D1D5DB' }, // Light Gray
    Coding: { width: '120px', backgroundColor: '#D1D5DB' }, // Light Gray
    Testing: { width: '130px', backgroundColor: '#D1D5DB' }, // Light Gray
    Deploying: { width: '150px', backgroundColor: '#F59E0B' }, // Amber
    Completed: { width: '160px', backgroundColor: '#10B981' }, // Green
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const getIcon = () => {
    switch (status) {
      case 'Next': return <FaArrowRight />;
      case 'Planning': return <ImSpinner8 className="animate-spin" />;
      case 'Coding': return <ImSpinner8 className="animate-spin" />;
      case 'Testing': return <ImSpinner8 className="animate-spin" />;
      case 'Deploying': return <ImSpinner8 className="animate-spin" />;
      case 'Completed': return <FaCheck />;
    }
  };

  return (
    <motion.button
      className="mt-10 px-6 py-2 rounded-full text-white font-semibold overflow-hidden h-10 relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      variants={buttonVariants}
      animate={status}
      transition={{ duration: 0.3 }}
    >
      <div className='flex items-center justify-between'>
      <AnimatePresence mode="wait">
        <motion.span
          key={status}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {status}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="absolute inset-y-0 right-4 flex items-center"
        variants={iconVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {getIcon()}
      </motion.span>
      </div>
    </motion.button>
  );
};

export default AnimatedButton;
`