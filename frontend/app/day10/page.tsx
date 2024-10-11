"use client";

import DayTemplate from '@/components/DayTemplate';
import TemperatureSlider from './TemperatureSlider';
import { code } from './day10';

const description = `An interactive temperature slider component that allows users to adjust temperature within a given range. This component demonstrates the use of state management, event handling, and dynamic styling to create a visually appealing and functional temperature control interface.`;

export default function Day10() {
  return (
    <DayTemplate
      dayNumber={10}
      title="Temperature Slider"
      LeftComponent={ <div className='h-64 flex items-center'><TemperatureSlider min={0} max={100} step={1} /> </div>}
      description={description}
      tweetId="1821405475990090151"
      code={code}
      codeFilename="TemperatureSlider.tsx"
    />
  );
}