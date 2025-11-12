import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code, Sparkles, Terminal } from 'lucide-react';

const TypewriterEffect = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Python Developer',
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Tech Explorer'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="text-3xl md:text-5xl font-bold min-h-[60px] md:min-h-[80px]">
    <span className="font-robotoSlab bg-gradient-to-r from-red-600 via-rose-600 to-pink-600 dark:from-cyan-400 dark:via-teal-400 dark:to-sky-400 text-transparent bg-clip-text">
  {text}
</span>



      <span className="animate-pulse text-blue-600 dark:text-blue-400">|</span>
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-950 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-500 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000"
          style={{
            transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400/30 dark:bg-pink-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.y}px, ${mousePosition.x}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 opacity-20 dark:opacity-10 animate-float">
          <Code className="w-12 h-12 text-blue-600" />
        </div>
        <div className="absolute bottom-32 right-20 opacity-20 dark:opacity-10 animate-float animation-delay-2000">
          <Terminal className="w-16 h-16 text-purple-600" />
        </div>
        <div className="absolute top-1/2 right-10 opacity-20 dark:opacity-10 animate-float animation-delay-4000">
          <Sparkles className="w-10 h-10 text-pink-600" />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-7">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-gray-700 animate-fade-in">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Available for opportunities
            </span>
          </div>

          {/* Main Heading */}
         <div className="space-y-4 animate-slide-up">
  <h1 className="font-robotoSlab text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
    Hello, I'm{' '}
    <span className="relative inline-block">
      <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 text-transparent bg-clip-text">
        Sharan
      </span>
      <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-lg" />
    </span>
  </h1>

  <TypewriterEffect />
</div>


          {/* Description */}
<p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed animate-fade-in animation-delay-2000">
  Building modern, scalable web applications with clean code and seamless user experiences. 
  Passionate about crafting efficient and innovative digital solutions.
</p>


          {/* CTA Buttons */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in animation-delay-4000">
  <a
    href="/Sharan_M_Resume.pdf"
    download="Sharan_M_Resume"
    className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
  >
    <span className="relative z-10 flex items-center gap-2">
      Download CV
      <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
  </a>

  <a
    href="#projects"
    className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-full border-2 border-gray-900 dark:border-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
  >
    <span className="relative z-10 flex items-center gap-2">
      View My Work
      <svg
        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </span>
    <div className="absolute inset-0 bg-gray-900 dark:bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
  </a>
</div>


          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 pt-8 animate-fade-in animation-delay-6000">
            <a
              href="https://github.com/Sharans-01"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
            </a>
            <a
              href="http://www.linkedin.com/in/sharan0103"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:sharan.rs0103@gmail.com"
              className="group p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
            </a>
          </div>

          
          {/* Scroll Indicator */}
<div className="absolute bottom-10 right-10 animate-bounce">
  <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
    <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-scroll" />
  </div>
</div>

        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .animation-delay-2000 {
          animation-delay: 0.2s;
        }

        .animation-delay-4000 {
          animation-delay: 0.4s;
        }

        .animation-delay-6000 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default Hero;