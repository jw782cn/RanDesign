'use client';

import React, {useState} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HomeIcon, BuildingOfficeIcon, UsersIcon, CalendarIcon, ChartBarIcon, 
  BellIcon, UserPlusIcon, ClipboardDocumentListIcon, BanknotesIcon, 
  ClockIcon, CurrencyDollarIcon, FolderIcon, GlobeAltIcon,
  ChevronDownIcon, ChevronRightIcon
} from '@heroicons/react/24/outline';
import Dashboard from './Dashboard';

interface MenuItem {
  icon: React.ElementType;
  label: string;
  badge?: number;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  { icon: HomeIcon, label: 'Dashboard' },
  { 
    icon: BuildingOfficeIcon, 
    label: 'Company', 
    subItems: [
      { icon: UsersIcon, label: 'Team' },
      { icon: UserPlusIcon, label: 'Onboarding' },
    ]
  },
  { icon: CalendarIcon, label: 'Meetings' },
  { icon: ChartBarIcon, label: 'Analytics' },
  { icon: BellIcon, label: 'Notifications', badge: 5 },
  { icon: ClipboardDocumentListIcon, label: 'Surveys' },
  { 
    icon: BanknotesIcon, 
    label: 'Finance', 
    subItems: [
      { icon: BanknotesIcon, label: 'Expenses' },
      { icon: CurrencyDollarIcon, label: 'Payrolls' },
    ]
  },
  { icon: ClockIcon, label: 'Time Off' },
  { icon: FolderIcon, label: 'Projects' },
];

const MenuItem: React.FC<{ item: MenuItem, depth?: number }> = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className={`${depth === 0 ? 'mb-1' : ''}`}>
      <div 
        className={`flex items-center px-2 hover:cursor-pointer ${depth > 0 ? 'pl-8 relative' : ''}`}
        onClick={() => hasSubItems && setIsOpen(!isOpen)}
      >
        {depth > 0 && (
          <div className="absolute left-[10px] top-0 bottom-0 w-px bg-neutral-200"></div>
        )}
        <div className='flex items-center text-neutral-700 hover:bg-neutral-100 w-full h-full px-2 py-2 rounded-lg transition-colors duration-200'>
          <item.icon className="w-5 h-5 mr-3" />
          <span>{item.label}</span>
          {item.badge && (
            <span className="ml-auto bg-neutral-100 text-neutral-500 text-xs font-semibold px-2 py-1 rounded-lg">
              {item.badge}
            </span>
          )}
          {hasSubItems && (
            <div className="ml-auto">
              {isOpen ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}
            </div>
          )}
        </div>
      </div>
      <AnimatePresence initial={false}>
        {hasSubItems && isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-1 overflow-hidden relative"
          >
            <div className="absolute left-[10px] top-0 bottom-0 w-px bg-neutral-200"></div>
            {item.subItems!.map((subItem, index) => (
              <li key={index}>
                <MenuItem item={subItem} depth={depth + 1} />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

const Sidebar: React.FC = () => {
  return (
    <div className="flex w-full bg-blue-50/20 rounded-lg border ">
      <div className="w-64 rounded-lg h-full mt-2">
        <div className="p-4 flex items-center space-x-2 border-b border-neutral-100">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
            <GlobeAltIcon className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold mt-2">Spherenet</h1>
        </div>
        <nav className="mt-1">
          <ul className='space-y-1'>
            {menuItems.map((item, index) => (
              <li key={index}>
                <MenuItem item={item} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-grow rounded-lg bg-white shadow-sm m-4 border border-neutral-100">
        <Dashboard />
      </div>
    </div>
  );
};

export default Sidebar;