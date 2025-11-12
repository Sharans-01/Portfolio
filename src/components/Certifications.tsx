import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Award, Calendar, Building } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Joy of Computing with Python",
      issuer: "NPTEL",
      date: "Aug 2024",
      image: "/certificate/python.png",
      link: "https://drive.google.com/file/d/1nCj4poX5FLDcD-k-J-P1t_4lpp-37mrB/view?usp=sharing",
      category: "Programming"
    },
    {
      title: "Application Developer Web & Mobile",
      issuer: "Rooman Technologies",
      date: "May 2025",
      image: "/certificate/rooman.png",
      link: "https://drive.google.com/file/d/16V9I3XJqcldIiX1iVtfIqoCK7ARur_3j/view?usp=sharing",
      category: "Web Development"
    },
    {
      title: "SQL & Relational Databases",
      issuer: "IBM SkillBuild",
      date: "Oct 2025",
      image: "/certificate/sql.png",
      link: "https://drive.google.com/file/d/1P59ZWgXIUNxokcLIAcnnWriB0PR2IWmF/view?usp=sharing",
      category: "SQL & Databases"
    },
    {
      title: "AI-ML Virtual Internship",
      issuer: "AICTE x AWS",
      date: "Jun 2024",
      image: "/certificate/aiml.png",
      link: "https://drive.google.com/file/d/1sBD5fh6dbRyBUHTJ-okX-yl6jpCDIoeJ/view?usp=sharing",
      category: "AI & ML"
    },
    {
      title: "Software & Agile development",
      issuer: "Infosys Springboard",
      date: "Oct 2025",
      image: "/certificate/agile.png",
      link: "https://drive.google.com/file/d/1mJfWUK-woxK7CEnXQAE-pZavkiGpcXF_/view?usp=drive_link",
      category: "Agile"
    },
    {
      title: "Machine Learning & Deep Learning",
      issuer: "BMS College of Engineering",
      date: "May 2025",
      image: "/certificate/mldl.png",
      link: "https://drive.google.com/file/d/1B4rISrxgO99pt0Uy0k-o5B0ttuHQyvxT/view?usp=sharing",
      category: "ML & DL"
    },
    {
      title: "Time management",
      issuer: "Infosys Springboard",
      date: "Sep 2025",
      image: "/certificate/time.png",
      link: "https://drive.google.com/file/d/1Kd6fBC36_QPQKNuSoUvovv5bfUYHqFtC/view?usp=drive_link",
      category: "Time Management"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const totalCards = certifications.length;

  // Responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay, cardsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = totalCards - cardsPerView;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = totalCards - cardsPerView;
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  return (
    <section 
      id="certifications"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Achievements
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Professional certifications and completed programs that showcase my expertise
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
              }}
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-200 dark:border-gray-700">
                    {/* Certificate Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-250px object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML += '<div class="flex items-center justify-center h-full"><Award class="w-16 h-16 text-blue-300 dark:text-blue-700" /></div>';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-full">
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    {/* Certificate Details */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Building className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        {/* <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span>{cert.date}</span>
                        </div> */}
                      </div>

                      {/* View Certificate Link */}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 group/link"
                      >
                        View Certificate 
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </a>
                    </div>

                    {/* Hover Overlay Effect */}
                    <div className="absolute inset-0 border-2 border-blue-500 dark:border-blue-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 p-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous certification"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 p-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next certification"
          >
            <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(totalCards / cardsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                Math.floor(currentIndex / cardsPerView) === index
                  ? 'w-8 h-2 bg-blue-600 dark:bg-blue-400'
                  : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Certifications", value: totalCards },
            { label: "Latest", value: "2025" },
            { label: "Active Learning", value: "100%" },
            { label: "Platforms", value: "6+" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Certifications;