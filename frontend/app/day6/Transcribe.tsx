import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMicrophone, FaStop } from 'react-icons/fa';

interface Word {
  text: string;
  status: 'confirmed' | 'current' | 'new';
}

const Transcribe: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [isListening, setIsListening] = useState<boolean>(false);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const transcriptRef = useRef<HTMLDivElement>(null);

  const fullText = "Widgets display current information at a glance, providing quick access to app content without opening the full application.";

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isListening && currentWordIndex < fullText.split(' ').length) {
      timer = setTimeout(() => {
        const newWord = fullText.split(' ')[currentWordIndex];
        setWords((prevWords: Word[]) => {
          const updatedWords = prevWords.map((word: Word) => {
            if (word.status === 'new') return { ...word, status: 'current' as const };
            if (word.status === 'current') return { ...word, status: 'confirmed' as const };
            return word;
          });
          return [...updatedWords, { text: newWord, status: 'new' as const }];
        });
        setCurrentWordIndex(prevIndex => prevIndex + 1);

        // 检查是否是最后一个单词
        if (currentWordIndex === fullText.split(' ').length - 1) {
          setWords(prevWords => prevWords.map(word => ({ ...word, status: 'confirmed' as const })));
          setIsListening(false);
        }
      }, Math.floor(Math.random() * (500 - 100 + 1)) + 100);
    }
    return () => clearTimeout(timer);
  }, [isListening, currentWordIndex, fullText]);

  useEffect(() => {
    if (transcriptRef.current) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [words]);

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setWords([]);
      setCurrentWordIndex(0);
    }
  };

  return (
    <motion.div 
      className="bg-[#121212] text-gray-300 p-4 rounded-3xl shadow-lg w-80 h-64 mx-auto flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div ref={transcriptRef} className="mb-4 min-h-[100px] overflow-y-auto">
        <p className="text-sm flex flex-wrap items-center min-h-[1rem]">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className={`${word.status === 'confirmed' ? 'text-gray-400' :
                word.status === 'current' ? 'text-gray-100' :
                'text-white'} hover:bg-gray-700 hover:text-white rounded-md px-0.5 hover:cursor-pointer transition-all duration-300`}
              initial={word.status === 'new' ? { opacity: 0 } : { opacity: 1 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                ease: "easeOut",
                opacity: { duration: word.status === 'current' ? 1 : 0.5 }
              }}
            >
              {word.text}
            </motion.span>
          ))}
          {isListening && (
            <motion.span
              className="inline-flex items-center ml-1 items-center flex justify-center"
            >
              <motion.span
                className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.span>
          )}
        </p>
      </div>
      <div className="flex justify-between">
        <div className='flex items-end'>
        <div className="flex items-center space-x-2 hover:cursor-pointer rounded-full hover:bg-gray-700 px-2 transition-all duration-300 py-1 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
          </svg>
          <span className="text-sm">English</span>
        </div>
        </div>
        <motion.button
          onClick={toggleListening}
          className={`rounded-full p-3 ${isListening ? 'bg-orange-600' : 'bg-gray-700'} relative`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isListening && (
            <span className="absolute inset-0 animate-ripple">
            <span className="absolute inset-0 rounded-full bg-orange-600 opacity-50"></span>
          </span>
          )}
          <motion.div
            animate={{ 
              scale: isListening ? [1, 1.2, 1] : 1
            }}
            transition={{ 
              duration: 1.5, 
              repeat: isListening ? Infinity : 0,
              repeatType: "loop"
            }}
          >
            {isListening ? <FaStop className="h-4 w-4" /> : <FaMicrophone className="h-4 w-4" />}
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Transcribe;