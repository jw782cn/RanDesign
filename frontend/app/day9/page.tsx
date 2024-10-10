"use client";

import { useState } from 'react';
import DayTemplate from '@/components/DayTemplate';
import Sidebar from './Sidebar';
import { code } from './day9';

const description = `An interactive dashboard layout featuring a responsive sidebar and a main content area. The sidebar component displays a company logo and a list of menu items with icons, demonstrating the use of Heroicons, dynamic rendering of menu items, and nested submenus. The main dashboard area showcases key statistics, upcoming meetings, and attendee information, creating a comprehensive and visually appealing interface for a modern HR or team management application.`;

export default function Day9() {
    return (
        <DayTemplate
            dayNumber={9}
            title="Interactive Dashboard"
            LeftComponent={<Sidebar />}
            description={description}
            tweetId="1844377482738466836"
            code={code}
            codeFilename="Sidebar.tsx"
            width={80}
        />
    );
}