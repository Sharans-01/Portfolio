import { useState } from 'react';
import { ExternalLink, Github, Folder, Star} from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'Sepsis Prediction & Patient Management System',
      description: 'An AI-powered Flask web application to predict sepsis stages using clinical data and manage patient and doctor information.',
      image: '/projects/p7.png',
      tags: ['Python', 'Flask', 'Deep Learning', 'PostgreSQL', 'HTML/CSS'],
      category: 'AI/ML',
      featured: true,
      githubUrl: 'https://github.com/Sharans-01/Sepsis-Care.git',
      liveUrl: 'https://sepsis-care.onrender.com',
    },
    {
      title: 'Real-Time Chatting Application',
      description: 'A MERN stack application for seamless real-time communication with features like user authentication, private and group chats.',
      image: '/projects/p2.png',
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.IO'],
      category: 'Full-Stack',
      featured: true,
      githubUrl: 'https://github.com/Sharans-01/Chat-App.git',
      liveUrl: 'https://chatterhub1.vercel.app',
    },
    {
      title: 'CarValue - Car Price Predictor',
      description: 'An AI-powered web app that predicts used car prices with a React frontend and FastAPI backend, providing quick and accurate estimates.',
      image: '/projects/p01.png',
      tags: ['React', 'Vite', 'FastAPI', 'Machine Learning', 'XGBoost'],
      category: 'AI/ML',
      featured: true,
      githubUrl: 'https://github.com/Sharans-01/Car-Price-predictor.git',
      liveUrl: 'https://carvalues.netlify.app/',
    },
    {
      title: 'Tasty Bytes – Food Recipe App',
      description: 'A responsive food recipe app built with React and Tailwind CSS. This lets users explore a variety of recipes with a clean UI and easy navigation.',
      image: '/projects/p11.png',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Responsive UI'],
      category: 'Frontend',
      featured: false,
      githubUrl: 'https://github.com/Sharans-01/Food-App.git',
      liveUrl: 'https://tastybities.netlify.app/',
    },
    {
      title: 'NovaChat Bot – Gemini Clone',
      description: 'NovaChat is a Gemini-style chatbot built with HTML, CSS, and JavaScript, using the Gemini API for smart, real-time conversations.',
      image: '/projects/p6.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Gemini API'],
      category: 'AI/ML',
      featured: false,
      githubUrl: 'https://github.com/Sharans-01/Gemini-Clone.git',
      liveUrl: 'https://mynovabot.netlify.app/',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather information with interactive maps',
      image: '/projects/p3.png',
      tags: ['React', 'Vite', 'OpenWeather API', 'Mapbox'],
      category: 'Frontend',
      featured: false,
      githubUrl: 'https://github.com/Sharans-01/Weather-app.git',
      liveUrl: 'https://skytrack1.netlify.app/',
    },
    {
  title: 'Inventory Management System',
  description: 'A full-stack Inventory Management System built using React, Node.js, Express and MySQL . It supports complete CRUD operations, order management with an admin dashboard for analytics.',
  image: '/projects/ims1.png',
  tags: ['React', 'Node.js', 'Express', 'MySQL' ],
  category: 'Full-Stack',
  featured: false,
  githubUrl: 'https://github.com/Sharans-01/Inventory-Management-System.git',
  liveUrl: 'https://github.com/Sharans-01/Inventory-Management-System.git',
},

    {
      title: 'QR Code Generator and Decoder',
      description: 'A Python application for generating and decoding QR codes using OpenCV, designed for easy data encoding and extraction.',
      image: '/projects/p10.png',
      tags: ['Python', 'OpenCV', 'QR Code', 'Image Processing'],
      category: 'Backend',
      featured: false,
      githubUrl: 'https://github.com/Sharans-01/QR-Code-Project.git',
      liveUrl: 'https://github.com/Sharans-01/QR-Code-Project.git',
    },
    {
      title: 'Basic Calculator',
      description: 'A simple and responsive calculator built using HTML, CSS, and JavaScript. It supports basic arithmetic operations with a clean and user-friendly interface.',
      image: '/projects/p8.png',
      tags: ['HTML', 'CSS', 'JavaScript', ],
      category: 'Frontend',
      featured: false,
      githubUrl: 'https://github.com/Sharans-01/Basic-Calculator.git',
      liveUrl: 'https://calcify1.netlify.app/',
    },
  ];

  const categories = ['all', 'AI/ML', 'Full-Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            <Folder className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my best work in web development, AI/ML, and software engineering
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Projects - Large Cards */}
        {filter === 'all' && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-8">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Featured Work
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
                >
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-yellow-500 rounded-full shadow-lg">
                    <Star className="w-3 h-3 text-white fill-white" />
                    <span className="text-xs font-bold text-white">Featured</span>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += '<div class="flex items-center justify-center h-full"><Folder class="w-16 h-16 text-purple-300 dark:text-purple-700" /></div>';
                      }}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6 gap-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/90 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="w-5 h-5 text-gray-900" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full bg-white/90 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="w-5 h-5 text-gray-900" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
<div className="p-6">
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
    {project.title}
  </h3>
  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
    {project.description}
  </p>

  {/* Tags */}
  <div className="flex flex-wrap gap-2">
    {project.tags.map((tag, tagIndex) => (
      <span
        key={tagIndex}
        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
</div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div>
          {filter === 'all' && (
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              More Projects
            </h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(filter === 'all' ? otherProjects : filteredProjects).map((project, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += '<div class="flex items-center justify-center h-full"><Folder class="w-16 h-16 text-gray-300 dark:text-gray-600" /></div>';
                    }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 hover:bg-white hover:scale-110 transition-all duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5 text-gray-900" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/90 hover:bg-white hover:scale-110 transition-all duration-300"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-400 rounded-full text-xs font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {/* {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More on GitHub */}
       <div className="mt-16 text-center">
  <a
    href="https://github.com/Sharans-01"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 sm:gap-3 px-5 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
  >
    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
    View More Projects on GitHub
    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
  </a>
</div>

      </div>
    </section>
  );
};

export default Projects;