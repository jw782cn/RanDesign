"use client";

import DayTemplate from '@/components/DayTemplate';
import Upload from './Upload';
import { code } from './day4';

const uploadDescription = `An interactive file upload component that simulates the upload process with a progress bar. It supports multiple file uploads, displays file information, and provides options to change or remove completed uploads. The component features a clean and modern UI with smooth animations.`;

export default function Day4() {
  return (
    <DayTemplate
      dayNumber={4}
      title="File Upload"
      LeftComponent={<Upload />}
      description={uploadDescription}
      tweetId="1842196494364840121" // Replace with the actual tweet ID when available
      code={code}
      codeFilename="Upload.tsx"
    />
  );
}