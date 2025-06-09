import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/DadhichVipin',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/vipin-dadhich',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:vipin11dadhich@gmail.com',
      icon: Mail
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Vipin Dadhich</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Python Backend Developer specializing in EV charging solutions, REST APIs, 
              and cloud deployments. Building scalable applications that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors duration-300 group"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>vipin11dadhich@gmail.com</p>
              <p>+91 8005580812</p>
              <p>Sujangarh, Rajasthan</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 mb-4 md:mb-0">
            <span>© {currentYear} Vipin Dadhich. Made with</span>
            <Heart className="w-4 h-4 mx-2 text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            <span>Available for freelance opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;