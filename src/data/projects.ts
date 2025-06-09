export const projects = [
  {
    id: 1,
    title: 'EVCFinder',
    category: 'web',
    description: 'Comprehensive back-end system for managing electric vehicle charging station operations with role-based access control and advanced reporting capabilities.',
    image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Django', 'REST API', 'PostgreSQL', 'Celery', 'AWS', 'Nginx'],
    features: [
      'Built back-end system for EV charging station management',
      'Access-based views for station managers, franchise owners, and Admins',
      'Generate various types of reports based on consumption',
      'REST APIs for mobile application and CSMS',
      'Managed deployment process'
    ],
    liveUrl: 'https://www.evcfinder.co.in/',
    githubUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'EVCFinder OCPP Server',
    category: 'backend',
    description: 'Open Charge Point Protocol (OCPP) server implementation for real-time communication with EV charging stations via WebSocket connections.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Django', 'WebSocket', 'PostgreSQL', 'Celery', 'AWS EC2'],
    features: [
      'Built OCPP to communicate with charging stations',
      'WebSocket communication implementation',
      'Unit consumption calculation algorithms',
      'Charging session management',
      'Deployed on EC2 with Nginx and Gunicorn'
    ],
    liveUrl: 'https://www.evcfinder.co.in/',
    githubUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'AB Tech OCPP Server',
    category: 'backend',
    description: 'Node.js-based OCPP server solution providing robust communication protocols for electric vehicle charging infrastructure.',
    image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Node.js', 'Express', 'WebSocket', 'PostgreSQL', 'PM2', 'AWS'],
    features: [
      'OCPP protocol implementation in Node.js',
      'WebSocket communication with chargers',
      'Real-time charging session monitoring',
      'Automated deployment with PM2',
      'Scalable architecture on AWS'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Mai Kisaan Platform',
    category: 'web',
    description: 'Agricultural technology platform connecting farmers to global markets with comprehensive supply chain management.',
    image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Django', 'DRF', 'React Native', 'React.js', 'PostgreSQL', 'AWS Lambda', 'Celery'],
    features: [
      'Full-stack agricultural platform development',
      'Cross-functional team collaboration for React Native mobile app development and React.js web application and admin panel',
      'Clean, scalable code architecture',
      'Mobile application backend APIs',
      'Team leadership and code reviews',
      'End-to-end testing and deployment' 
    ],
    liveUrl: 'https://play.google.com/store/apps/details?id=com.maikisaan.android',
    githubUrl: '#',
    featured: true
  },
  {
    id: 5,
    title: 'Shekhawat Oil Career Fleet Management',
    category: 'web',
    description: 'Fleet management system for oil transportation company with vehicle tracking and logistics optimization.',
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Django', 'PostgreSQL', 'AWS EC2', 'S3', 'Nginx', 'Gunicorn'],
    features: [
      'Fleet management system development',
      'Vehicle tracking and monitoring',
      'Logistics optimization algorithms',
      'Driver management portal',
      'Real-time reporting dashboard'
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: false
  }
]; 