
import { GraduationCap, Award, Code, Lightbulb, Target, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      value: "CSE Graduate",
      subtitle: "CGPA: 8.56"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Specialization",
      value: "Full-Stack Dev",
      subtitle: "Python Expert"
    },
    
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Get to know me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Image & Highlight Cards */}
          <div className="space-y-8">
  {/* Image Container */}
  <div className="relative max-w-[220px] sm:max-w-[260px] md:max-w-[300px] lg:max-w-[420px] mx-auto lg:mx-0 justify-self-center">
    {/* Decorative Elements */}
    <div className="absolute -top-3 -left-3 w-16 h-16 bg-blue-500/20 dark:bg-blue-600/20 rounded-full blur-2xl" />
    <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-purple-500/20 dark:bg-purple-600/20 rounded-full blur-2xl" />

    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      <img
        src="s1.jpg"
        alt="Sharan"
        className="relative rounded-2xl shadow-2xl object-cover w-full 
                   h-[300px] sm:h-[340px] md:h-[380px] lg:h-[440px]
                   transform group-hover:scale-[1.02] transition-transform duration-500 
                   border-4 border-white dark:border-gray-800"
      />
    </div>

              {/* Floating Badge */}
              {/* <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Projects</div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Highlight Cards - Now Below Image */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-lg sm:max-w-2xl lg:max-w-5xl mx-auto mt-10 px-2">
  {highlights.map((item, index) => (
    <div
      key={index}
      className="group relative bg-white dark:bg-gray-800 rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
    >
      <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
        <div className="p-2 sm:p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform text-sm sm:text-base">
          {item.icon}
        </div>
        <div>
          <div className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-500 mb-0.5">{item.title}</div>
          <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">{item.value}</div>
          <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">{item.subtitle}</div>
        </div>
      </div>
    </div>
  ))}
</div>

          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Introduction */}
           <div className="space-y-4">
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
    Hi! I'm <span className="font-bold text-blue-600 dark:text-blue-400">Sharan</span>, a Computer Science Engineering graduate from{' '}
    <span className="font-semibold">Dr. T. Thimmaiah Institute of Technology</span> with a CGPA of{' '}
    <span className="font-bold text-purple-600 dark:text-purple-400">8.56</span>. I'm passionate about building innovative, efficient, and scalable software solutions.
  </p>
  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
  My expertise lies in <span className="font-semibold text-gray-900 dark:text-white">Python programming</span> and{' '}
  <span className="font-semibold text-gray-900 dark:text-white">Web development</span>. I focus on building efficient, scalable, and user-friendly applications, combining clean code practices with modern development tools to deliver impactful digital solutions.
</p>

</div>


            {/* Mission Statement */}
            <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6 border-l-4 border-blue-600 dark:border-blue-400">
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed italic">
                "I believe in continuous learning, adaptability, and staying updated with modern tools and frameworks. 
                I'm committed to contributing meaningfully to the tech industry through creativity and problem-solving."
              </p>
            </div>

            {/* Additional Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">What Drives Me</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Innovation First:</span> Always exploring new technologies and approaches to solve complex problems
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Quality Code:</span> Writing clean, maintainable, and efficient code that stands the test of time
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-pink-600 dark:bg-pink-400 rounded-full" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">User Experience:</span> Creating intuitive and seamless experiences that delight users
                  </p>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                View My Work
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              {/* <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-gray-900 dark:border-white hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;