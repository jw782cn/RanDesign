"use client";

import DayTemplate from '@/components/DayTemplate';
import TryForFreeButton from './TryForFreeButton';

const description = `A "Try for Free" button with an animated hover effect. This component demonstrates the use of Framer Motion for smooth animations, React Icons for visual elements, and responsive design. The button expands and rotates its arrow icon on hover, providing an engaging user interaction.`;

import { code } from './day13';

export default function Day13() {
    return (
        <DayTemplate
            dayNumber={13}
            title="Try for Free Button"
            LeftComponent={<div className='h-64 flex items-center'><TryForFreeButton /></div>}
            description={description}
            tweetId="1847228128441278784"
            code={code}
            codeFilename="TryForFreeButton.tsx"
        />
    );
}