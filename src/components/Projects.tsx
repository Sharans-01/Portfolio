import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  whileHover: {
    scale: 1.03,
    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
  },
};



const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
     title: 'Sepsis Prediction & Patient Management System',
description:
  'An AI-powered Flask web application to predict sepsis stages using clinical data and manage patient and doctor information with PostgreSQL integration.',
image: '/projects/p7.png',
tags: ['Python', 'Flask', 'Deep Learning', 'PostgreSQL', 'HTML/CSS'],
githubUrl: 'https://github.com/Sharans-01/Sepsis-Care.git', 
liveUrl: 'https://sepsis-care.onrender.com', 

    },

      {
      title: 'Real-Time Chatting Application',
      description:
        'A MERN stack application for seamless real-time communication with features like user authentication, private and group chats.',
      image: '/projects/p2.png',
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
      githubUrl: 'https://github.com/Sharans-01/Chat-App.git',
      liveUrl: 'https://chatterhub1.vercel.app',
    },
 {
  title: 'CarValue - Car Price Predictor',
  description:
    'An AI-powered web app that predicts used car prices with a React frontend and FastAPI backend, providing quick and accurate estimates.',
  image: '/projects/p01.png',
  tags: ['React','Vite', 'FastAPI', 'Machine Learning','XGBoost'],
  githubUrl: 'https://github.com/Sharans-01/Car-Price-predictor.git',
  liveUrl: 'https://carvalues.netlify.app/',
},

  
    {
      title: 'Tasty Bytes – Food Recipe App',
      description: 'A responsive food recipe app built with React and Tailwind CSS. This lets users explore a variety of recipes with a clean UI and easy navigation.',
      image: '/projects/p11.png', 
      tags: ['React', 'Vite', 'Tailwind CSS', 'Food App', 'Responsive UI'],
      githubUrl: 'https://github.com/Sharans-01/Food-App.git', 
      liveUrl: 'https://tastybities.netlify.app/', 
    },

   {
      title: 'NovaChat Bot – Gemini Clone',
      description:
      'NovaChat is a Gemini-style chatbot built with HTML, CSS, and JavaScript, using the Gemini API for smart, real-time conversations.',
      image: '/projects/p6.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Gemini API', 'Chatbot'],
      githubUrl: 'https://github.com/Sharans-01/Gemini-Clone.git',
      liveUrl: 'https://mynovabot.netlify.app/',
    },

    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with interactive maps',
      image: '/projects/p3.png',
      tags: ['React', 'Vite', 'OpenWeather API', 'Mapbox', 'Weather App'],
      githubUrl: 'https://github.com/Sharans-01/Weather-app.git',
      liveUrl: 'https://skytrack1.netlify.app/',
    },
    {
      title: 'Airline Reservation System',
      description:
        'A Python-based airline reservation system with a Tkinter GUI and MySQL database for managing CRUD operations efficiently.',
      image: '/projects/p4.jpg',
      tags: ['Python', 'Tkinter', 'MySQL', 'CRUD Operations', 'GUI'],
      githubUrl: 'https://github.com/Sharans-01/Airlines_Management_System.git',
      liveUrl: 'https://github.com/Sharans-01/Airlines_Management_System.git',
    },
    {
      title: 'QR Code Generator and Decoder',
      description:
        'A Python application for generating and decoding QR codes using OpenCV, designed for easy data encoding and extraction.',
      image: '/projects/p10.png',
      tags: ['Python', 'OpenCV', 'QR Code', 'Image Processing'],
      githubUrl: 'https://github.com/Sharans-01/QR-Code-Project.git',
      liveUrl: 'https://github.com/Sharans-01/QR-Code-Project.git',
    },
   {
      title: 'Basic Calculator',
      description:
        'A simple and responsive calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations with a clean and user-friendly interface.',
      image: '/projects/p8.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Calculator'],
      githubUrl: 'https://github.com/Sharans-01/Basic-Calculator.git', 
      liveUrl: 'https://calcify1.netlify.app/', 
    },
    
  ];

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
      style={{ minHeight: '100vh' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 font-robotoSlab"
          variants={cardVariants}
        >
          PROJECTS
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={fadeInVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="whileHover"
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                  >
                    <Github className="text-white w-5 h-5" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition"
                  >
                    <ExternalLink className="text-white w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;