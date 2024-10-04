"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MdOutlineAddCircleOutline, MdOutlineNoteAlt, MdOutlinePersonOutline, MdOutlineSettings, MdOutlineSearch, MdClose } from 'react-icons/md';
import { BsGrid3X3GapFill, BsListCheck, BsListUl, BsPeopleFill } from 'react-icons/bs';
import { ArrowRight, ArrowUp, ArrowDown, Command as LucideCommand } from 'lucide-react';

const tabs = [
    { id: 'All', icon: BsGrid3X3GapFill },
    { id: 'Task', icon: BsListCheck },
    { id: 'List', icon: BsListUl },
    { id: 'Users', icon: BsPeopleFill },
];

const commands = [
    { icon: MdOutlineAddCircleOutline, name: 'Create Task', category: 'Partners', shortcuts: ['⌘', 'R'] },
    { icon: MdOutlineNoteAlt, name: 'Note Template', category: 'In Commands', shortcuts: ['⌘', '↩'] },
    { icon: MdOutlinePersonOutline, name: 'Add Person', category: 'Partners', shortcuts: ['⌘', 'T'] },
    { icon: MdOutlineSettings, name: 'Manage attributes', category: 'In Commands', shortcuts: ['⌘', 'H'] },
    { icon: BsListUl, name: 'Create List', category: 'Organization', shortcuts: ['⌘', 'L'] },
    { icon: MdOutlineSearch, name: 'Advanced Search', category: 'Tools', shortcuts: ['⌘', 'F'] },
    { icon: BsPeopleFill, name: 'Team Management', category: 'Partners', shortcuts: ['⌘', 'M'] },
    { icon: LucideCommand, name: 'Keyboard Shortcuts', category: 'Help', shortcuts: ['⌘', '/'] },
];

const Command = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeTab, setActiveTab] = useState('All');

    const filteredCommands = commands.filter(command =>
        command.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex items-center justify-center">
            <div className="w-[500px] text-sm bg-white rounded-lg shadow-xl border border-gray-200 rounded-xl overflow-hidden">
                <div className="py-2 px-4 relative">
                    <MdOutlineSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Tap to start search..."
                        className="w-full pl-10 pr-10 py-2 rounded-md focus:outline-none"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                        <button
                            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            onClick={() => setSearchTerm('')}
                        >
                            <MdClose size={20} />
                        </button>
                </div>
                <div className='border-b border-gray-200'></div>
                <div className="flex border-b border-gray-200 relative overflow-hidden">
                    {tabs.map((tab, index) => (
                        <button
                            key={tab.id}
                            className={`flex items-center justify-center w-[82px] px-3 py-2 text-xs font-medium ${
                                activeTab === tab.id
                                    ? 'text-blue-600'
                                    : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <tab.icon className="mr-1" size={16} />
                            {tab.id}
                        </button>
                    ))}
                    {/* Rounded rectangle highlight for active tab */}
                    <div
                        className="absolute bottom-0 h-1 bg-blue-600 transition-all duration-300"
                        style={{
                            left: `${tabs.findIndex(tab => tab.id === activeTab) * 82}px`,
                            width: '60px',
                            transform: 'translateY(40%) translateX(12px)',
                            borderRadius: '6px',
                        }}
                    />
                </div>
                <div className="max-h-64 overflow-y-auto border-b border-gray-200">
                    <AnimatePresence>
                        {filteredCommands.map((command, index) => (
                            <motion.div
                                key={command.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                className="flex items-center justify-between px-4 py-3 cursor-pointer"
                                whileHover={{
                                    backgroundColor: "rgba(0, 0, 0, 0.03)", // Changed from blue to a light gray
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <div className="flex items-center">
                                    <motion.span
                                        className="shadow-sm w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md mr-3"
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <command.icon size={16} className="text-gray-600" />
                                    </motion.span>
                                    <div>
                                        <div className="font-medium">{command.name}</div>
                                        <div className="text-sm text-gray-500">{command.category}</div>
                                    </div>
                                </div>
                                {command.shortcuts && (
                                    <div className="flex">
                                        {command.shortcuts.map((shortcut, idx) => (
                                            <span key={idx} className="px-[5px] py-[1px] bg-gray-100 rounded text-xs font-bold text-gray-400 mr-1">
                                                {shortcut}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <div className="flex justify-between border-b border-gray-200">
                        <div className="flex-1 border-r border-gray-200 p-4 ">
                            <div className="flex items-center text-gray-500 mb-1">
                                <span className="mr-2">☀️</span>
                                <span>Good Morning</span>
                                <span className="ml-auto"><ArrowRight size={16} /></span>
                            </div>
                            <div className="text-md font-semibold text-gray-700">66 F and Sunny</div>
                        </div>
                        <div className="flex-1 ml-4 p-4">
                            <div className="flex items-center text-gray-500 mb-1">
                                <span className="mr-2">📅</span>
                                <span>Next Agenda</span>
                                <span className="ml-auto"><ArrowRight size={16} /></span>
                            </div>
                            <div className="text-md font-semibold text-gray-700">Weekly Team Catchup</div>
                        </div>
                    </div>
                <div className="flex justify-between items-center px-4 py-3 bg-gray-100/50 text-sm text-gray-400">
                    <div className="flex items-center">
                        <ArrowUp size={20} className="p-1 mr-1 border border-gray-200 rounded-md bg-white" />
                        <ArrowDown size={20} className="p-1 mr-2 border border-gray-200 rounded-md bg-white" />
                        <span>to navigate</span>
                    </div>
                    <div className="flex items-center">
                        <LucideCommand size={20} className="p-1 mr-2 border border-gray-200 rounded-md bg-white" />
                        <span>to select</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Command;