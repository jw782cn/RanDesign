import React, { useState, KeyboardEvent, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BiSearchAlt, BiMovie, BiPalette, BiFootball, BiCamera, BiMusic, BiBook, BiJoystick, BiDish, BiTrain } from 'react-icons/bi';
import { IconType } from 'react-icons';

interface Tag {
  id: string;
  text: string;
}

interface TagInputProps {}

const TagInput: React.FC<TagInputProps> = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [input, setInput] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<{ text: string; icon: IconType }[]>([]);
  const [activeOptionIndex, setActiveOptionIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const options = [
    { text: "Music", icon: BiMusic },
    { text: "Reading", icon: BiBook },
    { text: "Gaming", icon: BiJoystick },
    { text: "Travel", icon: BiTrain },
    { text: "Movies", icon: BiMovie },
    { text: "Art", icon: BiPalette },
    { text: "Sports", icon: BiFootball },
    { text: "Photography", icon: BiCamera },
    { text: "Cooking", icon: BiDish },
    { text: "Dancing", icon: BiMusic },
  ];

  useEffect(() => {
    const filtered = input
      ? options.filter(option =>
          option.text.toLowerCase().includes(input.toLowerCase())
        )
      : options;
    setFilteredOptions(filtered);
    setActiveOptionIndex(0);
  }, [input]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredOptions.length > 0) {
        const newTag: Tag = {
          id: Date.now().toString(),
          text: filteredOptions[activeOptionIndex].text
        };
        setTags([...tags, newTag]);
        setInput('');
      }
    } else if (e.key === 'ArrowDown') {
      setActiveOptionIndex(prev => (prev + 1) % filteredOptions.length);
    } else if (e.key === 'ArrowUp') {
      setActiveOptionIndex(prev => (prev - 1 + filteredOptions.length) % filteredOptions.length);
    }
  };

  const removeTag = (idToRemove: string) => {
    setTags(tags.filter(tag => tag.id !== idToRemove));
  };

  return (
    <div className="relative">
      <motion.div layout className="flex flex-wrap items-center gap-2 p-2 border rounded w-96 rounded-lg bg-gray-50">
        {tags.map(tag => (
          <motion.span
            layout
            key={tag.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="px-2 py-1 bg-gray-200 text-gray-800 rounded hover:cursor-pointer"
          >
            {tag.text}
            <button
              onClick={() => removeTag(tag.id)}
              className="ml-1 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
          </motion.span>
        ))}
        <motion.input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Add a tag..."
          className="flex-grow outline-none rounded-lg p-2"
        />
      </motion.div>
      <ul className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg p-2 max-h-60 overflow-y-auto space-y-1">
        {filteredOptions.map((option, index) => (
          <li
            key={option.text}
            className={`px-4 py-2 cursor-pointer border border-transparent rounded-md transition-all duration-200 ${
              index === activeOptionIndex
                ? 'bg-gray-200'
                : 'hover:bg-gray-100'
            }`}
            onClick={() => {
              const newTag: Tag = { id: Date.now().toString(), text: option.text };
              setTags([...tags, newTag]);
              setInput('');
              inputRef.current?.focus();
            }}
          >
            <div className="flex items-center">
              <option.icon className="mr-2" />
              {option.text}
            </div>
          </li>
        ))}
        {filteredOptions.length === 0 && (
          <li className="px-4 py-2 text-gray-500 flex flex-col items-center">
            <BiSearchAlt className="text-4xl mb-2 text-gray-400" />
            Sorry, We couldn't find any results.
          </li>
        )}
      </ul>
    </div>
  );
};

export default TagInput;