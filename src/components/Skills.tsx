import React from 'react';
import { Code, Database, Cloud, Server, GitBranch, Monitor } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: Code,
      color: 'primary',
      skills: [
        { name: 'Python', level: 95, description: 'Primary language for backend development' }
      ]
    },
    {
      id: 2,
      title: 'Frameworks & Libraries',
      icon: Server,
      color: 'secondary',
      skills: [
        { name: 'Django', level: 95, description: 'Web framework for rapid development' },
        { name: 'Django Rest Framework', level: 90, description: 'API development toolkit' },
        { name: 'Node.js', level: 80, description: 'JavaScript runtime for backend' }
      ]
    },
    {
      id: 3,
      title: 'Database Technologies',
      icon: Database,
      color: 'accent',
      skills: [
        { name: 'PostgreSQL', level: 90, description: 'Primary relational database' },
        { name: 'MySQL', level: 85, description: 'Relational database management' }
      ]
    },
    {
      id: 4,
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'primary',
      skills: [
        { name: 'AWS', level: 88, description: 'EC2, S3, VPC, Route 53, Load Balancing' },
        { name: 'Nginx', level: 85, description: 'Web server and reverse proxy' },
        { name: 'Gunicorn', level: 85, description: 'Python WSGI HTTP Server' },
        { name: 'Docker', level: 70, description: 'Currently learning containerization' }
      ]
    },
    {
      id: 5,
      title: 'Tools & Technologies',
      icon: Monitor,
      color: 'secondary',
      skills: [
        { name: 'Celery', level: 85, description: 'Distributed task queue' },
        { name: 'Django Channels', level: 80, description: 'WebSocket and async support' },
        { name: 'PM2', level: 75, description: 'Node.js process manager' },
        { name: 'Uvicorn', level: 80, description: 'ASGI web server' }
      ]
    },
    {
      id: 6,
      title: 'Version Control & OS',
      icon: GitBranch,
      color: 'accent',
      skills: [
        { name: 'Git & GitHub', level: 90, description: 'Version control systems' },
        { name: 'Linux', level: 85, description: 'Server administration' },
        { name: 'Windows', level: 80, description: 'Development environment' }
      ]
    }
  ];

  const specializations = [
    {
      title: 'OCPP Protocol',
      description: 'Open Charge Point Protocol for EV charging stations',
      icon: '⚡'
    },
    {
      title: 'OCPI Protocol',
      description: 'Open Charge Point Interface for interoperability',
      icon: '🔌'
    },
    {
      title: 'REST API Development',
      description: 'Scalable and secure API design and implementation',
      icon: '🔗'
    },
    {
      title: 'WebSocket Communication',
      description: 'Real-time bidirectional communication systems',
      icon: '📡'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-50 dark:bg-primary-900/20',
          border: 'border-primary-200 dark:border-primary-700',
          icon: 'text-primary-600 dark:text-primary-400',
          progress: 'bg-primary-600'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-50 dark:bg-secondary-900/20',
          border: 'border-secondary-200 dark:border-secondary-700',
          icon: 'text-secondary-600 dark:text-secondary-400',
          progress: 'bg-secondary-600'
        };
      case 'accent':
        return {
          bg: 'bg-accent-50 dark:bg-accent-900/20',
          border: 'border-accent-200 dark:border-accent-700',
          icon: 'text-accent-600 dark:text-accent-400',
          progress: 'bg-accent-600'
        };
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-800',
          border: 'border-gray-200 dark:border-gray-700',
          icon: 'text-gray-600 dark:text-gray-400',
          progress: 'bg-gray-600'
        };
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive expertise in backend development, cloud technologies, and specialized protocols
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            const colors = getColorClasses(category.color);
            
            return (
              <div
                key={category.id}
                className={`p-8 rounded-xl border ${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300 animate-slide-up`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <IconComponent className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-900 dark:text-white font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                        <div
                          className={`h-2 rounded-full ${colors.progress} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Specializations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <div
                key={spec.title}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{spec.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {spec.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {spec.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg">
            <span className="text-gray-900 dark:text-white font-medium mr-2">Currently Learning:</span>
            <span className="text-primary-600 dark:text-primary-400 font-semibold">Docker & Kubernetes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;