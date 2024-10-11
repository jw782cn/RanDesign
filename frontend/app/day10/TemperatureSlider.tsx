import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import MotionNumber from 'motion-number'
import { easeOut } from 'framer-motion';
interface TemperatureSliderProps {
    min: number;
    max: number;
    step: number;
}

const TemperatureSlider: React.FC<TemperatureSliderProps> = ({ min, max, step }) => {
    const [temperature, setTemperature] = useState(min + (max - min) / 2);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
    const x = useSpring(((temperature - min) / (max - min)) * 100, springConfig);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (isDragging && sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const padding = 16; // 4 * 4px (p-4 class)
            const newX = event.clientX - rect.left - padding;
            const percentage = Math.max(0, Math.min(1, newX / (rect.width - 2 * padding)));
            const newTemperature = Math.round((percentage * (max - min) + min) / step) * step;
            setTemperature(newTemperature);
            const boundX = Math.max(0, Math.min(rect.width - 2 * padding, newX));
            x.set(boundX);
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    useEffect(() => {
        if (sliderRef.current) {
            const rect = sliderRef.current.getBoundingClientRect();
            const padding = 16;
            const newX = ((temperature - min) / (max - min)) * (rect.width - 2 * padding);
            x.set(newX);
        }
    }, [temperature, min, max]);

    const tickCount = Math.floor((max - min) / 4) + 1;

    return (
        <div className="flex flex-col items-center">
            <div
                ref={sliderRef}
                className="w-64 bg-white border-[1px] border-gray-100 rounded-xl shadow relative cursor-pointer px-3 py-2"
            >
                <div className="relative h-9">
                    {[...Array(tickCount)].map((_, index) => (
                        <div
                            key={index}
                            className="absolute top-1/2 transform -translate-y-1/2 w-[2px] h-4/5 bg-gray-200"
                            style={{ left: `${(index / (tickCount - 1)) * 100}%` }}
                        />
                    ))}
                    <motion.div
                        className="absolute top-0 w-[3px] h-full bg-black rounded-full cursor-grab"
                        style={{
                            // left: `${((temperature - min) / (max - min)) * 100}%`,
                            x,
                        }}
                        onMouseDown={handleMouseDown}
                    >
                        <div
                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-gray-800 text-white px-2 rounded-lg whitespace-nowrap flex"
                        >
                            <MotionNumber
                                transition={{
                                    layout: { type: 'spring', duration: 0.7, bounce: 0 },
                                    y: { type: 'spring', duration: 0.7, bounce: 0.1 },
                                    opacity: { duration: 0.7, ease: easeOut, times: [0, 0.3] }
                                }}
                                value={temperature}
                                format={{ notation: 'compact' }}
                                locales="en-US"
                                className='flex items-center justify-center'
                            />
                            °C
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );

};

export default TemperatureSlider;