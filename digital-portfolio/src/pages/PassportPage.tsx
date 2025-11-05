import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

const PassportPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      id: 'cover',
      title: 'Digital Passport Cover',
      content: (
        <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-blue-700 text-white">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-2">DIGITAL PASSPORT</h1>
          <p className="text-xl opacity-90 mb-8">Student Portfolio & Credentials</p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
            <p className="text-sm">Issued by</p>
            <p className="font-semibold">RAREMINS PLATFORM</p>
          </div>
        </div>
      )
    },
    {
      id: 'personal',
      title: 'Personal Information',
      content: (
        <div className="h-full p-8 bg-gradient-to-br from-gray-50 to-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Details</h2>
          <div className="flex items-start space-x-6 mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
              alt="John Doe"
              className="w-32 h-40 object-cover border-4 border-gray-300 rounded-lg shadow-lg"
            />
            <div className="flex-1">
              <div className="space-y-3">
                <div className="flex">
                  <span className="w-20 text-sm font-medium text-gray-600">Name:</span>
                  <span className="text-gray-900 font-semibold">John Doe</span>
                </div>
                <div className="flex">
                  <span className="w-20 text-sm font-medium text-gray-600">Email:</span>
                  <span className="text-gray-900">john.doe@example.com</span>
                </div>
                <div className="flex">
                  <span className="w-20 text-sm font-medium text-gray-600">Age:</span>
                  <span className="text-gray-900">22</span>
                </div>
                <div className="flex">
                  <span className="w-20 text-sm font-medium text-gray-600">Contact:</span>
                  <span className="text-gray-900">+1234567890</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Passport ID</p>
                <p className="font-mono text-lg font-bold text-blue-600">DP2024001</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-semibold">✓ VERIFIED</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'education',
      title: 'Education',
      content: (
        <div className="h-full p-8 bg-gradient-to-br from-blue-50 to-white">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Educational Background</h2>
          <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Bachelor of Technology</h3>
            <p className="text-gray-700 font-medium mb-2">University of Technology</p>
            <p className="text-gray-600 mb-2">Computer Science Engineering</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">2020 - 2024</span>
              <span className="font-semibold text-blue-600">8.5 CGPA</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Digital Passport</h1>
            <div className="text-sm text-gray-500">
              Page {currentPage + 1} of {pages.length}
            </div>
          </div>
        </div>
      </div>

      {/* Passport Book */}
      <div className="flex items-center justify-center min-h-screen p-8">
        <div className="relative">
          {/* Passport Book Container */}
          <div className="w-96 h-[600px] bg-white rounded-lg shadow-2xl border-4 border-gray-800 relative overflow-hidden">
            {/* Page Content */}
            <div className="h-full">
              {pages[currentPage].content}
            </div>
            
            {/* Page Number */}
            <div className="absolute bottom-4 right-4 text-xs text-gray-500 bg-white/80 px-2 py-1 rounded">
              {currentPage + 1}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-3 rounded-full shadow-lg transition-all ${
                currentPage === 0
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute -right-16 top-1/2 transform -translate-y-1/2">
            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`p-3 rounded-full shadow-lg transition-all ${
                currentPage === pages.length - 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Page Indicators */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentPage ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PassportPage;