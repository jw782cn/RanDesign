"use client";

import DayTemplate from '@/components/DayTemplate';
import Tools from './Tools';

const description = `An interactive toolbar component that displays selected items and provides quick actions. This component showcases the use of tooltips, icons, and responsive design to create a user-friendly interface for managing selected items efficiently.`;

import { code } from './day12';

export default function Day12() {
    return (
        <DayTemplate
            dayNumber={12}
            title="Todo List"
            LeftComponent={<div className='h-64 flex items-center'><Tools /></div>}
            description={description}
            tweetId="1845477654771929447"
            code={code}
            codeFilename="TodoList.tsx"
        />
    );
}