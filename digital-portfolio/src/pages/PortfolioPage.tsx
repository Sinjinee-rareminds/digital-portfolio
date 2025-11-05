import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  console.log('PortfolioPage rendering...');
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-2xl font-bold text-gray-900">Portfolio Mode</h1>
            </div>
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Customize
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center space-x-6">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="John Doe"
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">John Doe</h1>
                <p className="text-lg text-gray-600 mb-2">Computer Science Engineering</p>
                <p className="text-gray-500">University of Technology</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">GitHub</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">
                Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. 
                Love creating innovative solutions and learning new technologies.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">JavaScript</span>
                  <span className="text-sm text-gray-500">9/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Programming Languages</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">React</span>
                  <span className="text-sm text-gray-500">9/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Frontend Frameworks</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-900">Node.js</span>
                  <span className="text-sm text-gray-500">8/10</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">Backend Technologies</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
                  alt="E-Commerce Platform"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-600 mb-4">Full-stack e-commerce solution with React frontend and Node.js backend</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-sm rounded-full text-white bg-blue-500">React</span>
                    <span className="px-3 py-1 text-sm rounded-full text-white bg-blue-500">Node.js</span>
                    <span className="px-3 py-1 text-sm rounded-full text-white bg-blue-500">MongoDB</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline">View Code</a>
                    <a href="#" className="text-sm font-medium text-blue-600 hover:underline">Live Demo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;