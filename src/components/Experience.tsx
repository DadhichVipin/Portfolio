import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      company: 'Mai Kisaan',
      role: 'Freelance Senior Software Developer',
      duration: 'Feb 2025 - Present',
      location: 'Remote',
      description: 'MaiKisaan is dedicated to revolutionizing agriculture in India by connecting Farmers to global markets.',
      responsibilities: [
        'Development and maintenance of software system',
        'Writing clean, scalable and efficient code',
        'Collaborate with cross-functional teams',
        'Lead the team, assign tasks, review code etc.'
      ],
      technologies: ['Django', 'DRF', 'Celery', 'PostgreSQL', 'React Native', 'AWS Lambda', 'EC2', 'S3', 'Nginx', 'Gunicorn'],
      current: true
    },
    {
      id: 2,
      company: 'AB Tech Electric Pvt Ltd',
      role: 'Freelance Back-end Developer',
      duration: 'Aug 2024 - Feb 2025',
      location: 'Remote',
      description: 'AB Tech Electric Pvt Ltd is Electric Equipment Manufacturer and also provide End-to-End Electric Vehicle (EV) Charging Software Services & Solutions.',
      responsibilities: [
        'Built Open Charge Point Protocol (OCPP) to communicate with charging stations',
        'Implemented WebSocket communication with chargers',
        'Developed unit consumption calculation systems',
        'Deployed applications on EC2 with Nginx and Gunicorn'
      ],
      technologies: ['Node.js', 'WebSocket', 'Express', 'PostgreSQL', 'Nginx', 'PM2', 'AWS', 'S3', 'EC2'],
      current: false
    },
    {
      id: 3,
      company: 'EVC Technologies Pvt Ltd',
      role: 'Senior Software Engineer',
      duration: 'Aug 2022 - Aug 2024',
      location: 'Remote',
      description: 'EVC Technologies Pvt Ltd provide End-to-End Electric Vehicle (EV) Charging Software Services & Solutions to potential companies like EV Charging Network companies, Charge Point Operators (CPOs), fleet companies, charger installers/dealers/resellers, EV Charger manufacturers, real estate builders, oil/gas/DISCOM companies, etc.',
      responsibilities: [
        'Built back-end system for managing electric vehicle charging station management',
        'Developed access-based views for users like station managers, franchise owners, and Admins',
        'Generated various types of reports based on consumption',
        'Created REST APIs for mobile application and CSMS',
        'Managed deployment processes'
      ],
      technologies: ['Python', 'Django', 'REST API', 'Django Rest Framework', 'PostgreSQL', 'Celery', 'Nginx', 'Gunicorn', 'AWS', 'S3', 'EC2'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey in backend development and EV charging solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-secondary-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-primary-600 rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 animate-slide-up">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Building className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.company}
                        </h3>
                        {exp.current && (
                          <span className="ml-3 px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-medium rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                        {exp.role}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Responsibilities:</h5>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;