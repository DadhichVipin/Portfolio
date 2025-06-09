import React from 'react';
import { GraduationCap, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Python Backend Developer with expertise in building scalable applications 
            and innovative solutions in the EV charging industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <div className="space-y-6">
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Python Backend Developer with a strong background in building and deploying scalable applications, 
                specializing in EV charging solutions. Experienced in developing REST APIs, managing cloud deployments, 
                and optimizing backend performance.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm seeking a dynamic and innovative environment to leverage my skills and contribute to impactful 
                projects that shape the future of technology and sustainable transportation.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">EV Solutions Expert</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Specialized in electric vehicle charging software</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-secondary-600 dark:text-secondary-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Cloud Architecture</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AWS deployment and scalable solutions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Education & Stats */}
          <div className="space-y-8">
            {/* Education */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-primary-600 dark:text-primary-400" />
                Education
              </h3>
              
              <div className="space-y-4">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-primary-600">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Masters Of Computer Application</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">DY Patil University, Pune</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">2020 - 2022</p>
                </div>
                
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 border-secondary-600">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Bachelor Of Computer Application</h4>
                  <p className="text-secondary-600 dark:text-secondary-400 font-medium">Rajasthan University, Jaipur</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">2017 - 2019</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;