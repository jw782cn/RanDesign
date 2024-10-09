"use client";

import { useState } from 'react';
import DayTemplate from '@/components/DayTemplate';
import TagInput from './TagInput';
import { code } from './day8';

const description = `An interactive tag input component that allows users to add and remove tags. This component demonstrates the use of state management, event handling, and dynamic rendering to create a flexible and user-friendly interface for managing tags or keywords.`;

export default function Day8() {
    const [tags, setTags] = useState<string[]>([]);

    return (
        <DayTemplate
            dayNumber={8}
            title="Tag Input"
            LeftComponent={<TagInput />}
            description={description}
            tweetId="your_tweet_id_here"
            code={code}
            codeFilename="TagInput.tsx"
        />
    );
}