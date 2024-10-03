export const code = `import React, { useState } from 'react';
import { HiOutlinePlus, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaRegFolder,
    FaRegListAlt,
    FaRegFileAlt,
    FaRegStar,
    FaRegFlag,
    FaRegBell
} from 'react-icons/fa';

const CreateButton: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => setIsExpanded(!isExpanded);

    const options = [
        { icon: FaRegFolder, label: 'Project' },
        { icon: FaRegListAlt, label: 'Task' },
        { icon: FaRegFileAlt, label: 'Note' },
        { icon: FaRegStar, label: 'Goal' },
        { icon: FaRegFlag, label: 'Milestone' },
        { icon: FaRegBell, label: 'Reminder' },
    ];

    return (
        <motion.div
            className={\`
                transition-all duration-200 ease-in-out
                rounded-lg
                text-gray-600
                w-64 h-36
                \${isExpanded ? 'border border-gray-200' : 'border-transparent'}
                relative
            \`}
            initial={false}
            animate={{
                borderColor: isExpanded ? 'rgba(243, 244, 246, 1)' : 'rgba(243, 244, 246, 0)',
            }}
            transition={{ duration: 0.3 }}
        >
            <motion.button
                className={\`
                    flex items-center justify-center
                    \${isExpanded ? 'shadow-none border-none rounded-none mt-2' :
                        'px-4 py-2 border border-gray-100 rounded-full shadow scale-[1.02] transform active:scale-100 active:shadow-none'}
                    transition-all duration-300 ease-in-out
                \`}
                initial={false}
                onClick={toggleExpand}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isExpanded ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                >
                    <HiOutlinePlus className="w-5 h-5 stroke-2 mr-2" />
                </motion.div>
                <motion.span
                    className={\`text-sm font-medium w-20\`}
                    initial={false}
                    transition={{ duration: 0.3 }}
                >
                    Create New
                </motion.span>

            </motion.button>

            {isExpanded && (
                <motion.button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={toggleExpand}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <HiX className="w-5 h-5" />
                </motion.button>
            )}

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        className="mt-4 bg-white rounded-lg shadow-lg overflow-hidden relative"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="grid grid-cols-3 gap-4 border rounded-lg p-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.2 }}
                        >
                            {options.map((option, index) => (
                                <motion.button
                                    key={index}
                                    className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-gray-100"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <option.icon className="w-6 h-6 mb-1 text-gray-600" />
                                    <span className="text-xs text-gray-600">{option.label}</span>
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CreateButton;`;