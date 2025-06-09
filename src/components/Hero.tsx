import React from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/Vipin_Dadhich_Resume.pdf';
    link.download = 'Vipin_Dadhich_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden ring-4 ring-primary-500/30 dark:ring-primary-500/20">
              <img
                src="/assets/vipin.png"
                alt="Vipin Dadhich"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="block">Vipin Dadhich</span>
            <span className="block text-3xl md:text-4xl text-primary-600 dark:text-primary-400 mt-2">
              Python Backend Developer
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized in building and deploying scalable applications with expertise in EV charging solutions, 
            REST APIs, and cloud deployments. Passionate about creating impactful backend systems.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-600 dark:text-gray-300">
            <a 
              href="tel:+918005580812"
              className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>8005580812</span>
            </a>
            <a 
              href="mailto:vipin11dadhich@gmail.com"
              className="flex items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>vipin11dadhich@gmail.com</span>
            </a>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>Sujangarh, Rajasthan</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/DadhichVipin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/vipin-dadhich"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:vipin11dadhich@gmail.com"
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button
              onClick={downloadResume}
              className="px-8 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 font-medium"
            >
              Download Resume
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 rounded-md hover:bg-primary-600 hover:text-white transform hover:scale-105 transition-all duration-300 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;