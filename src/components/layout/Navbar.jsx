import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import {
  Menu, X, Sun, Moon, Bell, ChevronDown,
  Zap, LogOut, Settings, LayoutDashboard
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Training', href: '/training' },
  { label: 'Mentorship', href: '/mentorship' },
  { label: 'Industries', href: '/industries' },
  { label: 'Events', href: '/events' },
  { label: 'Community', href: '/networking' },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close profile dropdown on outside click
  const profileRef = useRef(null);
  useEffect(() => {
    const handler = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500 origin-left"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 dark:bg-[#0A0A0A]/85 backdrop-blur-2xl border-b border-black/[0.06] dark:border-white/[0.06] ${
          isScrolled
            ? ''
            : 'lg:bg-transparent lg:backdrop-blur-none lg:border-b-transparent'
        }`}
        style={{
          boxShadow: isScrolled
            ? '0 1px 40px rgba(0,0,0,0.06)'
            : 'none',
        }}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-lg bg-[#111111] dark:bg-white flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform duration-300">
                <span className="font-display font-black text-sm text-white dark:text-[#111111] relative z-10">F</span>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="leading-none">
                <span className="font-display font-bold text-[17px] text-[#111111] dark:text-white block leading-none">FEN</span>
                <span className="text-[8px] text-[#9E9E9E] font-medium uppercase tracking-[0.12em] block mt-0.5">Future Entrepreneur</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="relative px-3 py-2 text-sm font-medium transition-colors duration-200 group rounded-lg hover:bg-black/[0.04] dark:hover:bg-white/[0.04]"
                  >
                    <span className={isActive
                      ? 'text-[#111111] dark:text-white font-semibold'
                      : 'text-[#555555] dark:text-[#CFCFCF] group-hover:text-[#111111] dark:group-hover:text-white'
                    }>
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-1 left-3 right-3 h-[1.5px] bg-[#111111] dark:bg-white rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <Link to="/register" className="btn-primary text-xs px-3.5 py-1.5 rounded-xl font-semibold hover:opacity-90 transition-all">Join FEN</Link>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-200"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                >
                  {isDark ? <Sun size={17} /> : <Moon size={17} />}
                </motion.div>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-[#9E9E9E] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-all duration-200"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMenuOpen ? 'x' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                className="lg:hidden overflow-hidden"
              >
                <div className="pb-5 pt-3 space-y-0.5 border-t border-black/[0.06] dark:border-white/[0.06] mt-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.25 }}
                    >
                      <Link
                        to={link.href}
                        className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                          location.pathname === link.href
                            ? 'text-[#111111] dark:text-white bg-black/[0.04] dark:bg-white/[0.04] font-semibold'
                            : 'text-[#555555] dark:text-[#CFCFCF] hover:text-[#111111] dark:hover:text-white hover:bg-black/[0.04] dark:hover:bg-white/[0.04]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
