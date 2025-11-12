
import { motion } from 'framer-motion'; // Import Framer Motion
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';



function App() {
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <motion.main
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageVariants}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </motion.main>
      <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-8 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Sharan M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
