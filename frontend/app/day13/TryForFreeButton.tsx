import React from 'react';
import { motion } from 'framer-motion';
import { MdArrowForward } from 'react-icons/md';

const TryForFreeButton: React.FC = () => {
  return (
    <motion.button
      className="h-12 w-44 group relative flex items-center justify-between bg-blue-600 text-white text-lg font-semibold rounded-full overflow-hidden"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="flex items-center justify-center whitespace-nowrap flex-grow"
        transition={{ duration: 0.3 }}
        variants={{
          initial: { width: 'auto', opacity: 1, marginLeft: '12px' },
          hover: { width: 0, opacity: 0, marginLeft: '0' }
        }}
      >
        Try for Free
      </motion.div>
      <motion.div
        layout
        className="bg-blue-400 rounded-full flex items-center justify-center m-2"
        transition={{ duration: 0.3 }}
        variants={{
          initial: { width: '36px', height: '36px' },
          hover: { width: '100%' }
        }}
      >
        <motion.div
          variants={{
            initial: { rotate: 0 },
            hover: { rotate: -45 }
          }}
          transition={{ duration: 0.3 }}
        >
          <MdArrowForward size={20} />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default TryForFreeButton;
