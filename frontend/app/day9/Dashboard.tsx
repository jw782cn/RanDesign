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
        <span className={`meeting-dot w-1 h-1 rounded-full mr-2 bg-${color}-500`}></span>
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
      transform: `rotate(${rotation}deg)`,
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