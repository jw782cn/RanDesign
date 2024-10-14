"use client";

import React, { useState, useRef, useEffect } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { AiOutlineAudio } from "react-icons/ai";
import { IconType } from 'react-icons';
import { MdStop } from "react-icons/md";
import { AnimatePresence, motion } from 'framer-motion';

interface ButtonProps {
  icon: IconType;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, onClick, className }) => (
  <button
    className={`bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 transition duration-300 ease-in-out ${className}`}
    onClick={onClick}
  >
    <Icon size={24} />
  </button>
);

const AudioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);

        const draw = () => {
          animationRef.current = requestAnimationFrame(draw);
          analyser.getByteFrequencyData(dataArray);

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const barWidth = (canvas.width / bufferLength) * 2.5;
          let x = 0;

          for (let i = 0; i < bufferLength; i++) {
            const barHeight = (dataArray[i] / 255) * canvas.height * 0.75; // 使用80%的画布高度

            ctx.fillStyle = 'rgb(156, 163, 175)'; // 使用 gray-400 颜色
            const y = (canvas.height - barHeight) / 2; // 垂直居中
            ctx.fillRect(x, y, barWidth, barHeight);

            x += barWidth + 1;
          }
        };

        draw();
      })
      .catch(err => console.error('Error accessing microphone:', err));

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      audioContext.close();
    };
  }, []);

  return <canvas ref={canvasRef} width={100} height={50} />;
};

const VoiceChat: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'recording'>('idle');

  return (
    <div className='flex w-full h-12 overflow-hidden items-center justify-center'>
      <Button icon={IoAddOutline} className='mr-2' />
      <div className="relative w-64 h-12 max-w-md border border-gray-300 mx-auto bg-white bg-opacity-80 rounded-full overflow-hidden flex justify-center items-center">
        {status === 'idle' ? (
          <AnimatePresence>
            <input
              type="text"
              className="flex-grow px-4 py-2 focus:outline-none"
              placeholder="Enter text..."
            />
            <Button
              icon={AiOutlineAudio}
              onClick={() => setStatus('recording')}
              className='mr-1'
            />
          </AnimatePresence>
        ) : status === 'recording' ? (
          <AnimatePresence>
            <div className='hidden'>
              <Button
                icon={MdStop}
                onClick={() => setStatus('idle')}
                className='mr-2 ml-1'
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-grow flex items-center justify-center"
            >
              <AudioVisualizer />
            </motion.div>
            <Button
              icon={MdStop}
              onClick={() => setStatus('idle')}
              className='mr-1 ml-2'
            />
          </AnimatePresence>
        ) : <></>}
      </div>
    </div>
  );
};

export default VoiceChat;
