export const code = `
"use client";

import React, { useState } from 'react';
import { FiEdit, FiClock, FiMove, FiArchive } from 'react-icons/fi';
import { IoMdCheckmark } from 'react-icons/io';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface Tool {
    id: number;
    text: string;
    completed: boolean;
}

const Tools: React.FC = () => {
    const [tools, setTools] = useState<Tool[]>([]);
    const [input, setInput] = useState('');
    const [showTooltip, setShowTooltip] = useState(false);

    // Add new functions
    const addTool = () => {
        if (input.trim()) {
            setTools([...tools, { id: Date.now(), text: input.trim(), completed: false }]);
            setInput('');
        }
    };

    const toggleTool = (id: number) => {
        setTools(tools.map(tool =>
            tool.id === id ? { ...tool, completed: !tool.completed } : tool
        ));
    };

    const clearCompletedTools = () => {
        setTools(tools.filter(tool => !tool.completed));
    };

    const selectedCount = 3;

    const buttonConfig = [
        { icon: FiEdit, tooltip: "Mark as unread", shortcut: "U" },
        { icon: FiClock, tooltip: "Snooze", shortcut: "S" },
        { icon: FiMove, tooltip: "Move to...", shortcut: "M" },
        { icon: FiArchive, tooltip: "Archive", shortcut: "E" },
    ];

    return (
        <div className="mx-auto bg-[#020526] rounded-2xl">
            <div className="flex justify-between items-center px-2 py-1 rounded-2xl text-white  bg-[#020526] ">
                <span className="font-bold text-lg pr-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-white text-[#4253f1] rounded-lg mr-2 flex items-center justify-center">
                            {selectedCount}
                        </div>
                        Selected
                    </div>
                </span>
                <div className="flex space-x-2 items-center px-2 border-x border-gray-700">
                    {buttonConfig.map((button, index) => (
                        <TooltipProvider key={index}>
                            <Tooltip delayDuration={0}>
                                <TooltipTrigger asChild>
                                    <button className="p-2 hover:bg-[#1c1e3d] rounded-lg">
                                        <button.icon size={20} />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent sideOffset={10} className=" bg-[#020526] text-white text-sm rounded-md shadow-lg">
                                    <div className="flex items-center px-1 py-1">
                                        {button.tooltip}
                                        <span className="ml-2 bg-[#1c1e3d] px-1 rounded text-xs">{button.shortcut}</span>
                                    </div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
                <div className='pl-2'>
                    <button
                        onClick={clearCompletedTools}
                        className=" flex items-center px-4 py-1 bg-[#4253f1] text-white rounded-lg font-bold hover:bg-[#3244d0] transition-colors duration-200 ease-in-out"
                    >
                        <IoMdCheckmark size={20} className="mr-1" />
                        <div className='mr-2'>
                            Clear task
                        </div>
                        <div className='text-xs bg-white text-[#4253f1] rounded-sm px-1'>
                            E
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tools;

`;