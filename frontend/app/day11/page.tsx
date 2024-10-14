"use client";

import DayTemplate from '@/components/DayTemplate';
import VoiceChat from './VoiceChat';
import { code } from './day11';

const description = `An interactive audio player component that allows users to play, pause, and seek through an audio file. This component demonstrates the use of React hooks, state management, and HTML5 audio API to create a functional and visually appealing audio interface.`;

export default function Day11() {
    return (
        <DayTemplate
            dayNumber={11}
            title="Voice Chat"
            LeftComponent={<div className='h-64 flex items-center'><VoiceChat /></div>}
            description={description}
            tweetId="1844379962368983277"
            code={code}
            codeFilename="VoiceChat.tsx"
        />
    );
}