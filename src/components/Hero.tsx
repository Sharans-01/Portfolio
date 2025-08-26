import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
  hidden: { opacity: 0, y: 50 },   // <-- pushes section down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.3 },
  },
};


  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200 overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-400 dark:bg-purple-600 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animate-[wiggle_8s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-pink-400 dark:bg-pink-600 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animate-[wiggle_10s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-400 dark:bg-blue-600 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animate-[wiggle_12s_ease-in-out_infinite]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          {/* Right Image */}
          <motion.div
  className="flex justify-center lg:justify-end order-1 lg:order-2"
  variants={itemVariants}
>
  <div className="relative transform transition-transform duration-300 lg:-translate-x-10">
    <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-full blur-2xl opacity-20"></div>
    
    <motion.img
      src="/t3.jpg"
      alt="Profile"
      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg transform transition-all duration-300 hover:scale-110"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2 }}
    />
  </div>
</motion.div>


          {/* Left Content */}
          <motion.div
            className="space-y-8 order-2 lg:order-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <div>
              <h1
                className="text-3xl md:text-4xl font-bold text-blue-900 dark:text-white transition-colors duration-200"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Hello
              </h1>
              <br />
              <h2
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r text-transparent bg-clip-text 
                  from-purple-500 via-pink-500 to-green-500
                  transition-colors duration-200"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                I'am Sharan
              </h2>
              <br />
              <TypewriterEffect />
            </div>

            <motion.p
              className="text-gray-900 dark:text-gray-300 transition-colors duration-200 text-center lg:text-left"
              variants={itemVariants}
            >
             Building modern, scalable web applications with clean code and seamless user experiences. Passionate about crafting efficient and innovative digital solutions.
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              variants={itemVariants}
            >
              <a href="https://github.com/Sharans-01" className="hover:scale-110 transform">
                <Github className="h-6 w-6" />
              </a>
              <a href="http://www.linkedin.com/in/sharan0103" className="hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:sharan.rs0103@gmail.com" className="hover:scale-110 transform">
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 mt-4"
              variants={itemVariants}
            >
              <a
                href="/Sharan_M_Resume.pdf"
                download="Sharan_M_Resume"
                className="group inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 via-indigo-600 to-blue-700 hover:from-blue-600 hover:via-indigo-700 hover:to-blue-800 dark:from-blue-600 dark:via-indigo-700 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:via-indigo-800 dark:hover:to-blue-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Download CV
                <ArrowDown className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-y-1" />
              </a>

              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-5 py-2 text-sm font-medium border-2 border-indigo-600 rounded-md text-indigo-600 bg-white dark:bg-white-900 hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-700 dark:hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
