"use client";

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaCheck } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFile } from 'react-icons/fi';

interface FileUploadState {
    id: string;
    name: string;
    size: number;
    progress: number;
}

const Upload: React.FC = () => {
    const [files, setFiles] = useState<FileUploadState[]>([]);
    const [showCompleted, setShowCompleted] = useState<boolean[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const generateUniqueId = () => {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(event.target.files || []).map(file => ({
            id: generateUniqueId(),
            name: file.name,
            size: file.size,
            progress: 0
        }));
        setFiles(newFiles);
        simulateUpload(newFiles);
    };

    const simulateUpload = (newFiles: FileUploadState[]) => {
        newFiles.forEach((file, index) => {
            let lastProgress = 0;
            const interval = setInterval(() => {
                setFiles(prevFiles => {
                    const updatedFiles = [...prevFiles];
                    const randomIncrement = Math.floor(Math.random() * 15) + 1; // 1 to 15
                    const newProgress = Math.min(lastProgress + randomIncrement, 100);
                    updatedFiles[index].progress = newProgress;
                    lastProgress = newProgress;
                    if (newProgress >= 100) {
                        clearInterval(interval);
                    }
                    return updatedFiles;
                });
            }, Math.floor(Math.random() * 500) + 200); // 200 to 700 ms
        });
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(1)} KB`;
        }
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const newFiles = acceptedFiles.map(file => ({
            id: generateUniqueId(),
            name: file.name,
            size: file.size,
            progress: 0
        }));
        setFiles(prevFiles => [...prevFiles, ...newFiles]);
        simulateUpload(newFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleChange = (id: string) => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
            fileInputRef.current.onchange = (event: Event) => {
                const target = event.target as HTMLInputElement;
                if (target.files && target.files.length > 0) {
                    const newFile = target.files[0];
                    setFiles(prevFiles => prevFiles.map(file => 
                        file.id === id ? {
                            id: file.id,
                            name: newFile.name,
                            size: newFile.size,
                            progress: 100
                        } : file
                    ));
                }
            };
        }
    };

    const handleRemove = (id: string) => {
        setFiles(prevFiles => prevFiles.filter(file => file.id !== id));
    };

    useEffect(() => {
        files.forEach((file, index) => {
            if (file.progress >= 100 && !showCompleted[index]) {
                setTimeout(() => {
                    setShowCompleted(prev => {
                        const newState = [...prev];
                        newState[index] = true;
                        return newState;
                    });
                }, 300);
            }
        });
    }, [files]);

    const getFileExtension = (filename: string) => {
        return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2).toUpperCase();
    };

    return (
        <div className="p-4 w-[500px] h-full">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed border-gray-300 rounded-lg p-8 mb-4 text-center cursor-pointer transition duration-300 ease-in-out ${isDragActive ? 'bg-gray-100' : ''
                    } hover:bg-gray-50 hover:border-gray-400`}
            >
                <input {...getInputProps()} className="hidden" />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Click or drag files here to upload</p>
                )}
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <div>
                <AnimatePresence mode="popLayout">
                    {files.map((file) => (
                        <motion.div
                            key={file.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                                opacity: { duration: 0.2 },
                                height: { duration: 0.3 }
                            }}
                            className="overflow-hidden"
                        >
                            <div className="bg-white rounded-3xl shadow p-4 mb-4 transition duration-300 ease-in-out hover:shadow-md border border-gray-200">
                                <div className="flex">
                                    <div className="mr-4 rounded-lg justify-start items-start">
                                        <div className="relative flex flex-col items-center justify-center">
                                        <FiFile size={70} className="text-gray-400" stroke="currentColor" fill="none" />
                                        <div className="absolute bottom-0 left-0 right-0 h-6 w-10 bg-orange-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                                            {getFileExtension(file.name)}
                                        </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        {/* file name and progress */}
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="text-sm text-left">{file.name}</div>
                                            <AnimatePresence>
                                                {file.progress >= 100 ? (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        exit={{ opacity: 0, scale: 0.8 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="flex items-center text-green-500"
                                                    >
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            transition={{ delay: 0.2, type: "spring", stiffness: 500, damping: 15 }}
                                                            className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center mr-1"
                                                        >
                                                            <FaCheck className="text-white" size={10} />
                                                        </motion.div>
                                                        <motion.span
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.3, duration: 0.2 }}
                                                            className="text-xs font-semibold"
                                                        >
                                                            Completed
                                                        </motion.span>
                                                    </motion.div>
                                                ) : (
                                                    <div className="text-xs text-right text-gray-500">{Math.min(file.progress, 100)}%</div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        {/* progress bar */}
                                        <div className="bg-gray-200 rounded-[4px] h-2 mb-2 shadow-inner">
                                            <motion.div
                                                className="rounded-[2px] h-2"
                                                initial={{ width: 0 }}
                                                animate={{ 
                                                    width: `${file.progress}%`,
                                                    backgroundColor: file.progress < 100 ? 'rgb(239 68 68)' : 'rgb(34 197 94)'
                                                }}
                                                transition={{ 
                                                    duration: 0.5,
                                                    ease: "easeInOut"
                                                }}
                                                style={{
                                                    boxShadow: 'inset 0 4px 4px 0 rgba(0, 0, 0, 0.06)'
                                                }}
                                            />
                                        </div>
                                        {/* file size */}
                                        <div className="text-sm text-gray-500 mb-2">
                                            {formatFileSize(file.size * (Math.min(file.progress, 100) / 100))} of {formatFileSize(file.size)}
                                        </div>

                                        {/* change and remove buttons */}
                                        {file.progress === 100 && (
                                            <div className="flex justify-start mt-2">
                                                <button
                                                    onClick={() => handleChange(file.id)}
                                                    className="bg-gray-100 text-gray-500 px-2 py-1 rounded-md transition duration-300 ease-in-out hover:bg-gray-200 mr-2 text-xs font-semibold"
                                                >
                                                    Change
                                                </button>
                                                <button
                                                    onClick={() => handleRemove(file.id)}
                                                    className="bg-red-100 text-red-500 px-3 py-1 rounded-md transition duration-300 ease-in-out hover:bg-red-200 text-xs font-semibold"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Upload;