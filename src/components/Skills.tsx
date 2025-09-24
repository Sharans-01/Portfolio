import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// Icons
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs,
  FaGitAlt, FaAws
} from 'react-icons/fa';
import {
  SiJavascript, SiBootstrap, SiExpress, SiDjango, SiMysql,
  SiMongodb, SiDocker, SiFigma,  SiFastapi, SiFlask, SiPandas, SiNumpy, SiScikitlearn, SiPytorch
} from 'react-icons/si';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });


  const technicalSkills = [
    { skill: 'Python', icon: <FaPython color="#306998" /> },
    { skill: 'Java', icon: <FaJava color="#f89820" /> },
   
    { skill: 'HTML', icon: <FaHtml5 color="#e34c26" /> },
    { skill: 'CSS', icon: <FaCss3Alt color="#264de4" /> },
    { skill: 'JavaScript', icon: <SiJavascript color="#f7df1e" /> },
    { skill: 'React', icon: <FaReact color="#61dafb" /> },
    { skill: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> },
    { skill: 'Node.js', icon: <FaNodeJs color="#3c873a" /> },
    { skill: 'Express', icon: <SiExpress color="#000000" /> },
    { skill: 'Django', icon: <SiDjango color="#092e20" /> },
    { skill: 'MySQL', icon: <SiMysql color="#00758f" /> },
    { skill: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { skill: 'Git', icon: <FaGitAlt color="#f34f29" /> },
    { skill: 'Docker', icon: <SiDocker color="#2496ed" /> },
    { skill: 'AWS', icon: <FaAws color="#FF9900" /> },
    { skill: 'Figma', icon: <SiFigma color="#F24E1E" /> },

     // 🔹 Newly Added
  { skill: 'FastAPI', icon: <SiFastapi color="#009688" /> },
  { skill: 'Flask', icon: <SiFlask color="#000000" /> },
  { skill: 'Pandas', icon: <SiPandas color="#150458" /> },
  { skill: 'NumPy', icon: <SiNumpy color="#013243" /> },
  { skill: 'Scikit-learn', icon: <SiScikitlearn color="#F7931E" /> },
  { skill: 'PyTorch', icon: <SiPytorch color="#EE4C2C" /> },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      className="py-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          variants={fadeInVariants}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white font-robotoSlab mb-12"
        >
          My Skills
        </motion.h2>

       <motion.div className="mt-12" variants={fadeInVariants}>
  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 md:text-3xl font-robotoSlab text-center">
    Soft Skills
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 justify-center">
    {[
      { skill: 'Team Leadership', level: 85, color: '#FF5733', icon: <span className="text-2xl">👥</span> },
      { skill: 'Communication', level: 80, color: '#33C4FF', icon: <span className="text-2xl">🗣️</span> },
      { skill: 'Problem Solving', level: 80, color: '#FF33D4', icon: <span className="text-2xl">🧠</span> },
      { skill: 'Agile', level: 75, color: '#33FF57', icon: <span className="text-2xl">⚡</span> },
    ].map((item, index) => {
      const [progress, setProgress] = React.useState(0);
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

      React.useEffect(() => {
        if (inView) {
          let start = 0;
          const interval = setInterval(() => {
            start += 1;
            if (start > item.level) {
              clearInterval(interval);
            } else {
              setProgress(start);
            }
          }, 15);
          return () => clearInterval(interval);
        }
      }, [inView, item.level]);

      return (
        <motion.div
          key={index}
          ref={ref}
          className="bg-white/30 dark:bg-gray-700/30 backdrop-blur-md p-4 rounded-xl shadow-md flex flex-col items-center hover:scale-105 transition-transform duration-300"
          variants={fadeInVariants}
        >
          <div className="w-24 h-24">
            <CircularProgressbar
              value={progress}
              text={`${progress}%`}
              styles={buildStyles({
                pathColor: item.color,
                textColor: document.documentElement.classList.contains("dark") ? "#ffffff" : "#111827",
                trailColor: document.documentElement.classList.contains("dark") ? "#374151" : "#e5e7eb",
                textSize: "18px",
              })}
            />
          </div>
          <div className="mt-2 text-2xl text-gray-700 dark:text-gray-300">{item.icon}</div>
          <span className="mt-2 font-medium text-sm text-gray-700 dark:text-gray-300">
            {item.skill}
          </span>
        </motion.div>
      );
    })}
  </div>
</motion.div>

        {/* Technical Skills */}
<motion.h3
  variants={fadeInVariants}
  className="mt-12 text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 md:text-3xl font-robotoSlab text-center"
>
  Technical Skills
</motion.h3>

<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
  {technicalSkills.map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.15, rotate: 5 }}
      className="flex flex-col items-center justify-center 
                 bg-white dark:bg-gray-800 shadow-md rounded-xl 
                 p-3 sm:p-4 md:p-6 
                 hover:shadow-xl transition"
    >
      <div className="text-2xl sm:text-3xl md:text-4xl">{item.icon}</div>
      <span className="mt-2 sm:mt-3 font-medium 
                       text-xs sm:text-sm md:text-base 
                       text-gray-700 dark:text-gray-300 text-center">
        {item.skill}
      </span>
    </motion.div>
  ))}
</div>

      </div>
    </motion.section>
  );
};

export default Skills;
