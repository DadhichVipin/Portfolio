import React from 'react';
import { Code, Database, Cloud } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="flex justify-center space-x-4 mb-8">
          <div className="animate-bounce-subtle">
            <Code className="w-12 h-12 text-white" />
          </div>
          <div className="animate-bounce-subtle" style={{ animationDelay: '0.2s' }}>
            <Database className="w-12 h-12 text-white" />
          </div>
          <div className="animate-bounce-subtle" style={{ animationDelay: '0.4s' }}>
            <Cloud className="w-12 h-12 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Vipin Dadhich</h1>
        <p className="text-white/80 text-lg">Python Backend Developer</p>
        <div className="mt-8">
          <div className="w-16 h-1 bg-white/30 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;