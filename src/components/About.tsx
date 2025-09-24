import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation each time the section is in view
    threshold: 0.2, // Start animation when 20% of the section is visible
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } }, // Delay added to title fade-in
  };

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-10 sm:py-20 bg-white dark:bg-gray-900 transition-colors duration-200"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInVariants}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariants}
      ><br/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Side - Photo */}
          <motion.div
            className="relative max-w-md mx-auto"
            variants={fadeInVariants}
          >
            <div className="absolute inset-0 bg-indigo-600 dark:bg-indigo-500 rounded-lg blur-xl opacity-20"></div>
            <motion.img
              src="s2.jpg"
              alt="Profile"
              className="relative rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300 object-cover w-full sm:w-[250px] md:w-[300px] lg:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeInVariants}
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 lg:-ml-10"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
          ><br/>
            {/* Title */}
           <motion.h2
  className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200 font-robotoSlab"
  variants={titleVariants}
>
  About Me
</motion.h2>


            <div>
  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-200">
    I’m Sharan, a Computer Science Engineering graduate from <strong>Dr. T. Thimmaiah Institute of Technology</strong>, with a CGPA of <strong>8.56</strong>. I am passionate about building innovative, efficient, and scalable software solutions to solve real-world challenges.
  </p>
  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-200">
    My expertise lies in <strong>Python Programming</strong> and <strong>Full-Stack Development</strong>. I have gained practical experience through diverse projects and have earned certifications including <em>Joy of Computing with Python</em> (NPTEL) and a virtual internship in AI & ML supported by AICTE and AWS.
  </p>
  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-200">
    I strongly believe in continuous learning, adaptability, and staying updated with modern tools, frameworks, and industry best practices to deliver impactful solutions.
  </p>
</div>

<div className="space-y-2">
  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify transition-colors duration-200">
    I am committed to professional growth and aspire to contribute meaningfully to the technology industry by leveraging my skills, creativity, and problem-solving mindset.
  </p>
</div>

          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
