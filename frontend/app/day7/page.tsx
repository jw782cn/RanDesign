"use client";

import DayTemplate from '@/components/DayTemplate';
import AnimatedButton from './AnimatedButton';
import { code } from './day7';

const description = `An interactive animated button component that transitions from "Doing" to "Completed" state. This sleek and modern button features smooth animations, color changes, and subtle hover effects, providing an engaging user experience. The component demonstrates the use of state management and animation techniques to create a visually appealing and functional UI element.`;

export default function Day7() {
    return (
        <DayTemplate
            dayNumber={7}
            title="Animated Button"
            LeftComponent={<AnimatedButton onClick={() => console.log('Button clicked')} />}
            description={description}
            tweetId="1841810434560561451"
            code={code}
            codeFilename="AnimatedButton.tsx"
        />
    );
}