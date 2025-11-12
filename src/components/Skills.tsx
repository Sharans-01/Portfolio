import React, { useState, useEffect, useRef } from 'react';
import { Code2, Sparkles, Zap, Target, Brain } from 'lucide-react';
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGitAlt, FaAws, FaBootstrap, FaDocker, FaFigma
} from 'react-icons/fa';
import {
  SiJavascript, SiExpress, SiDjango, SiMysql, SiMongodb,
  SiFastapi, SiFlask, SiPandas, SiNumpy, SiScikitlearn, SiPytorch
} from 'react-icons/si';

// 🔹 Tech Icon Component
const TechIcon = ({ name }) => {
  const iconMap = {
    Python: { Icon: FaPython, color: '#3776AB' },
    Java: { Icon: FaJava, color: '#007396' },
    HTML: { Icon: FaHtml5, color: '#E34F26' },
    CSS: { Icon: FaCss3Alt, color: '#1572B6' },
    JavaScript: { Icon: SiJavascript, color: '#F7DF1E' },
    React: { Icon: FaReact, color: '#61DAFB' },
    Bootstrap: { Icon: FaBootstrap, color: '#7952B3' },
    'Node.js': { Icon: FaNodeJs, color: '#339933' },
    Express: { Icon: SiExpress, color: '#000000' },
    Django: { Icon: SiDjango, color: '#092E20' },
    MySQL: { Icon: SiMysql, color: '#4479A1' },
    MongoDB: { Icon: SiMongodb, color: '#47A248' },
    Git: { Icon: FaGitAlt, color: '#F05032' },
    Docker: { Icon: FaDocker, color: '#2496ED' },
    AWS: { Icon: FaAws, color: '#FF9900' },
    Figma: { Icon: FaFigma, color: '#F24E1E' },
    FastAPI: { Icon: SiFastapi, color: '#009688' },
    Flask: { Icon: SiFlask, color: '#000000' },
    Pandas: { Icon: SiPandas, color: '#150458' },
    NumPy: { Icon: SiNumpy, color: '#013243' },
    'Scikit-learn': { Icon: SiScikitlearn, color: '#F7931E' },
    PyTorch: { Icon: SiPytorch, color: '#EE4C2C' },
  };

  const iconData = iconMap[name] || { Icon: Code2, color: '#666666' };
  const Icon = iconData.Icon;

  return (
    <div className="w-10 h-10 flex items-center justify-center">
      <Icon className="w-full h-full" style={{ color: iconData.color }} />
    </div>
  );
};

// 🔹 Circular Progress Component (with scroll-trigger animation)
const CircularProgress = ({ value, color, icon, label, trigger }) => {
  const [progress, setProgress] = useState(0);
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (trigger) {
      const timer = setTimeout(() => setProgress(value), 200);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [trigger, value]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-32 h-32">
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200 dark:text-gray-700"
          />
          <circle
            cx="64"
            cy="64"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-3xl mb-1">{icon}</div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">{progress}%</span>
        </div>
      </div>
      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
        {label}
      </span>
    </div>
  );
};

// 🔹 Main Skills Section
export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer for triggering soft skill animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    'Python', 'HTML', 'CSS', 'JavaScript', 'React',
    'Bootstrap','Node.js', 'Express', 'Django', 'MySQL', 'MongoDB',
    'Git', 'Docker', 'AWS', 'Figma', 'Flask',
    'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'
  ];

  const softSkills = [
    { skill: 'Leadership', level: 80, color: '#3B82F6', icon: '👥' },
    { skill: 'Communication', level: 85, color: '#8B5CF6', icon: '💬' },
    { skill: 'Problem Solving', level: 85, color: '#EC4899', icon: '🧠' },
    { skill: 'Agile & Teamwork', level: 80, color: '#10B981', icon: '⚡' },
  ];

  const categories = [
    { title: 'Languages', skills: ['Python', 'JavaScript'], icon: <Code2 className="w-5 h-5" /> },
    { title: 'Frontend', skills: ['HTML', 'CSS', 'React', 'Bootstrap'], icon: <Sparkles className="w-5 h-5" /> },
    { title: 'Backend', skills: ['Node.js', 'Express', 'Django', 'Flask'], icon: <Zap className="w-5 h-5" /> },
    { title: 'Database', skills: ['MySQL', 'MongoDB'], icon: <Target className="w-5 h-5" /> },
    { title: 'ML & Data', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'], icon: <Brain className="w-5 h-5" /> },
    { title: 'Tools & DevOps', skills: ['Git', 'Docker', 'AWS', 'Figma'], icon: <Target className="w-5 h-5" /> },
  ];

  const [activeTab, setActiveTab] = useState('all');

  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/5 dark:bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/5 dark:bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              My Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and soft skills I use to build exceptional solutions
          </p> */}
        </div>

        {/* 🔹 Soft Skills Section with animation trigger */}
        <div ref={sectionRef} className="mb-20 opacity-0 animate-fade-in-up animation-delay-200">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
              Soft Skills
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            {softSkills.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <CircularProgress
                  value={item.level}
                  color={item.color}
                  icon={item.icon}
                  label={item.skill}
                  trigger={isVisible}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Technical Skills Section */}
        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Technical Stack
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
              }`}
            >
              All Skills
            </button>
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(cat.title)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === cat.title
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
              >
                {cat.icon}
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technicalSkills
              .filter(skill => {
                if (activeTab === 'all') return true;
                const category = categories.find(cat => cat.title === activeTab);
                return category?.skills.includes(skill);
              })
              .map((skill, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-xl p-2 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative flex flex-col items-center gap-2">
                    <TechIcon name={skill} />
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 text-center">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* 🔹 Animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
}
