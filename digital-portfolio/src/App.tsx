import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { PortfolioProvider } from './contexts/PortfolioContext';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import PassportPage from './pages/PassportPage';
import SettingsPage from './pages/SettingsPage';
import ProfileSettings from './pages/settings/ProfileSettings';
import ThemeSettings from './pages/settings/ThemeSettings';
import LayoutSettings from './pages/settings/LayoutSettings';
import ExportSettings from './pages/settings/ExportSettings';
import SharingSettings from './pages/settings/SharingSettings';

function App() {
  console.log('App rendering...');
  
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/passport" element={<PassportPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/settings/profile" element={<ProfileSettings />} />
              <Route path="/settings/theme" element={<ThemeSettings />} />
              <Route path="/settings/layout" element={<LayoutSettings />} />
              <Route path="/settings/export" element={<ExportSettings />} />
              <Route path="/settings/sharing" element={<SharingSettings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Router>
      </PortfolioProvider>
    </ThemeProvider>
  );
}

export default App;