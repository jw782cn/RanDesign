export const code = `
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
    <div className={\`\${depth === 0 ? 'mb-1' : ''}\`}>
      <div 
        className={\`flex items-center px-2 hover:cursor-pointer \${depth > 0 ? 'pl-8 relative' : ''}\`}
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
      <div className="w-64 rounded-lg h-full mt-4">
        <div className="p-4 flex items-center space-x-2 border-b border-neutral-100">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
            <GlobeAltIcon className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold">Spherenet</h1>
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



import React from 'react';
import { UserGroupIcon, SparklesIcon, ClockIcon } from '@heroicons/react/24/outline';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard h-full w-full rounded-lg mb-4">
      <h2 className="text-gray-700 text-xl border-b px-6 pb-4 pt-4 border-neutral-100">👋 Welcome back, Stefan!</h2>
      
      <div className="flex gap-2 px-6 mt-4">
      <StatCard icon="users" title="Total employees" value={141} />
        <StatCard icon="sparkles" title="New hires" value={20} />
        <StatCard icon="clock" title="Leave requests" value={13} />
      </div>

      <div className="flex px-6 mt-4">
        <MeetingsSection />
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: keyof typeof iconMap; title: string; value: number }> = ({ icon, title, value }) => {
  const IconComponent = iconMap[icon];
  return (
    <div className="stat-card border border-neutral-100 rounded-lg px-4 py-2 text-gray-400 hover:bg-neutral-50 transition-colors duration-200">
      <div className="flex items-center">
      <IconComponent className="w-6 h-6 mr-3" />
      <div>
        <h3 className="text-sm">{title}</h3>
        <p className="value text-2xl text-neutral-900">{value}</p>
        </div>
      </div>
      
    </div>
  );
};

const iconMap = {
  users: UserGroupIcon,
  sparkles: SparklesIcon,
  clock: ClockIcon,
};

const MeetingsSection: React.FC = () => {
  const meetingsData = [
    {
      date: "SEP 5",
      time: "9 AM",
      title: "Sprint review",
      color: "orange",
      attendees: [
        { emoji: '👨🏽', color: '#FFD700', rotation: -15 },
        { emoji: '👩🏻', color: '#FF69B4', rotation: 15 },
        { emoji: '👨🏿', color: '#00CED1', rotation: -10 },
        { emoji: '👩🏼', color: '#98FB98', rotation: 10 },
        { emoji: '🧑🏽', color: '#FFA07A', rotation: -8 },
        { emoji: '👩🏾', color: '#DDA0DD', rotation: 12 },
      ]
    },
    {
      date: "SEP 5",
      time: "11 AM",
      title: "Chris ↔ Stefan (1:1)",
      color: "blue",
      attendees: [
        { emoji: '🧑🏽', color: '#E6E6FA', rotation: 0 },
      ]
    },
    {
      date: "SEP 5",
      time: "3 PM",
      title: "Weekly sync",
      color: "green",
      attendees: [
        { emoji: '👨🏽', color: '#8B4513', rotation: -45 },
        { emoji: '🧔🏽', color: '#A52A2A', rotation: 10 },
        { emoji: '👩🏻', color: '#FFF0F5', rotation: -8 },
      ]
    },
    {
      date: "SEP 8",
      time: "9:30 AM",
      title: "Workshop",
      color: "orange",
      attendees: [
        { emoji: '👨🏽', color: '#FFD700', rotation: -15 },
        { emoji: '👩🏻', color: '#9370DB', rotation: 15 },
        { emoji: '🧕🏽', color: '#FF69B4', rotation: -10 },
        { emoji: '👩🏼', color: '#98FB98', rotation: 10 },
        { emoji: '🧑🏽', color: '#FFA07A', rotation: -8 },
        { emoji: '👩🏾', color: '#DDA0DD', rotation: 12 },
        { emoji: '👨🏿', color: '#00CED1', rotation: -12 },
      ]
    }
  ];

  return (
    <div className="meetings-section flex-1 rounded-lg border border-neutral-100">
      <h2 className="text-xl px-4 py-2 border-b border-neutral-100">
        Upcoming meetings <span className="meeting-count bg-gray-100 rounded-full px-2 py-1 text-sm ml-2">{meetingsData.length}</span>
      </h2>
      <ul className="meeting-list space-y-4 px-4 py-2">
        {meetingsData.map((meeting, index) => (
          <MeetingItem
            key={index}
            date={meeting.date}
            time={meeting.time}
            title={meeting.title}
            color={meeting.color}
            attendees={meeting.attendees}
          />
        ))}
      </ul>
    </div>
  );
};

const MeetingItem: React.FC<{
  date: string;
  time: string;
  title: string;
  color: string;
  attendees: Array<{ emoji: string; color: string; rotation: number }>;
}> = ({ date, time, title, color, attendees }) => (
  <li className="meeting-item border border-neutral-100 rounded-lg p-2 flex items-center hover:bg-neutral-50 transition-colors duration-200">
    {/* Left section */}
    <div className="meeting-date flex flex-col items-center justify-center mr-4 w-12 h-12 bg-neutral-100 rounded-lg border border-neutral-200/25">
      <span className="month text-xs text-neutral-400 uppercase">{date.split(' ')[0]}</span>
      <div className="day text-lg font-semibold text-neutral-700 bg-white w-11 rounded-lg h-8 flex items-center justify-center border border-neutral-200/25">{date.split(' ')[1]}</div>
    </div>
    
    {/* Middle section */}
    <div className="meeting-info flex-grow">
      <div className="flex items-center">
        <span className={\`meeting-dot w-1 h-1 rounded-full mr-2 bg-\${color}-500\`}></span>
        <span className="meeting-title font-medium">{title}</span>
      </div>
      <span className="meeting-time text-sm text-gray-500">{time}</span>
    </div>
    
    {/* Right section */}
    <div className="meeting-attendees">
      <AvatarGroup avatars={attendees} />
    </div>
  </li>
);

const Avatar: React.FC<{ emoji: string; color: string; rotation: number }> = ({ emoji, color, rotation }) => (
  <div
    className="flex items-center justify-center w-6 h-6 rounded-full border border-neutral-100 hover:opacity-80 transition-opacity duration-200 hover:cursor-pointer"
    style={{
      backgroundColor: color,
      transform: \`rotate(\${rotation}deg)\`,
    }}
  >
    {emoji}
  </div>
);

const AvatarGroup: React.FC<{ avatars: Array<{ emoji: string; color: string; rotation: number }> }> = ({ avatars }) => (
  <div className="flex -space-x-2">
    {avatars.slice(0, 4).map((avatar, index) => (
      <Avatar key={index} {...avatar} />
    ))}
    {avatars.length > 4 && (
      <div className="avatar-more flex items-center justify-center w-6 h-6 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 border border-white z-10">
        +{avatars.length - 4}
      </div>
    )}
  </div>
);

export default Dashboard;
`