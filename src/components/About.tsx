import React from 'react';
import { GraduationCap, Award, Target, PenTool, Mountain, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - About Text */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate Python Backend Developer with a specialized focus on building scalable applications and pioneering solutions. My expertise lies in architecting robust REST APIs, managing cloud deployments on AWS, and optimizing backend performance to deliver seamless user experiences. I thrive in dynamic environments where I can contribute to impactful projects that shape the future of technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not architecting backend systems, I'm an avid explorer and creator. You can find me trekking through mountains, traveling to new places, or expressing my creativity through art. I also cherish quality time with friends and family, which keeps me grounded and inspired.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Life Outside Code
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center space-x-4">
                  <PenTool className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Art & Creativity</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Expressing ideas through visual art.</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center space-x-4">
                  <Mountain className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Travel & Trekking</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Exploring new horizons and challenges.</p>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center space-x-4">
                  <Users className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Friends & Family</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Building meaningful connections.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div className="grid grid-cols-2 gap-6" variants={itemVariants}>
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-lg">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/20 rounded-lg">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;