'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import ClientTweetCard from "@/components/magicui/client-tweet-card";

const projectDescription = "嗨👋我是晨然，这是我的前端设计挑战项目。每天都会有新的设计挑战，展示不同的UI组件和布局技巧。通过这个项目，我旨在提升自己的前端技能，同时为其他学习者提供灵感和参考。";

const featuredDays = [
  {
    day: 1,
    title: "Card Design",
    description: "探索现代卡片设计，融合美观和功能性。",
  },
  // 可以根据需要添加更多天数
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen p-4">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 text-center"
        >
          晨然的前端设计挑战
        </motion.h1>
        
        {/* Project description section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">关于项目</h2>
          <p className="text-gray-700 mb-6">{projectDescription}</p>
        </motion.div>
        
        {/* Featured days section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">每日挑战</h3>
          <div className="space-y-4">
            {featuredDays.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link href={`/day${day.day}`} className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                  <h4 className="text-xl font-semibold">Day {day.day}: {day.title}</h4>
                  <p className="text-gray-600">{day.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Inspiration section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">项目灵感</h3>
          <ClientTweetCard id="1831037740974293117" className="shadow-2xl max-w-sm mx-auto mb-6" />
        </motion.div>
        
        {/* Join challenge section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="bg-gray-100 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">关于</h3>
          <p className="text-gray-700 mb-4">喜欢这个项目？在GitHub上给我们一个星星，或者在Twitter上关注项目进展！</p>
          <div className="flex space-x-4 justify-center">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/chenran-project-url" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            >
              GitHub
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com/chenran-twitter" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Twitter
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
