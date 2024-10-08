"use client";

import DayTemplate from '@/components/DayTemplate';
import Transcribe from './Transcribe';
import { code } from './day6';

const description = `A dynamic speech-to-text transcription component that simulates real-time voice recognition. It features a sleek, dark-themed UI with animated text display, language selection, and an interactive microphone button. The component showcases smooth transitions, a scrollable transcript area, and visual feedback for the transcription process, providing an engaging and modern user experience.`;

export default function Day6() {
    return (
        <DayTemplate
            dayNumber={6}
            title="Transcribe"
            LeftComponent={<Transcribe />}
            description={description}
            tweetId="1822766167913828827"
            code={code}
            codeFilename="Transcribe.tsx"
        />
    );
}