import React from 'react';
import { HiOutlinePlus } from 'react-icons/hi';

const CreateButton: React.FC = () => {
  return (
    <button
      className="
        flex items-center justify-center
        px-4 py-2 rounded-full
        bg-white text-black
        shadow scale-[1.02]
        transform -translate-y-0.4 active:translate-y-0 active:shadow-none active:scale-100
        transition duration-150 ease-in-out
        border border-gray-100
      "
    >
      <HiOutlinePlus className="w-5 h-5 mr-2 stroke-2" />
      Create New
    </button>
  );
};

export default CreateButton;