import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Scroll to top on page navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll to top
    });
  }, [pathname]);

  return null;
}

// Pages
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';
// import JobsPage from './pages/Jobs';
import MentorshipPage from './pages/Mentorship';
import TrainingPage from './pages/Training';
// import GovtSchemesPage from './pages/GovtSchemes';
import EventsPage from './pages/Events';
import IndustriesPage from './pages/Industries';
import NetworkingPage from './pages/Networking';

// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/dashboard" element={<PageWrapper><HomePage /></PageWrapper>} />
          {/* <Route path="/jobs" element={<PageWrapper><JobsPage /></PageWrapper>} /> */}
          <Route path="/mentorship" element={<PageWrapper><MentorshipPage /></PageWrapper>} />
          <Route path="/training" element={<PageWrapper><TrainingPage /></PageWrapper>} />
          {/* <Route path="/schemes" element={<PageWrapper><GovtSchemesPage /></PageWrapper>} /> */}
          <Route path="/events" element={<PageWrapper><EventsPage /></PageWrapper>} />
          <Route path="/industries" element={<PageWrapper><IndustriesPage /></PageWrapper>} />
          <Route path="/networking" element={<PageWrapper><NetworkingPage /></PageWrapper>} />
          <Route path="/login" element={<PageWrapper><HomePage /></PageWrapper>} />
          <Route path="/register" element={<PageWrapper><RegisterPage /></PageWrapper>} />
          {/* 404 fallback */}
          <Route path="*" element={
            <PageWrapper>
              <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900 pt-16">
                <div className="text-center">
                  <div className="text-8xl font-bold gradient-text mb-4">404</div>
                  <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">Page not found</h2>
                  <p className="text-gray-500 mb-6">This page doesn't exist yet.</p>
                  <a href="/" className="btn-primary">Go Home</a>
                </div>
              </div>
            </PageWrapper>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
