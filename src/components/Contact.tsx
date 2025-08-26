import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  // Initialize the intersection observer without 'triggerOnce'
  const { ref, inView } = useInView({
    threshold: 0.2,     // Trigger when 20% of the element is visible
  });

  // Animation variants for the fade-in and slide effect
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}  // Attach observer to the section
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'} // Trigger animation based on scroll visibility
      variants={fadeInVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center"><br/>
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200 font-robotoSlab"
            variants={fadeInVariants}
            animate={inView ? 'visible' : 'hidden'}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300 transition-colors duration-200"
            variants={fadeInVariants}
            animate={inView ? 'visible' : 'hidden'}
          >
            I'm always open to new opportunities and interesting projects.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-colors duration-200">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-colors duration-200"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-colors duration-200">
            <div className="space-y-8">
              <motion.div
                className="flex items-start"
                variants={fadeInVariants}
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-200">
                    Location
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    Kolar Gold Field, Karnataka, India
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                variants={fadeInVariants}
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-200">
                    Email
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    sharan.rs0103@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                variants={fadeInVariants}
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-200">
                    Phone
                  </h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    +91 8147090339
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
