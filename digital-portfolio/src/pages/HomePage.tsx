import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

const HomePage: React.FC = () => {
  console.log('HomePage rendering...');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 transition-colors duration-300">
      {/* Header with Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Digital Portfolio Platform
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase your skills and achievements in two unique formats - 
            a modern portfolio or a traditional passport-style presentation.
          </p>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 mb-12 max-w-4xl mx-auto transition-colors duration-300">
          <div className="flex items-center space-x-6 mb-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-200"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Welcome, John Doe!
              </h2>
              <p className="text-gray-600 dark:text-gray-300">john.doe@example.com</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                University of Technology • Computer Science Engineering
              </p>
            </div>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Passionate full-stack developer with expertise in React, Node.js, and cloud technologies. 
            Love creating innovative solutions and learning new technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Link
            to="/portfolio"
            className="block bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Portfolio Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Modern, customizable portfolio with multiple layouts, color themes, 
              and animations. Perfect for showcasing your work professionally.
            </p>
            <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
              View Portfolio
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link
            to="/passport"
            className="block bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-6 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Passport Mode
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Traditional passport-style presentation with flip navigation. 
              A unique way to present your credentials and achievements.
            </p>
            <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
              View Passport
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            to="/settings"
            className="inline-flex items-center px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Customize Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;