import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Upload, Palette, Zap, User, Save } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const SettingsPage: React.FC = () => {
  const { theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState('blue');
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [profileImage, setProfileImage] = useState('');

  const colorThemes = [
    { id: 'blue', name: 'Ocean Blue', primary: '#3b82f6', secondary: '#1e40af', accent: '#60a5fa' },
    { id: 'purple', name: 'Royal Purple', primary: '#8b5cf6', secondary: '#7c3aed', accent: '#a78bfa' },
    { id: 'green', name: 'Forest Green', primary: '#10b981', secondary: '#059669', accent: '#34d399' },
    { id: 'orange', name: 'Sunset Orange', primary: '#f59e0b', secondary: '#d97706', accent: '#fbbf24' },
    { id: 'pink', name: 'Rose Pink', primary: '#ec4899', secondary: '#db2777', accent: '#f472b6' },
    { id: 'indigo', name: 'Deep Indigo', primary: '#6366f1', secondary: '#4f46e5', accent: '#818cf8' }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveSettings = () => {
    // In a real app, this would save to the backend
    const settings = {
      theme: selectedTheme,
      animations: animationsEnabled,
      profileImage: profileImage
    };
    localStorage.setItem('portfolioSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white dark:bg-dark-800 shadow-sm border-b border-gray-200 dark:border-dark-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="h-6 w-px bg-gray-300 dark:bg-dark-600"></div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle showLabel />
              <button
                onClick={handleSaveSettings}
                className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Settings */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Profile Settings</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Profile Image
                </label>
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-200 dark:bg-dark-700 border-4 border-gray-300 dark:border-dark-600">
                    {profileImage ? (
                      <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                        <User className="w-8 h-8" />
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload Image
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 5MB</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Personal Information
                </label>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Email</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Bio</label>
                    <textarea
                      rows={3}
                      defaultValue="Passionate full-stack developer with expertise in React, Node.js, and cloud technologies."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Theme Settings */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 transition-colors duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <Palette className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Theme Settings</h2>
            </div>

            <div className="space-y-6">
              {/* Dark Mode Toggle */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Appearance Mode
                </label>
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {theme === 'light' ? 'Use light theme' : 'Use dark theme'}
                    </p>
                  </div>
                  <ThemeToggle />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Color Theme
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {colorThemes.map((theme) => (
                    <button
                      key={theme.id}
                      onClick={() => setSelectedTheme(theme.id)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        selectedTheme === theme.id
                          ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{theme.name}</span>
                        <div className="flex space-x-1">
                          <div 
                            className="w-3 h-3 rounded-full border border-gray-200"
                            style={{ backgroundColor: theme.primary }}
                          ></div>
                          <div 
                            className="w-3 h-3 rounded-full border border-gray-200"
                            style={{ backgroundColor: theme.secondary }}
                          ></div>
                          <div 
                            className="w-3 h-3 rounded-full border border-gray-200"
                            style={{ backgroundColor: theme.accent }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        Primary, Secondary, Accent
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Animation Settings
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={animationsEnabled}
                      onChange={(e) => setAnimationsEnabled(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Enable animations</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Fade in effects</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Hover animations</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Scroll animations</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Layout Settings */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-6 h-6 text-orange-600" />
              <h2 className="text-xl font-bold text-gray-900">Portfolio Layout</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Default Layout Style
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['Modern', 'Classic', 'Creative', 'Minimal'].map((layout) => (
                    <button
                      key={layout}
                      className="p-3 rounded-lg border border-gray-200 hover:border-gray-300 text-left transition-all"
                    >
                      <div className="font-medium text-sm">{layout}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {layout === 'Modern' && 'Clean and contemporary'}
                        {layout === 'Classic' && 'Traditional professional'}
                        {layout === 'Creative' && 'Bold and artistic'}
                        {layout === 'Minimal' && 'Simple and elegant'}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Display Options
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Show social media links</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Display skill progress bars</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Show project images</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Enable dark mode</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Export & Sharing */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Upload className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-bold text-gray-900">Export & Sharing</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Export Options
                </label>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-left">
                    <div className="font-medium">Export as PDF</div>
                    <div className="text-sm text-blue-600">Download portfolio as PDF document</div>
                  </button>
                  <button className="w-full px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-left">
                    <div className="font-medium">Generate Shareable Link</div>
                    <div className="text-sm text-green-600">Create public link to share portfolio</div>
                  </button>
                  <button className="w-full px-4 py-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-left">
                    <div className="font-medium">Export Data</div>
                    <div className="text-sm text-purple-600">Download portfolio data as JSON</div>
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Privacy Settings
                </label>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Make portfolio public</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Allow search engine indexing</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">Show contact information</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleSaveSettings}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            Save All Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;