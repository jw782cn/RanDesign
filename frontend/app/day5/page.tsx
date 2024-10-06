"use client";

import DayTemplate from '@/components/DayTemplate';
import Settings from './Settings';
import { code } from './day5';

const settingsDescription = `An interactive settings component that allows users to adjust dimensions using sliders. It features controls for vertical, horizontal, and upscale parameters, with a clean and modern UI. Users can apply changes with a single click, making it easy to customize their experience.`;

export default function Day5() {
  return (
    <DayTemplate
      dayNumber={5}
      title="Settings UI"
      LeftComponent={<Settings />}
      description={settingsDescription}
      tweetId="1789623305290572218"
      code={code}
      codeFilename="Settings.tsx"
    />
  );
}