"use client";

import DayTemplate from '@/components/DayTemplate';
import Command from './Command';
import { code } from './day3';

const commandDescription = `An interactive command menu component with search functionality, categorized commands, and keyboard shortcuts. It features a modern UI with smooth animations, tabs for filtering, and additional widgets for weather and agenda information.`;

export default function Day3() {
  return (
    <DayTemplate
      dayNumber={3}
      title="Command Menu"
      LeftComponent={<Command />}
      description={commandDescription}
      tweetId="1825140598321647674"
      code={code}
      codeFilename="Command.tsx"
    />
  );
}