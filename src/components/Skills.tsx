import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'react-circular-progressbar/dist/styles.css';

// Icons
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGitAlt, FaAws
} from 'react-icons/fa';
import {
  SiJavascript, SiBootstrap, SiExpress, SiDjango, SiMysql,
  SiMongodb, SiDocker, SiFigma
} from 'react-icons/si';

type SkillItem = {
  skill: string;
  level: number;
  color: string;
  icon: JSX.Element;
};

type SkillCategory = {
  category: string;
  items: SkillItem[];
};

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const skills: SkillCategory[] = [
    {
      category: 'Programming Languages',
      items: [
        { skill: 'Python', level: 80, color: '#FF5733', icon: <FaPython color="#306998" /> },
        { skill: 'Java', level: 60, color: '#33C4FF', icon: <FaJava color="#f89820" /> },
        { skill: 'C', level: 75, color: '#FF33D4', icon: <span className="text-lg font-bold">C</span> },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { skill: 'HTML', level: 90, color: '#33FF57', icon: <FaHtml5 color="#e34c26" /> },
{ skill: 'CSS', level: 80, color: '#FF5733', icon: <FaCss3Alt color="#264de4" /> },
{ skill: 'JavaScript', level: 78, color: '#33C4FF', icon: <SiJavascript color="#f7df1e" /> },
{ skill: 'React', level: 80, color: '#FF33D4', icon: <FaReact color="#61dafb" /> },
{ skill: 'Bootstrap', level: 70, color: '#33FF57', icon: <SiBootstrap color="#7952b3" /> },
      ],
    },
    {
      category: 'Backend',
      items: [
       { skill: 'Node.js', level: 80, color: '#FF5733', icon: <FaNodeJs color="#3c873a" /> },
{ skill: 'Express', level: 80, color: '#33C4FF', icon: <SiExpress color="#000000" /> },
{ skill: 'Django', level: 85, color: '#FF33D4', icon: <SiDjango color="#092e20" /> },
{ skill: 'MySQL', level: 80, color: '#33FF57', icon: <SiMysql color="#00758f" /> },
{ skill: 'MongoDB', level: 75, color: '#33C4FF', icon: <SiMongodb color="#47A248" /> },
      ],
    },
    {
      category: 'Tools',
      items: [
       { skill: 'Git', level: 80, color: '#33FF57', icon: <FaGitAlt color="#f34f29" /> },
{ skill: 'Docker', level: 70, color: '#FF5733', icon: <SiDocker color="#2496ed" /> },
{ skill: 'AWS', level: 80, color: '#33C4FF', icon: <FaAws color="#FF9900" /> },
{ skill: 'Figma', level: 70, color: '#FF33D4', icon: <SiFigma color="#F24E1E" /> },
      ],
    },
    {
      category: 'Soft Skills',
      items: [
        { skill: 'Team Leadership', level: 85, color: '#FF5733', icon: <span className="text-xl">👥</span> },
        { skill: 'Communication', level: 80, color: '#33C4FF', icon: <span className="text-xl">🗣️</span> },
        { skill: 'Problem Solving', level: 80, color: '#FF33D4', icon: <span className="text-xl">🧠</span> },
        { skill: 'Agile', level: 75, color: '#33FF57', icon: <span className="text-xl">⚡</span> },
      ],
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      className="py-20 bg-gradient-to-br from-gray-200 via-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeInVariants}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white font-robotoSlab mb-4"
        >
          My Skills
        </motion.h2>

        {/* Soft Skills */}
        <motion.div className="mt-16" variants={fadeInVariants}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center">
            {skills.find(s => s.category === 'Soft Skills')?.items.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-md p-4 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
                variants={fadeInVariants}
              >
                <div className="w-24 h-24">
                  <CircularProgressbar
                    value={item.level}
                    text={`${item.level}%`}
                    styles={buildStyles({
                      pathColor: item.color,
                      textColor: item.color,
                      trailColor: '#eee',
                    })}
                  />
                </div>
                <div className="mt-2 text-2xl text-gray-700 dark:text-gray-300">{item.icon}</div>
                <span className="mt-2 font-medium text-sm text-gray-700 dark:text-gray-300">
                  {item.skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div className="mt-20" variants={fadeInVariants}>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {skills.filter(s => s.category !== 'Soft Skills').map((skillSet, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg transition-all"
                variants={fadeInVariants}
              >
                <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  {skillSet.category}
                </h4>
                <div className="space-y-3">
                  {skillSet.items.map((item, j) => (
                    <div key={j}>
                      <div className="flex justify-between items-center mb-1 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{item.icon}</span>
                          <span>{item.skill}</span>
                        </div>
                        <span>{item.level}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
