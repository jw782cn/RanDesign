"use client";

import React, { useState } from 'react';

interface FileUploadState {
  name: string;
  size: number;
  progress: number;
}

const Upload: React.FC = () => {
  const [files, setFiles] = useState<FileUploadState[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(event.target.files || []).map(file => ({
      name: file.name,
      size: file.size,
      progress: 0
    }));
    setFiles(newFiles);
    simulateUpload(newFiles);
  };

  const simulateUpload = (newFiles: FileUploadState[]) => {
    newFiles.forEach((file, index) => {
      const interval = setInterval(() => {
        setFiles(prevFiles => {
          const updatedFiles = [...prevFiles];
          updatedFiles[index].progress += 10;
          if (updatedFiles[index].progress >= 100) {
            clearInterval(interval);
          }
          return updatedFiles;
        });
      }, 500);
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="p-4">
      <input type="file" onChange={handleFileChange} multiple className="mb-4" />
      {files.map((file, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="flex items-center mb-2">
            <div className="bg-red-500 text-white rounded px-2 py-1 text-sm mr-2">PDF</div>
            <span className="font-semibold">{file.name}</span>
          </div>
          <div className="text-sm text-gray-500 mb-2">
            {formatFileSize(file.size * (file.progress / 100))} of {formatFileSize(file.size)}
          </div>
          <div className="bg-gray-200 rounded-full h-2 mb-2">
            <div
              className="bg-blue-500 rounded-full h-2"
              style={{ width: `${file.progress}%` }}
            ></div>
          </div>
          <div className="text-right text-sm">{file.progress}%</div>
          {file.progress === 100 && (
            <div className="flex justify-between mt-2">
              <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded">Change</button>
              <button className="bg-red-100 text-red-700 px-3 py-1 rounded">Remove</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Upload;